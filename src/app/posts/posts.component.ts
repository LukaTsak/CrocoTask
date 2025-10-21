import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}

  users: any[] = [];
  userId: string | null = null;
  allPosts: any[] = [];
  userPosts: any[] = [];
  cardExpanderId: number | null = null;

  ngOnInit() {
    this.apiService.getUsers().subscribe((users) => {
      this.users = users as any[];
    });

    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      this.userId = id;
      this.allPosts = [];

      if (this.userId) {
        this.apiService.getPostsById(Number(this.userId)).subscribe((posts) => {
          this.allPosts.push(posts);
        });
      } else {
        this.apiService.getPosts().subscribe((posts) => {
          this.allPosts = posts as any[];
        });
      }
    });
  }

  //////// Card Toggle

  isExpanded = false;
  secondOption = false;

  expandedCardTitle: string = '';
  expandedCardBody: string = '';
  expandedCardUsername: string = '';

  toggleCard(id?: number, title?: string, body?: string, username?: string) {
    this.cardExpanderId = id || null;
    this.expandedCardTitle = title || '';
    this.expandedCardBody = body || '';
    this.expandedCardUsername = username || '';

    this.isExpanded = !this.isExpanded;
    this.secondOption = !this.secondOption;
  }

  //////// user name

  getUserName(userId: number): string {
    const user = this.users.find((u) => u.id === userId);
    return user ? user.name : 'Unknown';
  }
}

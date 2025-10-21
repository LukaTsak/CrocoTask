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

  userId: string | null = null;
  allPosts: any[] = [];
  userPosts: any[] = [];
  cardExpanderId: number | null = null;

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('id');
      this.userId = id;
      console.log('Query params changed →', { id });
    });
    if (this.userId) {
      this.apiService.getPostsById(Number(this.userId)).subscribe((posts) => {
        console.log(posts);
        this.allPosts.push(posts);
      });
    } else if (this.userId == null) {
      this.apiService.getPosts().subscribe((posts) => {
        console.log(posts);
        this.allPosts = posts as any[];
      });
    }
  }

  //////// Card Toggle 

  isExpanded = false;

  toggleCard(id?: number) {
    this.isExpanded = !this.isExpanded;
    this.cardExpanderId = id || null;

    console.log('Toggled card with ID:', id);
  }
}

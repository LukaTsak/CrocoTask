import { Component, NgModule, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private apiService: ApiServiceService) {}

  posts: any[] = [];

  ngOnInit() {
    this.apiService.getUsers().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts as any[];
    });
  }
}

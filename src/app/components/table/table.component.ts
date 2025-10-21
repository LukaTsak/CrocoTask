import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule,RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
    constructor(private apiService: ApiServiceService) {}
  
    posts: any[] = [];
  
    ngOnInit() {
      this.apiService.getUsers().subscribe((posts) => {
        console.log(posts);
        this.posts = posts as any[];
      });
    }
}

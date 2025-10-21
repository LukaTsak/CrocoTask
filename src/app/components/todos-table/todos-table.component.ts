import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-todos-table',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './todos-table.component.html',
  styleUrl: './todos-table.component.scss'
})
export class TodosTableComponent {
  Users: any[] = [];
    FilteredUsers: any[] = [];
    filterInput = '';
  
    constructor(private apiService: ApiServiceService) {}
  
    ngOnInit() {
      this.apiService.getUsers().subscribe((Users) => {
        console.log(Users);
        this.Users = Users as any[];
        this.FilteredUsers = [...this.Users];
      });
    }
  
    search(searchItem: string = '') {
      const term = searchItem.toLowerCase().trim();
      console.log('Searching:', term);
  
      if (!term) {
        this.FilteredUsers = [...this.Users];
        return;
      }
  
      this.FilteredUsers = this.Users.filter(user =>
        user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
      );
    }
}

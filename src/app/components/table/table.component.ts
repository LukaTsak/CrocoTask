import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
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

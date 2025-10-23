import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
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

    this.FilteredUsers = this.Users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
  }
}

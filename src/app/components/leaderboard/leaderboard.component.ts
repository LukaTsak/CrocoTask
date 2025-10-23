import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
  leaderboardArr: any[] = [];
  tempLeaderboardArr: any[] = [];
  filterInput = '';

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.generateObj(50);
  }

  // search(searchItem: string = '') {
  //   const term = searchItem.toLowerCase().trim();
  //   console.log('Searching:', term);

  //   if (!term) {
  //     this.filteredLeaderboardArr = [...this.leaderboardArr];
  //     return;
  //   }

  //   this.filteredLeaderboardArr = this.leaderboardArr.filter(
  //     (user) =>
  //       user.loginName.toLowerCase().includes(term)
  //   );
  // }

  generateObj(Quantity: number) {
    for (let i = 0; i < Quantity; i++) {
      const weekTypes = ['I', 'II', 'III', 'IV'];
      const customerId = i + 1;
      const loginName = this.generateRandString(
        Math.floor(Math.random() * (15 - 5 + 1) + 5)
      );
      const place = Math.floor(Math.random() * Quantity);
      const week = weekTypes[Math.floor(Math.random() * weekTypes.length)];

      this.leaderboardArr.push({
        customerId: customerId,
        loginName: loginName,
        place: place,
        week: week,
      });
      // console.log(this.leaderboardArr);
    }
    this.tempLeaderboardArr = this.leaderboardArr;
  }

  generateRandString(length: number) {
    let string = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i <= length; i++) {
      string += characters[Math.floor(Math.random() * characters.length)];
    }
    // console.log(string);
    return string;
  }

  searchByWeek(str: string) {
    if (str === 'ALL') {
      this.tempLeaderboardArr = [...this.leaderboardArr];
    } else {
      let filteredArr = [...this.leaderboardArr].filter(
        (el) => el.week === str
      );
      console.log(filteredArr);
      this.tempLeaderboardArr = filteredArr;
    }
  }
}

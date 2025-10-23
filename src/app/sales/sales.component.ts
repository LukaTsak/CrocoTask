import { Component } from '@angular/core';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { LeaderboardComponent } from '../components/leaderboard/leaderboard.component';

@Component({
  selector: 'app-sales',
  imports: [SpinnerComponent,LeaderboardComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {

}

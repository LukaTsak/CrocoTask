import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentDateTime: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}

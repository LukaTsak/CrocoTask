import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService) {}
  
  currentDateTime: Date = new Date();

  navClosed: boolean = false;

  ngOnInit() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
    this.sharedService.currentValue$.subscribe((isNavOpen) => {
      this.navClosed = !isNavOpen;
      console.log('Nav state changed:', isNavOpen);
    });
  }
}

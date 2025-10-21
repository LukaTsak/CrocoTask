import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink,CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  isNavOpen = true;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.checkWindowWidth();
    this.sharedService.updateValue(this.isNavOpen);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowWidth();
    this.sharedService.updateValue(this.isNavOpen);
  }

  private checkWindowWidth() {
    this.isNavOpen = window.innerWidth > 500;
    this.sharedService.updateValue(this.isNavOpen);
  }

}

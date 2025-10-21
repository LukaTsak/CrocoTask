import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isNavOpen = true;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.navState$.subscribe((isOpen) => {
      this.isNavOpen = isOpen;
      console.log('Navigation updated:', isOpen);
    });

    this.checkWindowWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowWidth();
  }

  private checkWindowWidth() {
    const shouldBeOpen = window.innerWidth > 500;
    if (this.isNavOpen !== shouldBeOpen) {
      this.isNavOpen = shouldBeOpen;
      this.sharedService.updateValue(this.isNavOpen);
    }
  }

  closenav(){
    this.sharedService.updateValue(false);
    console.log('Navigation closed via closenav');
  }
}

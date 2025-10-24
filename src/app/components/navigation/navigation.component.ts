import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isNavOpen = true;
  lineFromTop = '111';
  addTop = 67;
  displayLine = false;

  currentRoute = '';

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.sharedService.navState$.subscribe((isOpen) => {
      this.isNavOpen = isOpen;
      // console.log('Navigation updated:', isOpen);
    });

    this.checkWindowWidth();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        // console.log('Current route:', this.currentRoute);

        if (this.currentRoute === '/users') {
          this.displayLine = true;
          this.lineFromTop = '111';
          // console.log('users');
        } else if (this.currentRoute === '/posts') {
          this.displayLine = true;
          this.lineFromTop = '178';

          // console.log('posts');
        } else if (this.currentRoute === '/sales') {
          this.displayLine = true;
          this.lineFromTop = '245';
          // console.log('posts');
        } else {
          this.displayLine = false;
          // console.log('other page:', this.currentRoute);
        }
      });
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

  closenav() {
    this.sharedService.updateValue(false);
    console.log('Navigation closed via closenav');
  }
}

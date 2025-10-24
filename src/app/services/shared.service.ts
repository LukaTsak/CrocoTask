import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private navStateSource = new BehaviorSubject<boolean>(true);
  navState$ = this.navStateSource.asObservable();

  updateValue(isOpen: boolean) {
    this.navStateSource.next(isOpen);
  }

  toggleNav() {
    this.navStateSource.next(!this.navStateSource.value);
  }
}

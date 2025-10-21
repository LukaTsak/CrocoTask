import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private valueSource = new BehaviorSubject<any>(null);
  currentValue$ = this.valueSource.asObservable();
  updateValue(value: any) {
    this.valueSource.next(value);
  }
}

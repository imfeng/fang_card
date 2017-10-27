import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardComponent {

  @select() remains$: Observable<number>;
  @select() highestSpeed$: Observable<number>;

  @select() status$: Observable<number>;
  @select() elapsedMs$: Observable<number>;

  constructor() {
    console.log('Hello DashboardComponent Component');
  }

}

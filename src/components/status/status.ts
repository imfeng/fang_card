import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { GameActions } from '../../providers/action/action';
import { stop } from '../../providers/helper/event';
import { STATUS } from '../../providers/interface/interface';

@Component({
  selector: 'status',
  templateUrl: 'status.html'
})
export class StatusComponent {

  @select() status$: Observable<number>;
  @select() elapsedMs$: Observable<number>;

  status: any;

  constructor(private actions: GameActions) {
      this.status = STATUS;
  }

  reset(e: Event) {
      stop(e);
      this.actions.reset();
  }
}

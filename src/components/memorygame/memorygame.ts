import { Component,OnInit } from '@angular/core';
import { GameActions } from '../../providers/action/action';
import { STATUS } from '../../providers/interface/interface';

/**
 * Generated class for the MemorygameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'memory-game',
  templateUrl: 'memorygame.html'
})
export class MemorygameComponent implements OnInit {
  constructor(private actions: GameActions) { }
  
      ngOnInit() {
          this.actions.updateStatus(STATUS.READY);
          this.actions.reset();
      }

}

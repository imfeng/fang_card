import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { GameActions } from '../../providers/action/action';
import { ICard } from '../../providers//interface/interface';

/**
 * Generated class for the ChessboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chessboard',
  templateUrl: 'chessboard.html'
})
export class ChessboardComponent {

  @select() cards$: Observable<ICard[]>;
  //cards$: Observable<ICard[]>;
  constructor(private actions: GameActions) { }

  trackByCards(index: number, card: ICard) {
      return card._id;
  }

}

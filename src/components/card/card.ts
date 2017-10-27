import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CARDS } from '../../providers/store/model/card';
import { ICard } from '../../providers/interface/interface';


@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input() info: ICard;
  
      @Output() flipped = new EventEmitter();
  
      backCard: ICard;
  
      constructor() {
          this.backCard = CARDS.find(c => c.name === 'back');
      }
  
      flip(info: ICard) {
          if (info.flipped) {
              return;
          }
          this.flipped.emit(info);
      }
}

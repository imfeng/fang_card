import { Component, Input } from '@angular/core';

/**
 * Generated class for the InfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info',
  templateUrl: 'info.html'
})
export class InfoComponent {

  @Input() title: string;
  @Input() text: string;
  constructor() {
    console.log('Hello InfoComponent Component');

  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StoreProvider } from '../../providers/store/store';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private store:StoreProvider
   ) {
      this.store.configure();
  }

}

import { Injectable, NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import 'rxjs/add/operator/map';

import { IState } from '../interface/interface';
import { rootReducer } from './reducer';

@Injectable()
export class StoreProvider {

  constructor(private ngRedux: NgRedux<IState>) {
  }

  configure(){
    this.ngRedux.configureStore(
      rootReducer,
      {},
      [],
      []);
  }

}

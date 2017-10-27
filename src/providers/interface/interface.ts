import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the InterfaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InterfaceProvider {

  constructor(public http: Http) {
    console.log('Hello InterfaceProvider Provider');
  }

}
export enum STATUS {
  READY,
  PLAYING,
  PASS
}
export interface ICard {
  _id?: number;
  flipped: boolean;
  name: string;
  url?: string;
}
export interface IState {
  remains?: number;
  highestSpeed?: number;
  status?: STATUS;
  cards?: ICard[];
  lastSelectedCard?: ICard;
  elapsedMs?: number;
};

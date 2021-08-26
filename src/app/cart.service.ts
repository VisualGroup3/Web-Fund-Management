import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Manager } from './manager';
import { Fund } from './fund';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private ManagerSource: BehaviorSubject<any> = new BehaviorSubject([]);
  managers = this.ManagerSource.asObservable();

  private FundSource: BehaviorSubject<any> = new BehaviorSubject([]);
  funds = this.FundSource.asObservable();

  constructor() { }

  setManagerObj(message: Manager[]) {
    this.ManagerSource.next(message)
  }

  setFundObj(message: Fund[]) {
    this.ManagerSource.next(message)
  }

}

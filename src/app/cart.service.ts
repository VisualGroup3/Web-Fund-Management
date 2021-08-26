import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Manager } from './manager';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private ManagerSource: BehaviorSubject<any> = new BehaviorSubject([]);
  managers = this.ManagerSource.asObservable();

  constructor() { }

  setManagerObj(message: Manager[]) {
    this.ManagerSource.next(message)
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private ManagerSource: BehaviorSubject<object> = new BehaviorSubject({});
  managers = this.ManagerSource.asObservable();

  constructor() { }

  setManagerObj(message: object) {
    this.ManagerSource.next(message)
  }
}

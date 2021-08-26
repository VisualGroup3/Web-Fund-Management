import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Fund} from "../fund";
import {Manager} from "../manager";
import {Observable} from "rxjs";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  managers : Manager[] = [];
  constructor(private cartService: CartService) {
    this.cartService.managers.subscribe(val => {
      this.managers = val;
      console.log(this.managers[0]);
    });
  }

  ngOnInit(): void {
  }

}

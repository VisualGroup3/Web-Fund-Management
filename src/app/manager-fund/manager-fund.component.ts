import { Component, OnInit } from '@angular/core';
import {Fund} from "../fund";
import {Position} from "../position";
import {CartService} from "../cart.service";
import {Manager} from "../manager";

@Component({
  selector: 'app-manager-fund',
  templateUrl: './manager-fund.component.html',
  styleUrls: ['./manager-fund.component.css']
})
export class ManagerFundComponent implements OnInit {

  funds: Fund[] = [];
  managers: Manager[] = [];
  constructor(private cartService: CartService) {
    this.cartService.managers.subscribe(val => {
      this.managers = val;
      for(var i = 0; i < this.managers.length; i++){
        var manager = this.managers[i];
        if(manager.employeeId == "EBF2163"){

          this.funds = manager["funds"];
        }
      }
    });
  }

  ngOnInit(): void {
  }

}

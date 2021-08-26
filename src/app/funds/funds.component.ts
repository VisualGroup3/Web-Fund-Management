import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund';
import { FundService } from '../fund.service';
import {Manager} from "../manager";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  funds: Fund[] = [];
  constructor(private cartService: CartService) {
    this.cartService.managers.subscribe(val => {
      this.funds = val;
      console.log(this.funds[0]);
    });
  }
  ngOnInit(): void {
  }

  // getFunds(): void {
  //   this.fundService.getFunds()
  //       .subscribe(funds => this.funds = funds);
  // }

}

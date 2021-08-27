import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund';
import { Position } from '../position';
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
  positionList: Position[] = [];
  positionId = "";
  constructor(private cartService: CartService) {
    this.cartService.funds.subscribe(val => {
      this.funds = val;
      // for(var i = 0; i < this.funds.length; i++){
      //   var fund = this.funds[i];
      //   console.log(fund["positionList"]);
      // }
      //this.positionList = this.funds[0].positionList;
    });
  }
  ngOnInit(): void {
  }

  // getFunds(): void {
  //   this.fundService.getFunds()
  //       .subscribe(funds => this.funds = funds);
  // }

}

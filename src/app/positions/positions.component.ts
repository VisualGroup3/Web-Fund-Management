import { Component, OnInit } from '@angular/core';
import {Fund} from "../fund";
import {Position} from "../position";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  funds: Fund[] = [];
  positionList: Position[] = [];
  positionId = "";
  constructor(private cartService: CartService) {
    this.cartService.managers.subscribe(val => {
      this.funds = val;
      for(var i = 0; i < this.funds.length; i++){
        var fund = this.funds[i];
        if(fund.fundId == "EBF2163"){
          console.log(fund.fundId);
          console.log(fund["positionList"]);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Fund} from "../fund";
import {Position} from "../position";
import {CartService} from "../cart.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  funds: Fund[] = [];
  targetFund?: Fund;
  positionList: Position[] = [];
  positionId = "";
  id = this.activatedRoute.snapshot.paramMap.get('id');
  
  constructor(private cartService: CartService, 
              private location: Location,
              private activatedRoute: ActivatedRoute) {
    this.cartService.funds.subscribe(val => {
      this.funds = val;
      console.log(this.id);
      for(var i = 0; i < this.funds.length; i++){
        var fund = this.funds[i];
        
        if(fund.fundId === this.id){
          this.targetFund = fund;
          console.log(fund["positionList"]);
          this.positionList = fund["positionList"];
        }
      }
    });
  }

  ngOnInit(): void {
    //this.getPositions();
  }

  goBack(): void {
    this.location.back();
  }

}
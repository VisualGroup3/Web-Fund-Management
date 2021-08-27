import { Component, OnInit } from '@angular/core';
import {Fund} from "../fund";
import {Position} from "../position";
import {CartService} from "../cart.service";
import {Manager} from "../manager";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manager-fund',
  templateUrl: './manager-fund.component.html',
  styleUrls: ['./manager-fund.component.css']
})
export class ManagerFundComponent implements OnInit {

  funds: Fund[] = [];
  managers: Manager[] = [];
  targetManager?: Manager;
  id = this.activatedRoute.snapshot.paramMap.get('id');
  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
    this.cartService.managers.subscribe(val => {
      this.managers = val;
      for(var i = 0; i < this.managers.length; i++){
        var manager = this.managers[i];
        if(manager.employeeId == this.id){
          this.targetManager = manager;
          this.funds = manager["funds"];
        }
      }
    });
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}

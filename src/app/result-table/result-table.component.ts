import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  managersObj={};
  firstName = "start";
  constructor(private cartService: CartService) {
    this.cartService.managers.subscribe(val => {
      this.managersObj = val;
      //this.firstName = val.firstName;
    });
  }

  ngOnInit(): void {
  }

}

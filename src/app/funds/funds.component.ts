import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  // fund: Fund = {
  //   fundId: 'GF001',
  //   name: 'The Greek Fund',
  //   size: 20000000,
  //   equityPercentage: 0.22,
  //   fixIncPercentage: 0.34,
  //   commodPercentage: 0.15,
  //   cashPercentage: 0.29,
  // }
  funds: Fund[] = [];
  constructor(private fundService: FundService) { }

  ngOnInit(): void {
    this.getFunds();
  }

  getFunds(): void {
    this.fundService.getFunds()
        .subscribe(funds => this.funds = funds);
  }

}

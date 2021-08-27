import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../cart.service';
import { FormControl} from "@angular/forms";
import {Fund} from "../fund";
import { Manager } from '../manager';
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public managerTableOn: boolean = false;

  managerSubmitted: boolean = false;
  fundSubmitted: boolean = false;
  constructor(private http: HttpClient,
              private cartService: CartService,
              private router: Router ) {

  }

  info = "start";
  onSubmit() {
    console.log(this.info);

    if (this.info == "1") {
      this.getManagers();
      this.managerTableOn = true;
    }
    else if(this.info == "2") {
      this.getFunds();
      this.managerTableOn = false;
    }
  }
  getManagers() {
    let api = 'http://44.196.55.114:8081/api/v1/managers';
    this.http.get<Manager[]>(api).subscribe((response: any) => {
      console.log(response);
      this.cartService.setManagerObj(response);
    });

    //this.router.navigate(['/managers']);
  }
  getFunds() {
    let api = 'http://44.196.55.114:8081/api/v1/funds';
    this.http.get<Fund[]>(api).subscribe((response: any) => {
      this.cartService.setFundObj(response);
    });
    //this.router.navigate(['/funds']);
  }
}

import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../cart.service';
import { FormControl} from "@angular/forms";
import {Fund} from "../fund";
import { Manager } from '../manager';
import {Observable} from "rxjs";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  constructor(private http: HttpClient, private cartService: CartService) {
  }

  info = "start";
  onSubmit() {
    console.log(this.info);

    if (this.info == "1") this.getManagers();
    else if(this.info == "2") this.getFunds();

  }
  getManagers() {
    let api = 'http://localhost:8090/api/v1/managers';
    this.http.get<Manager[]>(api).subscribe((response: any) => {
      console.log(response);
      this.cartService.setManagerObj(response);
    });
  }
  getFunds() {
    let api = 'http://localhost:8090/api/v1/funds';
    this.http.get<Fund[]>(api).subscribe((response: any) => {
      this.cartService.setFundObj(response);
    });
  }
}

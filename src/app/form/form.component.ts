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
    if (this.info == "2") this.getManagers();

  }
  getManagers() {
    let api = 'http://localhost:8090/api/v1/managers';

    this.http.get<Manager[]>(api).subscribe((response: any) => {
      console.log(response);
      //console.log(JSON.parse(response));
      this.cartService.setManagerObj(response);

    });
  }

}

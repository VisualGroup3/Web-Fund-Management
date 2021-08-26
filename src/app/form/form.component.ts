import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../cart.service';
import { FormControl} from "@angular/forms";

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

  }
  getManagers() {
    let api = 'http://localhost:8090/api/v1/managers';
    this.http.get(api).subscribe((response: any) => {
      console.log(response[0]);
      this.cartService.setManagerObj(response[0]);
      
    });
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecuritiesComponent } from './securities/securities.component';
import { FundsComponent } from './funds/funds.component';
import { HttpClientModule} from '@angular/common/http';
//import { ResultTableComponent } from './result-table/result-table.component';
import { FormComponent } from './form/form.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SecuritiesComponent,
    FundsComponent,
    //ResultTableComponent,
    FormComponent,
    ResultTableComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

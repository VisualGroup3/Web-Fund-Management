import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  //private fundsUrl = 'http://localhost:8080/api/v1/funds';
  constructor(private http: HttpClient) { }
}

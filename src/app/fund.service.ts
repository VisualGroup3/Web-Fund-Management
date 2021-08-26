import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fund } from './fund';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private fundsUrl = 'http://localhost:8080/api/v1/funds';
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.fundsUrl);
  }

  
}

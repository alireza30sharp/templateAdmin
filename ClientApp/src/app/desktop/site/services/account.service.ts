import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APIURI } from 'src/app/api-uri';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public getList(): Observable<any> {
    return this.http.get<any>(APIURI.one);
  }
  
}

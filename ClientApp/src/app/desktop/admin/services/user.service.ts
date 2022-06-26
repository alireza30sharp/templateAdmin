import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APIURI } from 'src/app/api-uri';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getList() {
    return this.http.get<any>(APIURI.one);
  }

  public get() {
    return this.http.get<any>(APIURI.two);
  }




}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

  constructor(private http: HttpClient) { }
  serverUrl: string = "http://localhost:3000"

  // API for Regiter
  RegisterAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/api/register`, reqBody)
  }

  //  API for login
  LoginAPI(reqBody:any){
    return this.http.post(`${this.serverUrl}/api/login`,reqBody)
  }


}

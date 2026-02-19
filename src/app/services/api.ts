import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

  constructor(private http: HttpClient) { }
  serverUrl: string = "http://localhost:3000"

  // append token to header
  appendToken() {
    let headers = new HttpHeaders
    const token = sessionStorage.getItem('token')
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`)
    }
    return { headers }
  }

  // API for Regiter
  RegisterAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/api/register`, reqBody)
  }

  //  API for login
  LoginAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/api/login`, reqBody)
  }

  // api for get all users
  getAllUsersAPI() {
    return this.http.get(`${this.serverUrl}/api/allUsers`, this.appendToken())
  }

}

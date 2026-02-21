import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {

  constructor(private http: HttpClient) { }
  // serverUrl: string = "http://localhost:3000"
  serverUrl: string = "https://init-task-backend.onrender.com"

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

  // API for send message 
  sendMessageAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/api/sendMessage`, reqBody, this.appendToken())
  }
  // api for get all users
  getChatAPI(reciver: any) {
    return this.http.get(`${this.serverUrl}/api/getChat/${reciver}`, this.appendToken())
  }
  // --------- admin -----------------

  // api for get all users
  getAdminAllUsersAPI() {
    return this.http.get(`${this.serverUrl}/api/adminGetUsers`, this.appendToken())
  }
}

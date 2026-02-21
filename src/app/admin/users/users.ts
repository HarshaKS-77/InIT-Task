import { Component, OnInit } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { Api } from '../../services/api';
import { Chat } from '../../chatService/chat';

@Component({
  selector: 'app-users',
  imports: [MatDividerModule],
  templateUrl: './users.html',
  styleUrl: './users.css',


})
export class Users implements OnInit {

  //chatService :- 1) dependancy injection of Chat
  constructor(private serviceApi: Api, private chatService: Chat) { }

  usersDetails: any = []
  loginedUser: any = {}
  isLogin: boolean = false
  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.isLogin = true
    }

    this.handleGetAllUser()

    this.loginedUser = JSON.parse(sessionStorage.getItem('UserData') || "")


  }
  // function for handle 
  handleGetAllUser() {


    console.log("inside else admin");

    this.serviceApi.getAllUsersAPI().subscribe({
      next: (res: any) => {

        this.usersDetails = res
        console.log(this.usersDetails);

      },
      error: err => {
        console.log(err);
      }

    })


  }

  handleSelectUser(user: any) {
    //chatService :- 2) take the value from this component and set it to selectedUser$ and its an observable
    this.chatService.setSelectedUser(user)
  }
}

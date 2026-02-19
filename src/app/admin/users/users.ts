import { Component, OnInit } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { Api } from '../../services/api';

@Component({
  selector: 'app-users',
  imports: [MatDividerModule],
  templateUrl: './users.html',
  styleUrl: './users.css',


})
export class Users implements OnInit {

  constructor(private serviceApi: Api) { }

  usersDetails: any = []
  isLogin: boolean = false
  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.isLogin = true
    }
    this.handleGetAllUser()
  }
  // function for handle 
  handleGetAllUser() {

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
}

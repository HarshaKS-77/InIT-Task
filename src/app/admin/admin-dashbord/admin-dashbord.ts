import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminHeader } from "../admin-header/admin-header";
import { Users } from "../users/users";
import { Api } from '../../services/api';
import { Chat } from '../../chatService/chat';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashbord',
  imports: [AdminHeader, MatSidenavModule, Users,FormsModule],
  templateUrl: './admin-dashbord.html',
  styleUrl: './admin-dashbord.css',
})
export class AdminDashbord {

  userData: any = {}
  newMessage: string = ""
  chat: any = []
  sender: String = ""
  reciver: String = ""

  //chatService :- 2) dependancy injection of Chat
  constructor(private chatService: Chat, private serviceApi: Api) { }
  ngOnInit(): void {
    this.chatService.selectedUser$.subscribe((user: any) => {
      this.userData = user
      console.log(this.userData);
      if (this.userData) {
        this.reciver = this.userData.email
        // get old message using REST API
        this.handleGetChat()
      }


    })

    const data = JSON.parse(sessionStorage.getItem("userData") || "")
    this.sender = data.email
    // socket io Listen for real-time messages 
    this.chatService.getMessage().subscribe((data: any) => {
      console.log(data);

      if (
        (data.sender == this.sender && data.reciver == this.reciver) ||
        (data.sender == this.reciver && data.reciver == this.sender)) {
        this.chat.push(data)
      }
    })

  }
  handleGetChat() {
    console.log("inside handleGetChat");
    console.log(this.userData.email);
    this.serviceApi.getChatAPI(this.userData.email).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res) {
          this.chat = res?.chat
          console.log(this.chat);
        } else {
          this.chat = ""
        }


      },
      error: err => {
        console.log(err);

      }
    })


  }

  handleSendMessage() {
    console.log("inside handle send message");
    console.log(this.newMessage);
    if (this.newMessage) {
      const reqBody = {
        sender: this.sender,
        reciver: this.reciver,
        message: this.newMessage
      }
      console.log(reqBody);
      // Save in DB (REST API)
      this.serviceApi.sendMessageAPI(reqBody).subscribe({
        next: (res: any) => {
          console.log(res);
          // this.handleGetChat() // normal get
          // Emit through socket
          this.chatService.sendMessage(reqBody)
          this.newMessage = ""

        },
        error: err => {
          console.log(err);

        }
      })

    }


  }


}

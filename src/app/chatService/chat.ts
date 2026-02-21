// service created for passing userData between components
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class Chat {

  constructor(private socket: Socket) {
  }

  // message sending using socket io
  sendMessage(data: any) {
    console.log(data);
    this.socket.emit('sendMessage', data)
  }

  // message geting using socket io
  getMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('reciveMessage', (data) => {
        observer.next(data)
      })
    })
  }

  private selectedUserSource = new BehaviorSubject<any>(null);
  selectedUser$ = this.selectedUserSource.asObservable();
  setSelectedUser(user: any) {
    this.selectedUserSource.next(user)
    // console.log(this.selectedUser$);

  }

}

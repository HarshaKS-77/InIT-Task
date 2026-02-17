import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashbord } from './dashbord/dashbord';
import { Pnf } from './pnf/pnf';
import { Chat } from './chat/chat';
import { Inbox } from './inbox/inbox';

const routes: Routes = [
  // http://localhost:4200/user

  {
    path: '', component: Dashbord
  },
  {
    path: 'chat', component: Chat
  },
  {
    path: 'inbox', component: Inbox
  },
  {
    path: '**', component: Pnf
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

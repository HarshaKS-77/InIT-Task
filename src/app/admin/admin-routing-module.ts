import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbord } from './admin-dashbord/admin-dashbord';
import { Users } from './users/users';
import { AdminInbox } from './admin-inbox/admin-inbox';
import { Adminchat } from './adminchat/adminchat';
import { Pnf } from '../pnf/pnf';

const routes: Routes = [
  // http://localhost:4200/admin
  {
    path: "", component: AdminDashbord
  },
  {
    path: "users", component: Users
  },
  {
    path: "inbox", component: AdminInbox
  },
  {
    path: "chat", component: Adminchat
  },
  {
    path: "**", component: Pnf
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

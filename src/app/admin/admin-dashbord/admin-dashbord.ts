import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminHeader } from "../admin-header/admin-header";
import { Users } from "../users/users";

@Component({
  selector: 'app-admin-dashbord',
  imports: [AdminHeader, MatSidenavModule, Users],
  templateUrl: './admin-dashbord.html',
  styleUrl: './admin-dashbord.css',
})
export class AdminDashbord {

 

}

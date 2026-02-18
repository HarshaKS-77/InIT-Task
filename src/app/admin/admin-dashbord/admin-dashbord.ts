import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminHeader } from "../admin-header/admin-header";
import { AdminSidebar } from "../admin-sidebar/admin-sidebar";

@Component({
  selector: 'app-admin-dashbord',
  imports: [AdminHeader, AdminSidebar, MatSidenavModule],
  templateUrl: './admin-dashbord.html',
  styleUrl: './admin-dashbord.css',
})
export class AdminDashbord {

}

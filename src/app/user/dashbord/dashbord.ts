import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from "../header/header";
import { SideBar } from "../side-bar/side-bar";


@Component({
  selector: 'app-dashbord',
  imports: [MatSidenavModule, Header, SideBar],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {

}

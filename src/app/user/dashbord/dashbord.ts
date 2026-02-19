import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from "../header/header";
import { Users } from "../../admin/users/users";


@Component({
  selector: 'app-dashbord',
  imports: [MatSidenavModule, Header , Users],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {

}

import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-admin-dashbord',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './admin-dashbord.html',
  styleUrl: './admin-dashbord.css',
})
export class AdminDashbord {

}

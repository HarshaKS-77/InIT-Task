import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-header',
  imports: [MatToolbarModule],
  templateUrl: './admin-header.html',
  styleUrl: './admin-header.css',
})
export class AdminHeader {

  constructor(private router: Router) { }

  handleLogout() {
    const cnfrm = confirm("are you sure ?")
    if (cnfrm) {
      sessionStorage.clear()
      this.router.navigateByUrl('')
    }
  }

}

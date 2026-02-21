import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) { }

  handleLogout() {
    const cnfrm = confirm("are you sure ?")
    if (cnfrm) {
      sessionStorage.clear()
      this.router.navigateByUrl('')
    }
  }

}

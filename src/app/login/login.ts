import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { AdminRoutingModule } from "../admin/admin-routing-module";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDividerModule, AdminRoutingModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Login {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private serviceApi: Api, private router: Router) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

    })
  }

  handlelogin() {
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    console.log(email, password);
    if (this.loginForm.valid) {
      this.serviceApi.LoginAPI({ email, password }).subscribe({
        next: (res: any) => {
          console.log(res);
          sessionStorage.setItem('userData',JSON.stringify(res.userData))
          sessionStorage.setItem("token",res.token)
          alert(res.message)
          if (res.userData.role == 'admin') {
            this.router.navigateByUrl('/admin')

          } else {
            this.router.navigateByUrl('/user')

          }
        },
        error: err => {
          console.log(err);
          alert(err.statusText)

        }
      })
    } else {
      alert("validation error")
    }

  }

}

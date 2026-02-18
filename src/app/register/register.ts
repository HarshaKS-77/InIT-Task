import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { AdminRoutingModule } from "../admin/admin-routing-module";
import { Api } from '../services/api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  // ReactiveFormsModule : 1) import ReactiveFormsModule
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDividerModule, AdminRoutingModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,


})
export class Register {
  // ReactiveFormsModule : 3) Creation of form Group
  registerForm: FormGroup

  // dependency injection
  // ReactiveFormsModule : 2) dependency injection of Form Builder
  constructor(private serviceApi: Api, private fb: FormBuilder, private router:Router) {
    // ReactiveFormsModule : 4) creation of form Array
    this.registerForm = this.fb.group({
      username: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

    })
  }

  // create a function for handle register
  handleRegister() {
    const username = this.registerForm.value.username
    const email = this.registerForm.value.email
    const password = this.registerForm.value.password
    console.log(username, email, password);
    if (this.registerForm.valid) {
      this.serviceApi.RegisterAPI({ username, email, password }).subscribe({
        next: (res: any) => {
          console.log(res);
          console.log(res?.userData);
          if (res?.userData) {
            alert(res.message)
            this.router.navigateByUrl('')
          } else if (res.status == 401) {
            alert(res.message)
          }

        },
        error: err => {
          console.log(err);

        }
      })
    } else {
      alert("Form Validation Error")
    }
  }




}

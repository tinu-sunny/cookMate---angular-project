import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservices } from '../../services/apiservices';
import { Route, Router } from '@angular/router';
import { AppHeader } from "../app-header/app-header";
import { AppFooter } from "../app-footer/app-footer";

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule, AppHeader, AppFooter],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  regForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: Apiservices,
    private route: Router,
  ) {
    this.regForm = this.fb.group({
      username: [' ', [Validators.required]],
      email: [' ', [Validators.email]],
      password: [' ', [Validators.required]],
    });
  }

  register() {
    const username = this.regForm.value.username;
    const email = this.regForm.value.email;
    const password = this.regForm.value.password;

    console.log(username, email, password);

    if (this.regForm.valid) {
      // alert('reg')

      this.api.regusers({ username, email, password }).subscribe({
        next: (res: any) => {
          console.log(res);
          
            alert('registration successfull');
            this.route.navigateByUrl('/login')
         
        },
        error: (err) => {
          alert(err.error.message);
          console.log(err);
        },
      });
    } else {
      alert('please fill the form');
    }
  }
}

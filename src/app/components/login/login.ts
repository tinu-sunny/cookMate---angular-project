import { Component } from '@angular/core';
import { AppHeader } from "../app-header/app-header";
import { AppFooter } from "../app-footer/app-footer";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservices } from '../../services/apiservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [AppHeader, AppFooter,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private api:Apiservices,
    private fb:FormBuilder,
    private route:Router
  ){

     this.logform = this.fb.group({
      email: [' ', [Validators.email]],
      password: [' ', [Validators.required]],
    });
  }

  logform:FormGroup


   loginuser(){
    this.api.loginuser(this.logform.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        sessionStorage.setItem("token",res.token)
        sessionStorage.setItem("userdetails",JSON.stringify(res.user))
        alert('login')
        this.route.navigateByUrl('')
        
      },
      error:(err)=>{
        console.log(err);
        alert(err.message)
        
      }
    })
   }

}

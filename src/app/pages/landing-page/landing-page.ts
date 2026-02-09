import { Component, OnInit } from '@angular/core';
import { AppFooter } from "../../components/app-footer/app-footer";
import { AppHeader } from "../../components/app-header/app-header";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [AppFooter, AppHeader,RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {


  token:any=''

  ngOnInit(): void {
    
    this.token= sessionStorage.getItem('token')
    console.log(this.token);
    
  }

  showAlert(){
    alert('Please login')
  }




}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-app-header',
  imports: [ RouterLink],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader implements OnInit {

  token:any=''
  userDetailes:any=''
ngOnInit(): void {
  this.token = sessionStorage.getItem('token');

  const userData = sessionStorage.getItem('userdetails');
  this.userDetailes = userData ? JSON.parse(userData) : null;
}





}

import { Component } from '@angular/core';
import { AppHeader } from "../../components/app-header/app-header";
import { AppFooter } from "../../components/app-footer/app-footer";

@Component({
  selector: 'app-profile',
  imports: [AppHeader, AppFooter],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}

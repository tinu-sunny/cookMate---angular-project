import { Component } from '@angular/core';
import { AppFooter } from "../../components/app-footer/app-footer";
import { AppHeader } from "../../components/app-header/app-header";

@Component({
  selector: 'app-landing-page',
  imports: [AppFooter, AppHeader],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}

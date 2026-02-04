import { Component } from '@angular/core';
import { AppHeader } from "../../components/app-header/app-header";
import { AppFooter } from "../../components/app-footer/app-footer";

@Component({
  selector: 'app-about',
  imports: [AppHeader, AppFooter],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}

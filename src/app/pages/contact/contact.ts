import { Component } from '@angular/core';
import { AppHeader } from "../../components/app-header/app-header";
import { AppFooter } from "../../components/app-footer/app-footer";

@Component({
  selector: 'app-contact',
  imports: [AppHeader, AppFooter],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}

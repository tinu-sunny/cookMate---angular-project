import { Component } from '@angular/core';
import { AppFooter } from "../../components/app-footer/app-footer";
import { AppHeader } from "../../components/app-header/app-header";

@Component({
  selector: 'app-view-reciipe',
  imports: [AppFooter, AppHeader],
  templateUrl: './view-reciipe.html',
  styleUrl: './view-reciipe.css',
})
export class ViewReciipe {

}

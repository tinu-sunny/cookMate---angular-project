import { Component } from '@angular/core';
import { AppHeader } from "../../components/app-header/app-header";
import { AppFooter } from "../../components/app-footer/app-footer";

@Component({
  selector: 'app-recipe',
  imports: [AppHeader, AppFooter],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {

}

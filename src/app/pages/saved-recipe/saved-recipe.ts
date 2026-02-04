import { Component } from '@angular/core';
import { AppFooter } from "../../components/app-footer/app-footer";
import { AppHeader } from "../../components/app-header/app-header";

@Component({
  selector: 'app-saved-recipe',
  imports: [AppFooter, AppHeader],
  templateUrl: './saved-recipe.html',
  styleUrl: './saved-recipe.css',
})
export class SavedRecipe {

}

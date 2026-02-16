import { Component, OnInit } from '@angular/core';
import { AppFooter } from "../../components/app-footer/app-footer";
import { AppHeader } from "../../components/app-header/app-header";
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-saved-recipe',
  imports: [AppFooter, AppHeader],
  templateUrl: './saved-recipe.html',
  styleUrl: './saved-recipe.css',
})
export class SavedRecipe implements OnInit {

saveddata:any=''
  ngOnInit(): void {
    this.viewSavedCollection()
  }

  constructor( private api:Apiservices){}

viewSavedCollection(){

this.api.viewSavedRecipe().subscribe({
  next:(res:any)=>{
    console.log(res);
    this.saveddata=res.userSavedCollection
    console.log(this.saveddata);
    

    
  },
  error:(err)=>{
    console.log(err);
    
  }
})
  

}




}

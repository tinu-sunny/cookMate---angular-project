import { Component, OnInit } from '@angular/core';
import { AppHeader } from "../../components/app-header/app-header";
import { AppFooter } from "../../components/app-footer/app-footer";
import { Apiservices } from '../../services/apiservices';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe',
  imports: [AppHeader, AppFooter,RouterLink],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe implements OnInit {

  constructor(private api:Apiservices){}


  allrecipe:any=''

  ngOnInit(){
    this.allrecipes()
  }
allrecipes(){

  this.api.viewAlluser().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.allrecipe=res.Allrescipes
      console.log(this.allrecipe);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })


}

}

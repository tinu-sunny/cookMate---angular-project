import { Component, OnInit } from '@angular/core';
import { AdminDashboard } from "../admin-dashboard/admin-dashboard";
import { AdminSidebar } from "../../components/admin-sidebar/admin-sidebar";
import { Apiservices } from '../../../services/apiservices';
import { RecipeModel } from '../../models/recipeModel';

@Component({
  selector: 'app-manage-recipe',
  imports: [AdminDashboard, AdminSidebar],
  templateUrl: './manage-recipe.html',
  styleUrl: './manage-recipe.css',
})
export class ManageRecipe implements OnInit {



  constructor(private api:Apiservices){}

  allRecipData:RecipeModel={}
  ingredients:any=[]
  cuisine:any=[]
  mealType:any=[]


  ngOnInit(): void {
    
    this.viewAllRecipe()
  }

  viewAllRecipe(){

    this.api.viewAlluser().subscribe({
      next:(res:any)=>{
        console.log(res);

        // store all the cuisine type

        res.Allrescipes.forEach((item:any) => {

          !this.cuisine.includes(item.cuisine) && this.cuisine.push(item.cuisine)
          
        });
        console.log(this.cuisine);
        

        // store all  the  mealtype

     



      },

      error:(err)=>{
        console.log(err);
        
      }
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { AppFooter } from "../../components/app-footer/app-footer";
import { AppHeader } from "../../components/app-header/app-header";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Apiservices } from '../../services/apiservices';


@Component({
  selector: 'app-view-reciipe',
  imports: [AppFooter, AppHeader,RouterLink],
  templateUrl: './view-reciipe.html',
  styleUrl: './view-reciipe.css',
})
export class ViewReciipe implements OnInit {

  constructor(private urlid:ActivatedRoute,
    private api:Apiservices
  ){}
itemid:any=''
recipedata:any=''
Ingredients:any=''
Instructions:any=''
relatedRecipe:any=''

  ngOnInit(): void {
    this.itemid=this.urlid.snapshot.paramMap.get('id');
    console.log(this.itemid);
    
    this.featchdata()
   
  }


featchdata (){

this.api.viewRecipe(this.itemid).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.recipedata=res.viewRecip
    console.log(this.recipedata);
    this.Ingredients=res.viewRecip.ingredients
    this.Instructions=res.viewRecip.instructions
    console.log(this.Ingredients);
    console.log(this.Instructions);
    
    this.relatedRecipes()
  
    
  },
  error:(err)=>{
    console.log(err);
    
  }
})






}


relatedRecipes (){

  
    this.api.viewRelatedRecipes(this.recipedata.
cuisine
).subscribe({
  next:(res:any)=>{

    console.log(res);
    this.relatedRecipe=res.relatedRecipes.filter((recipe:any) => recipe._id !== this.recipedata._id)

    console.log(this.relatedRecipe);
    

    

  },

  error:(err)=>{
     console.log(err);
     
  }
})
}


saveRecip(){

  console.log(this.itemid);
  console.log(this.recipedata);


  this.api.saveRecipes(this.itemid,this.recipedata).subscribe({
    next:(res:any)=>{
      console.log(res);
      alert(res)
      
    },
    error:(error)=>{
      console.log(error);
      
    }
  })
  
  

}


downloadRecipe(itemid:any){


  this.api.downloadRecipe(itemid,this.recipedata).subscribe({
    next:(res:any)=>{
      console.log(res);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })

}


}

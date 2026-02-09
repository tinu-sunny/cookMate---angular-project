import { Component, OnInit } from '@angular/core';
import { AppFooter } from "../../components/app-footer/app-footer";
import { AppHeader } from "../../components/app-header/app-header";
import { ActivatedRoute } from '@angular/router';
import { Apiservices } from '../../services/apiservices';


@Component({
  selector: 'app-view-reciipe',
  imports: [AppFooter, AppHeader],
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
    
    
    
    
  },
  error:(err)=>{
    console.log(err);
    
  }
})



}




}

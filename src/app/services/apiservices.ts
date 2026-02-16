import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {



  getHeader() {
    
   const token = sessionStorage.getItem('token')
  console.log(token);
  

     return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
  
  }
   
  }

  baseurl:string=' http://localhost:3000'

  constructor(private http:HttpClient){}


  viewAlluser(){
    return this.http.get(`${this.baseurl}/view-all-recipes`,this.getHeader())
  }

  regusers(reqbody:any){
    return this.http.post(`${this.baseurl}/register`,reqbody)
  }

  loginuser(reqbody:any){
    return this.http.post(`${this.baseurl}/login`,reqbody)
  }


  viewRecipe(itemid:any){
    return this.http.get(`${this.baseurl}/view-recipe/${itemid}`,this.getHeader())
  }

viewRelatedRecipes (related:any){
  return this.http.get(`${this.baseurl}/related-recipes?cuisine=${related}` ,this.getHeader())
}


saveRecipes(itemid:any,itemData:any){
  return this.http.post(`${this.baseurl}/save-recipes/${itemid}`,  itemData, this.getHeader())
}







  
}

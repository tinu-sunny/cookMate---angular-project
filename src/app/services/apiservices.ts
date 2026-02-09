import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {

  baseurl:string=' http://localhost:3000'

  constructor(private http:HttpClient){}


  viewAlluser(){
    return this.http.get(`${this.baseurl}/view-all-recipes`)
  }

  regusers(reqbody:any){
    return this.http.post(`${this.baseurl}/register`,reqbody)
  }

  loginuser(reqbody:any){
    return this.http.post(`${this.baseurl}/login`,reqbody)
  }


  viewRecipe(itemid:any){
    return this.http.get(`${this.baseurl}/view-recipe/${itemid}`)
  }
  
}

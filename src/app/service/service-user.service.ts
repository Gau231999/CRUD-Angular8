import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from 'src/app/class/user'

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  get= "http://localhost:8080/api_user_get";
  post= "http://localhost:8080/api_user_save";
  put="http://localhost:8080/api_user_update"
  delete= "http://localhost:8080/api_user_delete";

  constructor(private http : HttpClient,private route : Router ) { }
  
  getData()
  {
     return this.http.get(this.get);
  }
  getDataById(id)
  {
     return this.http.get(`${this.get}/${id}`);
  }
  saveData(user : User )
  {
     console.warn("Service : "+user);
     return this.http.post(this.post,user);
  }
  updateData(id : BigInteger,user : User)
  {
    return this.http.put(`${this.put}/${id}`,user);
    console.warn(id);
    console.warn(user.email);
  }
  deleteData(id : any)
  {
    return this.http.delete(`${this.delete}/${id}`);
    
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private router:Router,
    private http:HttpClient) { }

  isAuthenticate():boolean{
    if (sessionStorage.getItem('token')!==null){
      return true;
    }
    return true;
  }

  canAccess(){
    if(!this.isAuthenticate()){
      this.router.navigate(['/']);
    }
  }
  adduser=(user:any)=>{
    return this.http.post<any>("http://localhost:3000/register",user)
  }

  viewuser=()=>{
    return this.http.get<any>("http://localhost:3000/home")
  }
  deleteuser=(id:any)=>{
    return this.http.delete<any>("http://localhost:3000/delete/"+id)
  }

  updateuser=(user:any)=>{
    return this.http.put<any>("http://localhost:3000/update/"+user._id,user)
  }
}


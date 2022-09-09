import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    name:"",
    registerNumber:"",
    address:"",
    department:"",
    semester:"",
    email:"",
    boardingPoint:"",
    password:"",
    confirmPassword:""
  }
  

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  Adduser(){
    this.api.adduser(this.user).subscribe(
      (data)=>{
        alert("success");
      }
    )
  }
  

}

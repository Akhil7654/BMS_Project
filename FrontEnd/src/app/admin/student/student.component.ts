
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  user={
    name:"",
    registerNumber:"",
    address:"",
    department:"",
    semester:"",
    email:"",
    boardingPoint:"",
    amount:"",
    status:""
  }


  constructor(private api:ApiService) { 
    api.viewuser().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }
  onEdit(item:any) {
    item.isEdit = true
  }

  Deleteuser(datas:any){
    this.api.deleteuser(datas._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==datas)
      }
    )

  }
  
  Updateuser(i:any){
    
    console.log()
    this.api.updateuser(i).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
      
    )

  }
  
  addrow(){
    const newRow = {"name":"","registerNumber":"","address":"","department":"","semester":"","boardingPoint":"","amount":"","status":""}
   
  }
  



data:any=[]

}
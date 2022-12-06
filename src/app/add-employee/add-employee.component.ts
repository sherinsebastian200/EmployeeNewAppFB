import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empcode=""
  empname=""
  designation=""
  salary=""
  companyname=""
  mobno=""
  username=""
  password=""
  constructor(private api:ApiService){}

  readValues=()=>
  
    {
     let data:any={"empcode":this.empcode,"empname":this.empname,
      "designation":this.designation,
      "salary":this.salary,
      "companyname":this.companyname,"mobno":this.mobno,"username":this.username,"password":this.password}
      console.log(data)
this.api.addEmployees(data).subscribe(
  (response :any)=>{
    console.log(response)
 

  }
  )
  
  }
  }


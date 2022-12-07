import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  constructor(private api:ApiService){}
  empcode=""
  searchEmployees:any = []


  readValue = ()=>{
    let data ={"empcode":this.empcode}
    console.log(data)
    this.api.searchEmployees(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid employee code")
          
        } else {
          this.searchEmployees =response
          
        }
      }
    )
  }

}

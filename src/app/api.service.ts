import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchEmployees = () =>
  {
    return this.http.get("http://localhost:8080/view")
  }
  addEmployees = (dataToSend:any) =>
  {
    return this.http.post("http://localhost:8080/add", dataToSend)
  }
  searchEmployees = (dataToSend:any) =>
  {
    return this.http.post("http://localhost:8080/search", dataToSend)
  }
  
    deleteEmployees=(dataToSend:any) =>
    {
      return this.http.post("http://localhost:8080/delete", dataToSend)

    }
  
}

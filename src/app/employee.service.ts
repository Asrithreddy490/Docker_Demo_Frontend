import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL= "http://localhost:8080/employees";

  constructor( private httpClient:HttpClient ) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
  updateEmployee(id : string, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }
  getEmployeeById(id: string): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  deleteEmployee(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  

}

import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee:Employee=new Employee();

  constructor(private EmployeeS: EmployeeService,private router:Router) { }

  saveEmployee(){
    this.EmployeeS.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
      
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employee']);  
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigate to home page
  }

}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[];
  constructor(private employeeService: EmployeeService,private router:Router){}

  ngOnInit():void{
   this.getEmployeeList();
  }
  updateEmployee(id:string){
    this.router.navigate(['update-employee',id]);

  }
  deleteEmployee(id:string){
    if (confirm('Are you sure to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(data => {
        console.log(data);
        this.getEmployeeList();
      })
    }
  }
  private getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigate to home page
  }


}

import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  id:string;
  employee:Employee=new Employee();

  constructor(private EmployeeS: EmployeeService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.EmployeeS.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  

  goToEmployeeList(){
    this.route.navigate(['/employee']);  
  }

  onSubmit(){
    console.log(this.employee);
    this.EmployeeS.updateEmployee(this.id,this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    
      
    },
    error => console.log(error));
  }

  goBack(): void {
    this.route.navigate(['/employee']); // Navigate to home page
  }
}

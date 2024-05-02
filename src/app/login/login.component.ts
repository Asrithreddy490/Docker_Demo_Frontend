import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  // Inject Router service
  constructor(private router: Router) {}

  onSubmit(): void {
    // Perform authentication logic here
    if (this.authenticate(this.username, this.password)) {
      // If authentication succeeds, navigate to employee list page
      this.router.navigate(['/employee-list']);
    } else {
      // Handle authentication failure (e.g., display error message)
    }
  }

  // Dummy authentication logic - Replace this with your actual authentication logic
  authenticate(username: string, password: string): boolean {
    // Assuming you have an array of employees
    const employees: Employee[] = [
      { id: '1', name: 'John Doe', email: 'john@example.com', salary: 50000, attendance: 'Present', password: 'password' },
      // Add more employees as needed
    ];

    // Check if username and password match any employee in the database
    const matchedEmployee = employees.find(emp => emp.email === username && emp.password === password);
    return !!matchedEmployee; // Convert to boolean
  }

  onCancel(): void {
    // Redirect to home page or any other page
    this.router.navigate(['/']);
  }

  onRegister(): void {
    // Redirect to registration page or any other page
    this.router.navigate(['/create-employee']);
  }

}
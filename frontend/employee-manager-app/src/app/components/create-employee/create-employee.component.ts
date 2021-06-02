import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public firstName: string
  public lastName: string
  public email: string

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  private addEmployee(): void {
    const employee = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email
    }
    this.employeeService.addEmployee(employee).subscribe((emp) => {
      this.router.navigate(['/employee'])
    }, (error: HttpErrorResponse) => {
      alert(error.message)
    })
  }

  public onSubmit(): void {
    this.addEmployee();
  }

}

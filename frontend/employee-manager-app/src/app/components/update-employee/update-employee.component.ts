import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  public firstName: string
  public lastName: string
  public email: string

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute  ) { }

  ngOnInit(): void {
  }

  private updateEmployee(employee: Employee): void {
    const newEmployee = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "id": employee.id
    }
    this.employeeService.updateEmployee(newEmployee).subscribe((emp) => {
      this.router.navigate(['/employee'])
    }, (error: HttpErrorResponse) => {
      alert(error.message)
    })
  }

  public onSubmit(): void {
    const emp = this.route.snapshot.queryParams
    const employee: Employee = emp as Employee;
    this.updateEmployee(employee);
  }
}

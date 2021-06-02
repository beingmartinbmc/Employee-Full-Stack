import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  employees: Employee[];

  private getEmployees(): void {
    this.employeeService.getAllEmployees()
      .subscribe(
        (emp) => {
          this.employees = emp;
        },
        (error) => {
          alert(error.message);
        }
      )
  }

  public onDelete(employee: Employee) {
    this.employeeService.deleteEmployee(employee).subscribe(() => {
      this.employees = this.employees.filter(i => i.id !== employee.id)
    })
  }

  public onUpdate(employee: Employee) {
    this.router.navigate(['/update-employee'], { queryParams: employee})
  }
}
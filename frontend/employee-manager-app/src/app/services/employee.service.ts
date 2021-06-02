import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmptyError, Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL: string = "http://localhost:9999/employee"

  constructor(private http: HttpClient) {}

  public getAllEmployees(): Observable<Employee[]> {
    const url = `${this.baseURL}/all`
    return this.http.get<Employee[]>(url);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.baseURL}/add`
    return this.http.post<Employee>(url, employee);
  }

  public deleteEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.baseURL}/delete/${employee.id}`
    return this.http.delete<Employee>(url);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.baseURL}/update`
    return this.http.put<Employee>(url, employee);
  }
}

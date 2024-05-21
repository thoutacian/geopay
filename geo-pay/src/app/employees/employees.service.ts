import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _http: HttpClient) { }


   // readonly #http = inject(HttpClient)
  // private baseUrl = `/request`
  private employees: string[] = ['Employee 1', 'Employee 2', 'Employee 3'];


  getEmployees() {
    return this.employees
  }
}

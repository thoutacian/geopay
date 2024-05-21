import { Component, OnInit, inject } from '@angular/core';
import { EmployeesService } from './employees.service';
import { NgFor,NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthServiceService } from '../auth-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [NgFor,NgIf,MatCardModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit{
  authService = inject(AuthServiceService);
  http = inject(HttpClient);

employees: string[] = [];

constructor(
    private employeesService: EmployeesService,
  ) {  }

ngOnInit(): void {
      this.employees = this.employeesService.getEmployees();
  }

}

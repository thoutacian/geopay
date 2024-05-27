import { Component, OnInit, inject } from '@angular/core';
import { EmployeesService } from './employees.service';
import { NgFor,NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthServiceService } from '../auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Detail, Employees } from '../employee';
import { AddDetailsFormComponent } from '../add-details-form/add-details-form.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [NgFor, NgIf, MatCardModule, FormsModule,MatIconModule,MatInputModule,MatFormFieldModule,MatIconModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent implements OnInit {
  authService = inject(AuthServiceService);
  http = inject(HttpClient);
  searchTerm: string = '';

  employees!: Employees;
  filteredEmployees: Detail[] = [];


  constructor(
    private employeesService: EmployeesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.viewAllEmployees();
    // this.removeEmployee();
  }

  viewAllEmployees(): void {
    this.employeesService.getEmployees().subscribe((data: Employees) => {
      this.employees = data;
      this.filteredEmployees = this.employees.details;
    });
  }

  searchEmployees(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.details.filter(employee => 
      employee.firstName.toLowerCase().includes(term) ||
      employee.lastName.toLowerCase().includes(term) ||
      employee.department.toLowerCase().includes(term)
    );
  }

  removeEmployee(id: string): void {
    // this.employeesService.removeEmployee(this.employees.id).subscribe(() => {
    // kufilter out the removed employee from the list
    this.employees.details = this.employees.details.filter(
      (employee) => employee.id !== id
    );
    this.filteredEmployees = this.filteredEmployees.filter((employee) => employee.id !== id);
  }

 
  

  openAddEmployeeDialog(): void {
    this.dialog.open(AddDetailsFormComponent);
  }
}

  





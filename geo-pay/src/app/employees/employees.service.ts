import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from '../employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _http: HttpClient) { }


   // readonly #http = inject(HttpClient)
  // private baseUrl = `/request`
  private employees: Employees = 
  
    {
      "count":10,
         "next":null,
         "previous":null,
         "details":[
             {
                 "id": "1234567890",
                 "firstName": "John",
                 "lastName": "Doe",
                 "email": "john.doe@example.com",
                 "phoneNumber": "+1234567890",
                 "dob": "1990-01-01",
                 "date_created": "2024/05/23",
                 "county": "Nairobi",
                 "subCounty": "Lang'ata",
                 "nationalId": "1234567890",
                 "department": "backend",
                 "documents": [
                     {
                         "name": "ID Copy",
                         "documentId": "abc123"
                     },
                     {
                      "name": "Good Conduct",
                      "documentId": "abc123"
                    }, 
                    {
                      "name": "Birth Certificate",
                      "documentId": "abc123"
                    }
                 ],
                 "equipments": [
                     {
                         "name": "Laptop",
                         "description": "Dell Latitude"
                     }
                 ]
             },
             {
              "id": "1234567891",
              "firstName": "Jmaes",
              "lastName": "Doe",
              "email": "james.doe@example.com",
              "phoneNumber": "+1234567890",
              "dob": "1993-02-01",
              "date_created": "2024/05/24",
              "county": "Samburu",
              "subCounty": "Samburu",
              "nationalId": "12345678",
              "department": "frontend",

              "documents": [
                  {
                      "name": "ID Copy",
                      "documentId": "abc123"
                  }
              ],
              "equipments": [
                  {
                      "name": "Desktop",
                      "description": "Dell Latitude"
                  }
              ]
          },
          {
            "id": "1234567892",
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "jane.doe@example.com",
            "phoneNumber": "+123456789",
            "dob": "1995-01-08",
            "date_created": "2024/05/23",
            "county": "Mombasa",
            "subCounty": "Tudor",
            "nationalId": "1234567890",
            "department": "BA",

            "documents": [
                {
                    "name": "Birth Certificate",
                    "documentId": "abc123"
                }
            ],
            "equipments": [
                {
                    "name": "Laptop",
                    "description": "Dell Latitude"
                }
            ]
        }
         ]
 }
  


  getEmployees(): Observable<Employees>{
    return of (this.employees);
  }

  removeEmployee(id: number) {
    // return this.http.delete<void>(`/api/employees/${employeeId}`);
    console.log('employee id', this.employees.details);
  }
}

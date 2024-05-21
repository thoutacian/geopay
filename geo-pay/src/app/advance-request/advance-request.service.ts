import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvanceRequestService {
  // readonly #http = inject(HttpClient)
  // private baseUrl = `/request`
  private employees: string[] = ['Employee 1', 'Employee 2', 'Employee 3'];

  // private baseUrl =`/requests`;
  constructor(private _http: HttpClient) { }

  getAllRequests() {
    return this.employees
  }
}

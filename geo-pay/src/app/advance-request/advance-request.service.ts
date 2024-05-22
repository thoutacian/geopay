import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdvanceRequest } from '../interface';


@Injectable({
  providedIn: 'root'
})
export class AdvanceRequestService {
  // readonly #http = inject(HttpClient)
  // private baseUrl = `/request`
  private requests: AdvanceRequest = 
  
{
  "count": 1,
  "next": null,
  "previous": null,
  "details": [
      {
          "id": "1234567890",
          "applicant": {
              "name":"Mark Yeuns",
              "photo": "https://uns"
          },
          "description": "Advance Request",
          "status": "pending",
          "date": "23/5/2024"
      },
      {
        "id": "1234567891",
        "applicant": {
            "name":"Jane Doe",
            "photo": "https://uns"
        },
        "description": "Advance Request",
        "status": "pending",
        "date": "23/5/2024"
    }, {
      "id": "1234567892",
      "applicant": {
          "name":"John Yeuns",
          "photo": "https://uns"
      },
      "description": "Advance Request",
      "status": "pending",
      "date": "23/5/2024"
  }
  ]
}

  // private baseUrl =`/requests`;
  constructor(private _http: HttpClient) { }

  getAllRequests() {
    return this.requests
  }
}

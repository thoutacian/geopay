import { Component, OnInit, inject } from '@angular/core';
import { AdvanceRequestService } from './advance-request.service';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthServiceService } from '../auth-service.service';
import {MatDividerModule} from '@angular/material/divider';
import { Request } from '../interface';
@Component({
  selector: 'app-advance-request',
  standalone: true,
  imports: [NgFor,NgIf, MatCardModule,MatDividerModule],
  templateUrl: './advance-request.component.html',
  styleUrl: './advance-request.component.scss'
})
export class AdvanceRequestComponent implements OnInit{
  // requests: Request[] = [];
  authService = inject(AuthServiceService);

  requests!: Request[];


  constructor(
    private advanceRequestService: AdvanceRequestService,
  ) {  }

  ngOnInit(): void {
    this.viewAllRequests()
}
  viewAllRequests(): void {
    this.requests = this.advanceRequestService.getAllRequests().details;
  }

  // viewAllRequests(): void {
  //   this.advanceRequestService.getAllRequests().subscribe((data: any) => {
  //     if (data.details && data.details.length > 0) {
  //       this.requests = data.details;
  //     } else {
  //       this.requests = [];
  //     }
  //   });
  // }

  approveRequest() {
    console.log('approve');
  }

  cancelRequest() {
    console.log('cancel');
  }
}

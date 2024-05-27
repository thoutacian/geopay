import { Component, OnInit, inject } from '@angular/core';
import { AdvanceRequestService } from './advance-request.service';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthServiceService } from '../auth-service.service';
import {MatDividerModule} from '@angular/material/divider';
import { Request } from '../interface';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'
import { MatPaginatorModule } from '@angular/material/paginator';
import swal from 'sweetalert';
@Component({
  selector: 'app-advance-request',
  standalone: true,
  imports: [NgFor,NgIf, MatCardModule,MatDividerModule,MatPaginatorModule],
  templateUrl: './advance-request.component.html',
  styleUrl: './advance-request.component.scss'
})
export class AdvanceRequestComponent implements OnInit{
  // requests: Request[] = [];
  authService = inject(AuthServiceService);

  requests!: Request[];


  constructor(
    private advanceRequestService: AdvanceRequestService,
    public dialog: MatDialog
  ) {  }

  ngOnInit(): void {
    this.viewAllRequests()
}
  // viewAllRequests(): void {
  //   this.requests = this.advanceRequestService.getAllRequests().details;
  // }
  viewAllRequests(): void {
    this.requests = this.advanceRequestService.getAllRequests().details;
    // Initialize request statuses to 'pending'
    this.requests.forEach(request => {
      if (!request.status) {
        request.status = 'pending';
      }
    });
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

  approveRequest(requests: Request): void {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: [true, "Approve"],
      dangerMode: false,
    })
    .then((willApprove) => {
      if (willApprove) {
        requests.status = 'approved';
        swal("The request has been Approved!", {
          icon: "success",
        });
      } else {
        
      }
    });
  }

  cancelRequest(requests: Request): void {

swal({
  title: "Are you sure?",
  icon: "warning",
  buttons: [true, "Ok"],
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    requests.status = 'cancelled';
    swal("The request has been cancelled!", {
      icon: "success",
    });
  } else {
    
  }
});
}
};

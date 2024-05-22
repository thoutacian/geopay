import { Component, OnInit, inject } from '@angular/core';
import { AdvanceRequestService } from './advance-request.service';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthServiceService } from '../auth-service.service';
import {MatDividerModule} from '@angular/material/divider';
import { Request } from '../interface';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'
import { CancelDialogComponent } from '../modals/cancel-dialog/cancel-dialog.component';
import swal from 'sweetalert';
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

  approveRequest(request: Request) {
    console.log('approve');
  }

  cancelRequest(requests: Request): void {
//     this.dialog.open(CancelDialogComponent, {
//       width: '750px',
//       maxHeight: '650px',
// });
// const dialogRef = this.dialog.open(CancelDialogComponent);

// dialogRef.afterClosed().subscribe(result => {
//   if(result) {
//     console.log('ifcancelled');
//   } else {
//     console.log('notcancelled');
//   }

// })
// // console.log('cancel');
swal({
  title: "Are you sure?",
  icon: "warning",
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

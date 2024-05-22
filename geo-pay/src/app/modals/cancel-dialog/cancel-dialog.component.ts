import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-dialog',
  standalone: true,
  imports: [],
  templateUrl: './cancel-dialog.component.html',
  styleUrl: './cancel-dialog.component.scss'
})
export class CancelDialogComponent {
  constructor( 
    public dialogRef: MatDialogRef<CancelDialogComponent>
  ) {}

  onConfirm (): void {
    this.dialogRef.close(true)
  }

  onCancel (): void {
    this.dialogRef.close(false)
  }

}

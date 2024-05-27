import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NgFor,NgIf, MatCardModule,MatDividerModule,MatPaginatorModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

  authService = inject(AuthServiceService);


}

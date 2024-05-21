import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { User } from './user';
import { DetailViewComponent } from './detail-view/detail-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,DetailViewComponent,NgIf],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  
}
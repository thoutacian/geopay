import { Component, OnInit, inject } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { NgIf } from '@angular/common';
import { MatGridListModule} from '@angular/material/grid-list'
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-detail-view',
  standalone: true,
  imports: [NgIf,MatGridListModule,RouterLink,MatCardModule],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss'
})
export class DetailViewComponent implements OnInit {

  authService = inject(AuthServiceService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<{ user: User }>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          console.log('response', response);
          this.authService.currentUserSig.set(response.user);
        },
        error: () => {
          this.authService.currentUserSig.set(null);
        },
      });
  }

  logout(): void {
    console.log('logout');
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }
}

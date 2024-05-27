import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [NgIf, NgFor,MatPaginatorModule,MatCardModule],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.scss'
})
export class RewardsComponent {

  selectedOption: string = 'allRewards';


}

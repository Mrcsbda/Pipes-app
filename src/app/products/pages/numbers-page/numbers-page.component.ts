import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.scss'
})
export class NumbersPageComponent {
  totalSells: number = 1234567.89124;
  percentage: number = 0.4856;
}

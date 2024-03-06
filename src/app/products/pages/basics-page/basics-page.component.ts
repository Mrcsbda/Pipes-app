import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {
  nameLower: string = 'mariana';
  nameUpper: string = 'MARIANA';
  fullName: string = 'MaRiAnA CaSTAñeDa';
  customDate: Date = new Date();
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {
  //i18nSelect
  name:string = 'Mariana'
  gender: 'female' | 'male' = 'female';
  invitationMap = {
    'female': 'invitarla',
    'male': 'invitarlo'
  }
  changeClient () {
    this.name = 'Carlos';
    this.gender = 'male';
  }

  
}

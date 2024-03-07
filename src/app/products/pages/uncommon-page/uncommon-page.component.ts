import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {
  //i18nSelect
  name: string = 'Mariana'
  gender: 'female' | 'male' = 'female';
  invitationMap = {
    'female': 'invitarla',
    'male': 'invitarlo'
  }
  changeClient() {
    this.name = 'Carlos';
    this.gender = 'male';
  }

  //i18nPlural
  clients: string[] = ['Maria', 'Pedro', 'Carlos', 'Juan', 'Natalia', 'Fernando'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient() {
    this.clients.shift();
  }

  //keyValue

  person = {
    name: 'Fernando',
    age: 35,
    address: 'Ottawa, Canada'
  }

  //Async Pipe

  myObservableTimer = interval(10000);
  promiseValue: Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500)
  })

}

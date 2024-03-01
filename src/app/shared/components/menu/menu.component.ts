import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent  implements OnInit {
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
      this.menuItems = [
          {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
          },
          {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
          }
      ];
  }
}

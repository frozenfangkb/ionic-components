import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Route {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  routes: Route[] = [
    {
      icon: 'american-football-outline',
      name: 'Action sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirectTo: '/button',
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirectTo: '/check',
    },
    {
      icon: 'calendar-outline',
      name: 'Datetime',
      redirectTo: '/date-time',
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab',
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite scroll',
      redirectTo: '/infinite',
    },
    {
      icon: 'hammer-outline',
      name: 'Input',
      redirectTo: '/input',
    },
    {
      icon: 'list-outline',
      name: 'List',
      redirectTo: '/list',
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Loading',
      redirectTo: '/loading',
    },
  ];

  constructor(private menuController: MenuController) {}

  ngOnInit() {}

  async showMenu() {
    await this.menuController.toggle();
  }
}

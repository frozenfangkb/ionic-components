import { Component, OnInit } from '@angular/core';

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
  ];

  constructor() {}

  ngOnInit() {}
}

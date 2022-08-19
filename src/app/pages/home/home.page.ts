import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Route } from '../../models/route';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  routes: Observable<Route[]>;

  constructor(
    private menuController: MenuController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.routes = this.dataService.getMenuOptions();
  }

  async showMenu() {
    await this.menuController.toggle();
  }
}

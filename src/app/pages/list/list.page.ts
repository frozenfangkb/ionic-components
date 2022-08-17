import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  userList: Observable<User[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.userList = this.dataService.getUsers();
  }

  async favorite(user: User) {
    console.log(user);
    await this.ionList.closeSlidingItems();
  }

  async share(user: User) {
    console.log(user);
    await this.ionList.closeSlidingItems();
  }

  async delete(user: User) {
    console.log(user);
    await this.ionList.closeSlidingItems();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data: any = Array(20);

  constructor() {}

  ngOnInit() {}

  loadData(event) {
    setTimeout(async () => {
      this.data = [...this.data, ...Array(20)];
      // event.target.complete();
      await this.infiniteScroll.complete();

      if (this.data.length > 50) {
        this.infiniteScroll.disabled = true;
      }
    }, 2500);
  }
}

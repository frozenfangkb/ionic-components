import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: HTMLIonLoadingElement;

  constructor(public loadingController: LoadingController) {}

  ngOnInit() {}

  async onClick(): Promise<void> {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    await this.loading.present();

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }
}

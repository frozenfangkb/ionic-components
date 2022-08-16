import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async onClick(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Click en ok');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {},
        },
      ],
      backdropDismiss: false,
    });

    await alert.present();
  }

  async presentAlertInputs(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
}

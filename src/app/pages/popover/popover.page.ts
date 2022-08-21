import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async onClick(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
    });

    return await popover.present();
  }
}
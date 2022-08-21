import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  percent = 0.05;

  constructor() {}

  ngOnInit() {}

  rangeChanged(event) {
    this.percent = event.detail.value / 100;
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  heroes: Observable<Hero[]>;
  activeSegment = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.heroes = this.dataService.getHeroes();
  }

  segmentChanged(event: CustomEvent) {
    this.activeSegment = event.detail.value;
  }
}

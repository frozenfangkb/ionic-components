import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Album } from '../../models/Album';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albums: Album[] = [];
  searchText = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe((albums) => (this.albums = albums));
  }

  onSearchChange(event: CustomEvent) {
    this.searchText = event.detail.value;
  }
}

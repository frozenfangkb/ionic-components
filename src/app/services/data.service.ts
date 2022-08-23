import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Route } from '../models/route';
import { Album } from '../models/Album';
import { Hero } from '../models/hero';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getMenuOptions(): Observable<Route[]> {
    return this.http.get<Route[]>('/assets/data/menu-opts.json');
  }

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>('/assets/data/superheroes.json')
      .pipe(delay(1500));
  }
}

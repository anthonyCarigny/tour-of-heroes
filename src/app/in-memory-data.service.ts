import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Carina', icon:"http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/48/Avengers-Black-Widow-icon.png" },
      { id: 12, name: 'Alex', icon:"https://cdn3.iconfinder.com/data/icons/marvel-avatars-filledoutline/64/antman-avangers-marvel-avatars-gartoon-marvel_avatars-hero-512.png" },
      { id: 13, name: 'Paul', icon:"" },
      { id: 14, name: 'Stefania', icon:"https://cdn3.iconfinder.com/data/icons/marvel-avatars-filledoutline/64/wasp-avangers-marvel-avatars-gartoon-marvel_avatars-hero-512.png" },
      { id: 15, name: 'Ramakrishnan', icon:"" },
      { id: 16, name: 'Susie', icon:"https://cdn.shopify.com/s/files/1/0257/6087/products/0-Capt-Marvel-Icon-BK_Single_Front.png" },
      { id: 17, name: 'Anthony', icon:"https://lumiere-a.akamaihd.net/v1/images/avengers-characterthumbnail-falcon_610f2f21.jpeg" },
      { id: 18, name: 'Kyle', icon:"http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/48/Avengers-Thor-icon.png" },
      { id: 19, name: 'Dan', icon:"https://img.icons8.com/color/48/000000/iron-man.png" },
      { id: 20, name: 'Luke', icon:"" },
      { id: 21, name: 'Mario', icon:"" },
      { id: 22, name: 'Sam', icon:"" },
      { id: 23, name: 'Jack', icon:"http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/48/Avengers-Nick-Fury-icon.png"}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
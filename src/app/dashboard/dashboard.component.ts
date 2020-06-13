import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/model/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  breakpoint: number;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 4;
  }

  getHeroes(): void {
    this.heroService.getAvengers()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 2 : 4;
  }
}
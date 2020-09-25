import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/model/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  isLoading = false;
  loadedAll = false;
  isFirstLoad = true;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.handleScroll();
  }


  getHeroes(): void {
    this.isLoading = true;
    this.heroService.getHeroes().subscribe(res => {
      if (res.length) {
        this.heroes.push(...res);
      } else {
        this.loadedAll = true;
      }
      this.isLoading = false;
      this.isFirstLoad = false;
    });
  }

  handleScroll(): void {

    window.onscroll = () => this.detectBottom();
  }

  detectBottom(): void {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (!this.loadedAll) {
        this.heroService.paginatePage();
        this.getHeroes();
      }
    }
  }
}

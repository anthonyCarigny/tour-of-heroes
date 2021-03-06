import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Hero } from './core/model/hero';
import { MessageService } from './message.service';
import { CharacterDataWrapper } from './core/model/character-data-wrapper ';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private pageNr = 0;
  private numberOfElementsToLoad = 50;
  private PUBLIC_KEY = 'e7454513a2f63d69c2fef635d740f97c';
  private heroesUrl = `https://gateway.marvel.com:443/v1/public`; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getAvengers(): Observable<Hero[]> {
    const url = `${this.heroesUrl}/series/24229/characters?&apikey=${this.PUBLIC_KEY}`;
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<CharacterDataWrapper>(url).pipe(
      map((marvelResponse) => marvelResponse.data.results),
      tap((h) => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome}`);
      })
    );
  }

  getHeroes(): Observable<Hero[]> {
    const url = `${this.heroesUrl}/characters?limit=${this.numberOfElementsToLoad}&offset=${this.pageNr*this.numberOfElementsToLoad}&apikey=${this.PUBLIC_KEY}`;

    return this.http.get<CharacterDataWrapper>(url).pipe(
      map((marvelResponse) => marvelResponse.data.results),
      tap((h) => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome}`);
      })
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/characters/${id}?apikey=${this.PUBLIC_KEY}`;
    return this.http.get<CharacterDataWrapper>(url).pipe(
      map((marvelResponse) => marvelResponse.data.results[0]),
      tap((h) => {
        const outcome = h ? `fetched` : `did not find`;
        console.log(h);
        this.log(`HeroService: ${outcome} hero id=${id}`);
      })
    );
  }
  paginatePage(): void {
    this.pageNr ++;
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Hero } from './hero';
import { MessageService } from './message.service';
import { MarvelResponse } from './marvel-response';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private PUBLIC_KEY = "public_key_goes_here";
  private heroesUrl = `https://gateway.marvel.com:443/v1/public`; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getAvengers(): Observable<Hero[]> {
    const url = `${this.heroesUrl}/series/24229/characters?&apikey=${this.PUBLIC_KEY}`;
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<MarvelResponse>(url)
    .pipe(
      map(marvelResponse => marvelResponse.data.results),
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome}`);
      })
    );
  }

  getHeroes(): Observable<Hero[]> {
    const url = `${this.heroesUrl}/characters?apikey=${this.PUBLIC_KEY}`;

    // TODO: send the message _after_ fetching the heroes
    return this.http.get<MarvelResponse>(url)
    .pipe(
      map(marvelResponse => marvelResponse.data.results),
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome}`);
      })
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/characters/${id}?apikey=${this.PUBLIC_KEY}`;
    return this.http.get<MarvelResponse>(url)
    .pipe(
      map(marvelResponse => marvelResponse.data.results[0]),
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        console.log(h)
        this.log(`HeroService: ${outcome} hero id=${id}`);
      })
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

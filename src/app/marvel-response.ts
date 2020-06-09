import { Hero } from './hero';

export interface MarvelResponse {
    code: number;
    status: string;
    copyright:string;
    data:{
      results: Hero[];
    }
  }
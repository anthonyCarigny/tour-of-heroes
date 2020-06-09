import { Hero } from './hero';

export interface CharacterDataWrapper  {
    code: number;
    status: string;
    copyright:string;
    data:{
      results: Hero[];
    }
  }
import { Hero } from './core/models/hero';

export interface CharacterDataWrapper  {
    code: number;
    status: string;
    copyright:string;
    data:{
      results: Hero[];
    }
  }
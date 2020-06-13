import { Hero } from './hero';

export interface CharacterDataWrapper  {
    code: number;
    status: string;
    data:{
      offset: number; 
      limit: number;
      total: number;
      count: number;
      results: Hero[];
    }
    etag: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
  }
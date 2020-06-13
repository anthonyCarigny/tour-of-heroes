import { Image } from './image';
import { Creator } from './creator';
import { Hero } from './hero';

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: number;
  description: string;
  modified: Date;
  format: string;
  pageCount: number;
  thumbnail: Image;
  images: Image[];
  creators: Creator[];
  characters: Hero[];
}

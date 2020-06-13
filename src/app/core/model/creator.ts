import { Image } from "./image";
import { Series } from './series';
import { Story } from './story';
import { Comic } from './comic';

export interface Creator {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: Date;
  resourceURI: string;
  urls: URL[];
  thumbnail: Image;
  series: Series[];
  stories: Story[];
  comics: Comic[];
  events: Event[];
}

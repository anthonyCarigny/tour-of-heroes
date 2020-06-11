import { Image } from "./image";
import { Comic } from "./comic";
import { Story } from "./story";
import { Event } from "./event";
import { Series } from "./series";

export interface Hero {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: URL[];
  thumbnail: Image;
  comics: Comic[];
  stories: Story[];
  events: Event[];
  series: Series[];
}

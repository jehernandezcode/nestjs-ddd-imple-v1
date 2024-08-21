import { Genre } from '../genre/genre.model';

export class Movie {
  id: string;
  title: string;
  description: string;
  posterImg: string;
  genre: Genre;
}

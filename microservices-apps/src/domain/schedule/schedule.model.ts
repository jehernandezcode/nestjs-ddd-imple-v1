import { Movie } from '../movie/movie.model';

export class Schedule {
  id: string;
  movie: Movie;
  date: Date;
  capacity: number;
}

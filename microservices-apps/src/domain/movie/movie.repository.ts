import { Movie } from './movie.model';

export interface MovieRepository {
  create(movie: Movie): Promise<Movie>;
  findById(id: string): Promise<Movie | null>;
  findAll(): Promise<Movie[]>;
  update(movie: Movie): Promise<Movie>;
  delete(id: string): Promise<void>;
}

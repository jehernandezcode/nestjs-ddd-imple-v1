import { Genre } from './genre.model';

export interface GenreRepository {
  create(genre: Genre): Promise<Genre>;
  findById(id: number): Promise<Genre | null>;
  findAll(): Promise<Genre[]>;
  update(genre: Genre): Promise<Genre>;
  delete(id: number): Promise<void>;
}

import { Schedule } from './schedule.model';

export interface ScheduleRepository {
  create(schedule: Schedule): Promise<Schedule>;
  findById(id: string): Promise<Schedule | null>;
  findByMovie(id: string): Promise<Schedule | null>;
  findMovieByDates(before: Date, after: Date): Promise<Schedule[]>;
  update(schedule: Schedule): Promise<Schedule>;
  delete(id: string): Promise<void>;
}

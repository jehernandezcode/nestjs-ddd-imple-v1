import { Schedule } from '../schedule/schedule.model';
import { User } from '../user/user.model';
import { EBooking } from './EBooking';

export class Booking {
  id: string;
  user: User;
  schedule: Schedule;
  seat_number: number;
  status: EBooking;
}

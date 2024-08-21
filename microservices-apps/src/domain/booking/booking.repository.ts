import { Booking } from './booking.model';

export interface BookingRepository {
  create(booking: Booking): Promise<Booking>;
  findById(id: string): Promise<Booking | null>;
  findByUser(id: string): Promise<Booking[]>;
  update(booking: Booking): Promise<Booking>;
  delete(id: string): Promise<void>;
}

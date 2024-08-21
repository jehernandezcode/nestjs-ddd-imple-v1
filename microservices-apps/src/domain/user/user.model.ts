import { Role } from '../role/role.model';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}

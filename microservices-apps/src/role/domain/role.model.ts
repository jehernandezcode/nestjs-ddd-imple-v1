import { ERole } from '../../shared/enums/EnumRole';

export class Role {
  constructor(
    public id: string,
    public name: string,
    public role: ERole,
  ) {}
}

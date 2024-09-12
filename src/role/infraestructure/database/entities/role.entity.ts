import { ERole } from 'src/shared/enums/EnumRole';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ERole,
    default: ERole.client,
    unique: true,
  })
  role: ERole;

  @Column({ length: 50 })
  name: string;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Machine_data } from './machine-data.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: boolean;

  @Column()
  emp_id: string;

  @Column()
  password: string;

  @Column()
  last_login: string;

  @Column()
  last_pass_update: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: string;

  @OneToMany(() => Machine_data, (machine_data) => machine_data.user)
  machine_data: Machine_data[];
}

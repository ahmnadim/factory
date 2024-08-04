//Machine_data(id, machine_id, user_id, date, q1,q2,q3,q4,q5, created_at)

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Machine } from './machine.entity';

@Entity()
export class Machine_data {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Machine, (machine) => machine.id)
  @JoinColumn({
    name: 'machine_id',
  })
  machine: Machine;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @Column()
  date: Date;

  @Column()
  q1: string;

  @Column()
  q2: string;

  @Column()
  q3: string;

  @Column()
  q4: string;

  @Column()
  q5: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;
}

//Machine(id, machine_name, created_at, machine_type)

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Machine_data } from './machine-data.entity';

@Entity()
export class Machine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  machine_name: string;

  @Column({
    type: 'enum',
    enum: ['maker', 'packer'],
  })
  machine_type: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: string;

  @OneToMany(() => Machine_data, (machine_data) => machine_data.machine)
  machine_data: Machine_data[];
}

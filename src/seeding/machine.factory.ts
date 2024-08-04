import { Faker } from '@faker-js/faker';
import { Machine } from '../entity/machine.entity';
import { setSeederFactory } from 'typeorm-extension';

export const MachineFectory = setSeederFactory(Machine, (faker: Faker) => {
  const machine = new Machine();
  machine.machine_name = faker.vehicle.manufacturer();
  machine.machine_type = faker.helpers.arrayElement(['packer', 'maker']);
  //   machine.machine_status = faker.datatype.boolean();
  machine.created_at = faker.date.recent().toUTCString().toString();
  //   machine.updated_at = faker.date.recent().toUTCString().toString();

  return machine;
});

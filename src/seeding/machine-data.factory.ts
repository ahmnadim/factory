import { Faker } from '@faker-js/faker';
import { Machine_data } from '../entity/machine-data.entity';
import { setSeederFactory } from 'typeorm-extension';

export const MachineDataFactory = setSeederFactory(
  Machine_data,
  (faker: Faker) => {
    const machine_data = new Machine_data();
    // machine_data.machine_id = faker.datatype.number({
    //   max: 100,
    // });
    machine_data.date = faker.date.between('2021-01-01', '2024-12-31');
    // machine_data.user_id = faker.datatype.number({
    //   max: 10,
    // });

    machine_data.q1 = faker.helpers.arrayElement([
      'yes',
      'no',
      'not mandatory',
    ]);
    machine_data.q2 = faker.helpers.arrayElement([
      'yes',
      'no',
      'not mandatory',
    ]);

    machine_data.q3 = faker.helpers.arrayElement([
      'yes',
      'no',
      'not mandatory',
    ]);

    machine_data.q4 = faker.helpers.arrayElement([
      'yes',
      'no',
      'not mandatory',
    ]);

    machine_data.q5 = faker.helpers.arrayElement([
      'yes',
      'no',
      'not mandatory',
    ]);

    machine_data.created_at = faker.date.recent();
    // machine_data.updated_at = faker.date.recent().toUTCString().toString();

    return machine_data;
  },
);

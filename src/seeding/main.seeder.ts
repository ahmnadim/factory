import { faker } from '@faker-js/faker';
import { Machine_data } from '../entity/machine-data.entity';
import { Machine } from '../entity/machine.entity';
import { User } from '../entity/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    console.log('Seeding User...');
    const userFactory = factoryManager.get(User);
    const users = await userFactory.saveMany(10);

    console.log('Seeding Machine...');
    const machinefactory = factoryManager.get(Machine);
    const machines = await machinefactory.saveMany(100);

    console.log('Seeding Machine Data...');
    const machineDataFactory = factoryManager.get(Machine_data);

    const properties = await Promise.all(
      Array(1000)
        .fill('')
        .map(async () => {
          const property = await machineDataFactory.make({
            user: faker.helpers.arrayElement(users),
            machine: faker.helpers.arrayElement(machines),
          });
          return property;
        }),
    );
    const machine_data_repo = dataSource.getRepository(Machine_data);
    await machine_data_repo.save(properties);
  }
}

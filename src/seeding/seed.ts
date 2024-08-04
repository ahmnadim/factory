import { dataSourceOptions } from '../database/data-source';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeder, runSeeders, SeederOptions } from 'typeorm-extension';
import { UserFactory } from './user.factory';
import { MainSeeder } from './main.seeder';
import { MachineFectory } from './machine.factory';
import { MachineDataFactory } from './machine-data.factory';

const options: DataSourceOptions & SeederOptions = {
  ...dataSourceOptions,
  factories: [UserFactory, MachineFectory, MachineDataFactory],
  seeds: [MainSeeder],
};

const datasource = new DataSource(options);

datasource.initialize().then(async () => {
  await datasource.synchronize();
  await runSeeders(datasource);
  process.exit();
});

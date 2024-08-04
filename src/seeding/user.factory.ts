import { Faker } from '@faker-js/faker';
import { User } from '../entity/user.entity';
import { setSeederFactory } from 'typeorm-extension';

export const UserFactory = setSeederFactory(User, (faker: Faker) => {
  const user = new User();
  user.name = faker.person.fullName();
  user.password = faker.internet.password();
  user.emp_id = faker.string.uuid();
  user.last_login = faker.date.recent().toUTCString().toString();
  user.created_at = faker.date.recent().toUTCString().toString();
  user.updated_at = faker.date.recent().toUTCString().toString();
  user.last_pass_update = faker.date.recent().toUTCString().toString();
  user.status = faker.datatype.boolean();

  return user;
});

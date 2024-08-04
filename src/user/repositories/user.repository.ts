import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import dataSource from 'src/database/data-source';
import { Machine_data } from 'src/entity/machine-data.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async createUser() {}
  async updateUser() {}
  async deleteUser() {}
  async getUser() {}
  async getUsers() {
    // const repo = dataSource.getRepository();

    return await this.userRepo.find({
      relations: {
        machine_data: true,
      },
    });
    try {
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  async getUserByEmail() {}
  async getUserById() {}
}

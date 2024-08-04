import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser() {
    return await this.userRepository.createUser();
  }

  async updateUser() {}
  async deleteUser() {}
  async getUser() {}
  async getUsers() {
    return await this.userRepository.getUsers();
  }
}

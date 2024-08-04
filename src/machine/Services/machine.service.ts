import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Machine_data } from 'src/entity/machine-data.entity';
import { Machine } from 'src/entity/machine.entity';
import { User } from 'src/entity/user.entity';
import { PaginationService } from 'src/pagination/pagination.service';
import { createQueryBuilder, Repository } from 'typeorm';

@Injectable()
export class MachineService {
  constructor(
    @InjectRepository(Machine_data)
    private machineDataRepository: Repository<Machine_data>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Machine)
    private machineRepository: Repository<Machine>,
    private readonly paginationService: PaginationService,
  ) {}

  async productionDetails({ query }) {
    console.log('query: ', query);

    let where = {};
    // if (query.machineType && query.machineType !== undefined) {
    //   where = {
    //     ...where,
    //     'machine_data->machine.machine_type': query.machineType,
    //   };
    // }

    // console.log('where: ', where, query);
    // if (query.date && query.date !== undefined) {
    //   where = {
    //     ...where,
    //     date: query.date,
    //   };
    // }
    // if (query.empId && query.empId !== undefined) {
    //   where = {
    //     ...where,
    //     user: query.empId,
    //   };
    // }

    try {
      const q = this.machineDataRepository
        .createQueryBuilder('machine_data')
        .innerJoinAndSelect('machine_data.machine', 'machine')
        .innerJoinAndSelect('machine_data.user', 'user')
        .where('machine.machine_type=:machine_type', {
          machine_type: query.machineType,
        });

      if (query.empId !== undefined) {
        q.andWhere('user.emp_id = :empId', { empId: query.empId });
      }
      if (query.from !== undefined && query.to !== undefined) {
        q.andWhere('machine_data.date BETWEEN :from AND :to', {
          from: query.from,
          to: query.to,
        });
      } else if (query.to !== undefined) {
        q.andWhere('machine_data.date = :to', { date: query.to });
      }

      const total = await q.getCount();
      const { offset } = this.paginationService.getPaginationData(
        query.page,
        query.limit,
        total,
      );

      const data = await q.take(query.limit).skip(offset).getMany();
      return this.paginationService.getDataWithPagination(data, {
        page: query.page,
        limit: query.limit,
        total,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async handleMachineData(body) {
    console.log('body: ', body);
    try {
      const user = await this.userRepository.findOne({
        where: { id: body.user_id },
      });
      if (!user) {
        throw new Error('User not found');
      }

      const machine = await this.machineDataRepository.findOne({
        where: { id: body.machine_id },
      });
      if (!machine) {
        throw new Error('Machine not found');
      }

      const machineData = this.machineDataRepository.create(body);
      return await this.machineDataRepository.save({
        ...body,
        machine,
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

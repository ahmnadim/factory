import { Module } from '@nestjs/common';
import { MachineController } from './controllers/machine.controller';
import { MachineService } from './Services/machine.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machine_data } from 'src/entity/machine-data.entity';
import { PaginationService } from 'src/pagination/pagination.service';
import { Machine } from 'src/entity/machine.entity';
import { User } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Machine_data, Machine, User])],
  controllers: [MachineController],
  providers: [MachineService, PaginationService],
  exports: [],
})
export class MachineModule {}

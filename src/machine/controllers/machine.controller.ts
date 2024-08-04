import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MachineData, ProductionDetailsDto } from '../dto/machine.dto';
import { MachineService } from '../Services/machine.service';
import { PaginationPipe } from 'src/pagination/pagination.pipe';
import { ApiTags } from '@nestjs/swagger';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Get('production-details')
  @ApiTags('Production details')
  async productionDetails(@Query(PaginationPipe) query: ProductionDetailsDto) {
    return this.machineService.productionDetails({ query });
  }

  @Post('data')
  @ApiTags('Machine data')
  async handleMachineData(@Body() data: MachineData) {
    return this.machineService.handleMachineData(data);
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { from } from 'rxjs';

export class PaginationDto {
  limit: number;
  page: number;
}

export class ProductionDetailsDto extends PaginationDto {
  @IsNotEmpty({ message: 'Machine Type is Required.' })
  @IsString({ message: 'Machine Type must be a string' })
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  machineType: string;

  to?: string;
  from?: string;
  empId?: string;
}

export class MachineData {
  @IsNotEmpty({ message: 'Please select a Machine.' })
  machine_id: number;

  @IsNotEmpty({ message: 'User is required.' })
  user_id: number;

  date: string;

  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
}

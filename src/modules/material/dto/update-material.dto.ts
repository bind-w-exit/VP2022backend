import { ApiProperty } from '@nestjs/swagger';

export class UpdateMaterialDto {
  @ApiProperty({
    description: 'Id of the material',
    default: 1
  })
  id: number;

  @ApiProperty({
    description: 'Name of the material',
    default: 'Матеріал'
  })
  name: string;

  @ApiProperty({
    description: 'The price of the material',
    minimum: 1,
    default: 1,
  })
  price: number;

  @ApiProperty({
    description: 'Creation time',
  })
  addDate: Date;
}
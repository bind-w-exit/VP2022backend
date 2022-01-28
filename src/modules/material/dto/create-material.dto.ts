import { ApiProperty } from '@nestjs/swagger';

export class CreateMaterialDto {
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

}
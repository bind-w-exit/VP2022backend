import { ApiProperty } from '@nestjs/swagger';

export class UpdateMaterialDto {
  @ApiProperty({
    description: 'Material name',
    example: 'Гіпсокартон'
  })
  name: string;

  @ApiProperty({
    description: 'Material price',
    example: 139.99
  })
  price: number;

}
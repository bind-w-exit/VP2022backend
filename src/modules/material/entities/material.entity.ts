import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Material {
  
  @ApiProperty({
    description: 'Material ID',
    example: 1
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Material name',
    example: 'Гіпсокартон'
  })
  @Column({
    nullable: false
  })
  name: string;

  @ApiProperty({
    description: 'Material price',
    example: 139.99
  })
  @Column({
    type: "decimal",
    nullable: false
  })
  price: number;

  @ApiProperty({
    description: 'Creation time',
    example: '2022-01-28T13:05:49.145'
  })
  @Column({
    type: "timestamp",
    nullable: false
  })
  addDate?: Date;

}
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Material {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  name: string;

  @Column({
    type: "decimal",
    nullable: false
  })
  price: number;

  @Column({
    type: "timestamp",
    nullable: false
  })
  addDate: Date;

}
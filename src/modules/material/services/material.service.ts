import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMaterialDto } from '../dto/create-material.dto';
import { UpdateMaterialDto } from '../dto/update-material.dto';
import { Material } from '../entities/material.entity';

@Injectable()
export class MaterialService {
  constructor(
    @InjectRepository(Material)
    private materialRepository: Repository<Material>,
  ) {}

  findAll(): Promise<Material[]> {
    return this.materialRepository.find();
  }

  findOne(id: string): Promise<Material> {
    return this.materialRepository.findOne(id); //findOneOrFail
  }

  create(createMaterialDto: CreateMaterialDto): Promise<Material> {
    return this.materialRepository.save(createMaterialDto);
  }

  update(updateMaterialDto: UpdateMaterialDto): Promise<Material> {
    return this.materialRepository.save(updateMaterialDto);
  }

  async remove(id: string): Promise<void> {
    await this.materialRepository.delete(id);
  }
}
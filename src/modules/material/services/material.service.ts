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

  async findAll(): Promise<Material[]> {
    return await this.materialRepository.find();
  }

  async findOne(id: string): Promise<Material> {
    return await this.materialRepository.findOne(id);
  }

  async create(createMaterialDto: CreateMaterialDto): Promise<Material> {
    return await this.materialRepository.save(createMaterialDto);
  }

  async update(id: string, updateMaterialDto: UpdateMaterialDto): Promise<Material> {
    const entity = await this.materialRepository.findOne(id)
    if (entity) {
      entity.name = updateMaterialDto.name;
      entity.price = updateMaterialDto.price;
      return await this.materialRepository.save(entity);
    }
  }

  async remove(id: string): Promise<void> {
    await this.materialRepository.delete(id);
  }
}
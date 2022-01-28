import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMaterialDto } from '../dto/create-material.dto';
import { UpdateMaterialDto } from '../dto/update-material.dto';
import { Material } from '../entities/material.entity';
import { MaterialService } from '../services/material.service';


@Controller('api/material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {
  }
  @Get()
  getAllAction(): Promise<Material[]> {
    return this.materialService.findAll();
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<Material> {
    return this.materialService.findOne(id);
  }

  @Post()
  createAction(@Body() createMaterialDto: CreateMaterialDto): Promise<Material>{
    console.log(createMaterialDto);
    return this.materialService.create(createMaterialDto);
  }

  @Put(':id')
  updateAction(@Param('id') id: string, @Body() updateMaterialDto: UpdateMaterialDto) {
    return this.materialService.update(id, updateMaterialDto);
  }
  
  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.materialService.remove(id);
  }
}

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMaterialDto } from '../dto/create-material.dto';
import { UpdateMaterialDto } from '../dto/update-material.dto';
import { Material } from '../entities/material.entity';
import { MaterialService } from '../services/material.service';

@ApiTags('Materials')
@Controller('api/material')
export class MaterialController {

  constructor(private readonly materialService: MaterialService) {}

  @ApiOperation({summary:'Get all materials'})
  @ApiResponse({ status: 200, type: [Material]})
  @Get()
  getAllAction(): Promise<Material[]> {
    return this.materialService.findAll();
  }

  @ApiOperation({summary:'Get material by id'})
  @ApiResponse({ status: 200, type: Material})
  @Get(':id')
  getOneAction(@Param('id', ParseIntPipe) id: string): Promise<Material> {
    return this.materialService.findOne(id);
  }

  @ApiOperation({summary:'Creating new material'})
  @ApiResponse({ status: 201, description: 'Material successfully created', type: Material})
  @Post()
  createAction(@Body() createMaterialDto: CreateMaterialDto): Promise<Material>{
    console.log(createMaterialDto);
    return this.materialService.create(createMaterialDto);
  }

  @ApiOperation({summary:'Update material'})
  @ApiResponse({ status: 200, description: 'Material successfully updated', type: Material})
  @Put(':id')
  updateAction(@Param('id', ParseIntPipe) id: string, @Body() updateMaterialDto: UpdateMaterialDto) {
    return this.materialService.update(id, updateMaterialDto);
  }
  
  @ApiOperation({summary:'Delete material by id'})
  @Delete(':id')
  deleteAction(@Param('id', ParseIntPipe) id: string): Promise<void>{
    return this.materialService.remove(id);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialController } from './controllers/material.controller';
import { Material } from './entities/material.entity';
import { MaterialService } from './services/material.service';


@Module({
  imports: [TypeOrmModule.forFeature([Material])],
  controllers: [MaterialController],
  providers: [MaterialService],
})

export class MaterialModule {}

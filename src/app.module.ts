import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialModule } from './modules/material/material.module';


@Module({
  imports: [TypeOrmModule.forRoot(), MaterialModule]
})

export class AppModule {}

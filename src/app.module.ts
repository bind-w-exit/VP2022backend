import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialModule } from './modules/material/material.module';


@Module({
  imports: [TypeOrmModule.forRoot(), MaterialModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

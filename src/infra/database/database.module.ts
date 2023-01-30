import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfigs } from './typeorm/config/TypeormConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfigs),
    TypeOrmModule.forFeature([]),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}

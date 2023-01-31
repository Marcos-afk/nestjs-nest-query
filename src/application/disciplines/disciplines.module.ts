import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateDisciplineInput } from './dtos/create-discipline.input';
import { DisciplineDTO } from './dtos/discipline.dto';
import { UpdateDisciplineInput } from './dtos/update-discipline.input';
import { DisciplineEntity } from './entities/discipline.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([DisciplineEntity])],
      resolvers: [
        {
          DTOClass: DisciplineDTO,
          EntityClass: DisciplineEntity,
          CreateDTOClass: CreateDisciplineInput,
          UpdateDTOClass: UpdateDisciplineInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class DisciplinesModule {}

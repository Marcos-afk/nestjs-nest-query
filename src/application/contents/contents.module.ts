import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { ContentDTO } from './dtos/content.dto';
import { CreateContentInput } from './dtos/create-content.input';
import { UpdateContentInput } from './dtos/update-content.input';
import { ContentEntity } from './entities/content.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ContentEntity])],
      resolvers: [
        {
          DTOClass: ContentDTO,
          EntityClass: ContentEntity,
          CreateDTOClass: CreateContentInput,
          UpdateDTOClass: UpdateContentInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ContentsModule {}

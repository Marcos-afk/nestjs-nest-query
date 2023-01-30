import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateStudentInput } from './dtos/create-student.input';
import { StudentDTO } from './dtos/student.dto';
import { UpdateStudentInput } from './dtos/update-student.input';
import { StudentEntity } from './entities/student.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([StudentEntity])],
      resolvers: [
        {
          DTOClass: StudentDTO,
          EntityClass: StudentEntity,
          CreateDTOClass: CreateStudentInput,
          UpdateDTOClass: UpdateStudentInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class StudentsModule {}

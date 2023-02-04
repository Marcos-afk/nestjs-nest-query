import { BaseDTO } from '@application/bases/dtos/base.dto';
import { StudentDTO } from '@application/students/dtos/student.dto';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Discipline')
@FilterableOffsetConnection('students', () => StudentDTO, { nullable: true })
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}

import { BaseDTO } from '@application/bases/dtos/base.dto';
import { DisciplineDTO } from '@application/disciplines/dtos/discipline.dto';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
@FilterableOffsetConnection('disciplines', () => DisciplineDTO, {
  nullable: true,
})
export class StudentDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}

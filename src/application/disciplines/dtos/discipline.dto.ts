import { BaseDTO } from '@application/bases/dtos/base.dto';
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Discipline')
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}

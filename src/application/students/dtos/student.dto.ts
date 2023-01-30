import { BaseDTO } from '@application/bases/dtos/base.dto';
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}

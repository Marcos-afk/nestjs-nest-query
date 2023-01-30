import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO {
  @FilterableField()
  id: string;

  @FilterableField()
  created_at: Date;

  @FilterableField()
  updated_at: Date;

  @FilterableField()
  deleted_at: Date;
}

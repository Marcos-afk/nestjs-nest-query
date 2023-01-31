import { BaseDTO } from '@application/bases/dtos/base.dto';
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonDTO extends BaseDTO {
  @FilterableField()
  description: string;
}

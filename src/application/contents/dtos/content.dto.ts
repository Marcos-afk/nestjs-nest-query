import { BaseDTO } from '@application/bases/dtos/base.dto';
import { LessonDTO } from '@application/lessons/dtos/lesson.dto';
import {
  FilterableField,
  FilterableRelation,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Content')
@FilterableRelation('lesson', () => LessonDTO, { nullable: true })
export class ContentDTO extends BaseDTO {
  @FilterableField()
  description: string;

  @FilterableField({ nullable: true })
  link_content?: string;
}

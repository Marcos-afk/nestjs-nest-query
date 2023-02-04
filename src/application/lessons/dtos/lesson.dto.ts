import { BaseDTO } from '@application/bases/dtos/base.dto';
import { ContentDTO } from '@application/contents/dtos/content.dto';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ContentDTO, { nullable: true })
export class LessonDTO extends BaseDTO {
  @FilterableField()
  description: string;
}

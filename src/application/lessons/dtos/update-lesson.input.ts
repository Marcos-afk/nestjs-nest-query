import { InputType, PartialType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';
import { CreateLessonInput } from './create-lesson.input';

@InputType()
export class UpdateLessonInput extends PartialType(CreateLessonInput) {
  @IsOptional()
  @IsUUID(4, { message: 'Id deve ser um uuid do tipo 4' })
  readonly id?: string;
}

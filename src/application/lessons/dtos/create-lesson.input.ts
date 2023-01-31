import { InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @IsString({ message: 'Campo nome deve ser uma string' })
  readonly description: string;
}

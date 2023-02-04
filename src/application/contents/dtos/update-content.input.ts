import { InputType, PartialType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';
import { CreateContentInput } from './create-content.input';

@InputType()
export class UpdateContentInput extends PartialType(CreateContentInput) {
  @IsOptional()
  @IsUUID(4, { message: 'Id deve ser um uuid do tipo 4' })
  readonly id?: string;
}

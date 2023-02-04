import { InputType, PartialType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';
import { CreateDisciplineInput } from './create-discipline.input';

@InputType()
export class UpdateDisciplineInput extends PartialType(CreateDisciplineInput) {
  @IsOptional()
  @IsUUID(4, { message: 'Id deve ser um uuid do tipo 4' })
  readonly id?: string;
}

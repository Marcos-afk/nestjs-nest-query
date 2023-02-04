import { InputType, PartialType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';
import { CreateStudentInput } from './create-student.input';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  @IsOptional()
  @IsUUID(4, { message: 'Id deve ser um uuid do tipo 4' })
  readonly id?: string;
}

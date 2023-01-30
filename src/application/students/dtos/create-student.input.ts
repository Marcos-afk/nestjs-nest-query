import { InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @IsString({ message: 'Campo nome deve ser uma string' })
  readonly name: string;

  @IsString({ message: 'Campo chave deve ser uma string' })
  readonly key: string;
}

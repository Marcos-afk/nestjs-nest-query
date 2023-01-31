import { InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateDisciplineInput {
  @IsString({ message: 'Campo nome deve ser uma string' })
  readonly name: string;
}

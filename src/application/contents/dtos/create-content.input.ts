import { InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateContentInput {
  @IsString({ message: 'Campo descrição deve ser uma string' })
  readonly description: string;

  @IsString({ message: 'Campo link do conteúdo deve ser uma string' })
  readonly link_content: string;
}

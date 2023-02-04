import { InputType } from '@nestjs/graphql';
import { IsOptional, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateContentInput {
  @IsString({ message: 'Campo descrição deve ser uma string' })
  readonly description: string;

  @IsOptional()
  @IsString({ message: 'Campo link do conteúdo deve ser uma string' })
  readonly link_content?: string;

  @IsOptional()
  @IsUUID(4, { message: 'lessonId deve ser um uuid do tipo 4' })
  readonly lessonId?: string;
}

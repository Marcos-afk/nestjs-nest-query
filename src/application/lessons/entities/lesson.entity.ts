import { BaseEntity } from '@application/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class LessonEntity extends BaseEntity {
  @Column()
  description: string;
}

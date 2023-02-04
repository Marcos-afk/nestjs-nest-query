import { BaseEntity } from '@application/bases/entities/base.entity';
import { ContentEntity } from '@application/contents/entities/content.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class LessonEntity extends BaseEntity {
  @Column()
  description: string;

  @OneToMany(() => ContentEntity, (contents) => contents.lesson, {
    nullable: true,
  })
  contents: ContentEntity[];
}

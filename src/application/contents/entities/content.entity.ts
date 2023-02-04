import { BaseEntity } from '@application/bases/entities/base.entity';
import { LessonEntity } from '@application/lessons/entities/lesson.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class ContentEntity extends BaseEntity {
  @Column()
  description: string;

  @Column({ nullable: true })
  link_content: string;

  @ManyToOne(() => LessonEntity, (lesson) => lesson.contents, {
    nullable: true,
  })
  lesson: LessonEntity;

  @Column({ nullable: true })
  lessonId: string;
}

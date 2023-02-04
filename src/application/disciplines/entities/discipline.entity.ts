import { BaseEntity } from '@application/bases/entities/base.entity';
import { StudentEntity } from '@application/students/entities/student.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class DisciplineEntity extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => StudentEntity, (students) => students.disciplines, {
    nullable: true,
  })
  @JoinTable()
  students: StudentEntity;
}

import { BaseEntity } from '@application/bases/entities/base.entity';
import { DisciplineEntity } from '@application/disciplines/entities/discipline.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class StudentEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;

  @ManyToMany(() => DisciplineEntity, (disciplines) => disciplines.students, {
    nullable: true,
  })
  disciplines: DisciplineEntity[];
}

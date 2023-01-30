import { BaseEntity } from '@application/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class StudentEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  key: string;
}

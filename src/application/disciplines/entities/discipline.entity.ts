import { BaseEntity } from '@application/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class DisciplineEntity extends BaseEntity {
  @Column()
  name: string;
}

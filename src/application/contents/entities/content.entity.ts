import { BaseEntity } from '@application/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class ContentEntity extends BaseEntity {
  @Column()
  description: string;

  @Column()
  link_content: string;
}

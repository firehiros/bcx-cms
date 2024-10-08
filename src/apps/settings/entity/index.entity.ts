import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  ManyToMany,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
} from 'typeorm';

import ProviderEntity from '@apps/providers/entity/provider.entity';
import { FIELD_TYPE } from '@utils/enum/field.enum';

@Entity({ name: 'settings' })
export default class SettingEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  key: string;

  @Column({
    name: 'label',
    type: 'varchar',
    nullable: true,
  })
  label: string;

  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: FIELD_TYPE,
    default: FIELD_TYPE.TEXT,
  })
  type: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  // Relation
  @ManyToOne(() => ProviderEntity)
  @JoinColumn()
  provider: ProviderEntity;
}

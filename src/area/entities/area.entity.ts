import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'study-areas' })
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  presence: boolean;

  @Column({ nullable: false })
  num_cats: number;

  @Column()
  link: string;

  @Column()
  contact: string;

  @Column()
  partners: string[];

  @Column()
  year: string;

  @Column()
  months: string[];

  @Column({ nullable: false })
  province: string;

  @Column({ nullable: false })
  region: string;
}

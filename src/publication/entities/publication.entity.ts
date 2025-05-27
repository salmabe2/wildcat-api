import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'publications' })
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  date: Date;

  @Column()
  type: string;

  @Column({ nullable: false })
  src: string;

  @Column()
  subtitle?: string;

  @Column()
  img?: string;

  @Column()
  imgInfo?: string;

  @Column({ default: false })
  video: boolean;
}
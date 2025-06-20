import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'Todo'})
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  isCompleted: boolean;
}

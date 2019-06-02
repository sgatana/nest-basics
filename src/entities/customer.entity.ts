import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  profession: string;
  @Column()
  dateCreated: string;
}

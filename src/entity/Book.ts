import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';

@Entity({name: "book"})
export class Book {

  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column()
  readonly title: string;

  @Column()
  readonly userId: number;

  @ManyToOne(type => User, user => user.books)
  @JoinColumn({ name: 'userId' })
  readonly user?: User;

  @Column('datetime', { default: null })
  publishedAt: Date | null = null;

  @CreateDateColumn()
  readonly createdAt?: Date;

  @UpdateDateColumn()
  readonly updatedAt?: Date;

  constructor(title: string, userId: number) {
    this.title = title;
    this.userId = userId;
  }
}

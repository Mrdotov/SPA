import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('User')
export class User {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
    id: number;
  
  @Column({ type: String, unique: true, nullable: true })
    email: string | null;

  @Column({})
    firtsName: string | null;

  @Column({})
    lastName: string | null;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
    password: string | null;
}
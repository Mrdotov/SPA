import { Column, Entity } from "typeorm";

@Entity()
export class UserEntity { 
    @Column({ unique: true })
    id: number;
    @Column({ unique: true })
    email: string;
    @Column({ unique: true })
    password: string;
    @Column({ unique: true })
    firstName: string;
    @Column({ unique: true })
    lastName: string;
    @Column({ unique: true })
    hiddenField = Date.now();
}


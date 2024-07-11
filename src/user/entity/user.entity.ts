import { Entity } from "typeorm";

@Entity()
export class Book { 
 id: number;
 email: string;
 password: string;
 firstName: string;
 lastName: string;
 hiddenField = Date.now();
}


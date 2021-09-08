import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Auth } from "../../auth/entities/auth.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Auth)
  @Column({ unique: true })
  username: string;
}

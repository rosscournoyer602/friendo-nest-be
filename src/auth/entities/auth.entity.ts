import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Auth {
  @PrimaryColumn()
  username: string;
  @Column()
  password: string;
  @OneToOne((type) => User, { cascade: true })
  @JoinColumn()
  user!: User;
}

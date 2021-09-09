import { Message } from "src/message/entities/message.entity";
import { User } from "src/user/entities/user.entity";
import {
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany((type) => User)
  @JoinTable()
  users: User[];

  @OneToMany((type) => Message, (message) => message.chat)
  messages: Message[];
}

import { User } from "src/user/entities/user.entity";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Chat } from "../../chat/entities/chat.entity";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User)
  sender: User;

  @ManyToOne((type) => Chat, (chat) => chat.messages)
  chat: Chat;

  @Column()
  content: string;
}

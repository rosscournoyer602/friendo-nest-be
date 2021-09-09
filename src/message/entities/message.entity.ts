import { User } from "src/user/entities/user.entity";
import {
  Column,
  Entity,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { Chat } from "../../chat/entities/chat.entity";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => User)
  @JoinColumn()
  sender: User;

  @ManyToOne((type) => Chat, (chat) => chat.messages)
  chat: Chat;

  @Column()
  content: string;
}

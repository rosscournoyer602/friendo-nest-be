import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Chat } from "../../chat/entities/chat.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @ManyToMany((type) => Chat, (chat) => chat.users)
  chats: Chat[];
}

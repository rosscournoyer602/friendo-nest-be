import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Chat } from "src/chat/entities/chat.entity";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { Message } from "./entities/message.entity";

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>
  ) {}

  async findAll() {
    return await this.messageRepository.find();
  }

  async findOne(id: string) {
    return await this.messageRepository.findOne(id);
  }

  async create(sender: User, chat: Chat, content: string) {
    const newMessage = await this.messageRepository.create({
      sender,
      chat,
      content,
    });
    console.log("CREATE MESSAGE");
    this.messageRepository.save(newMessage);
  }

  async update(id: number) {
    const currentChat = await this.messageRepository.preload({ id });
    return await this.messageRepository.save(currentChat);
  }
}

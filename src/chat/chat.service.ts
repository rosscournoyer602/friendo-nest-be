import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { Chat } from "./entities/chat.entity";

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>
  ) {}

  async findAll() {
    return await this.chatRepository.find();
  }

  async findOne(id: string) {
    return await this.chatRepository.findOne(id);
  }

  async create(users: User[]) {
    return await this.chatRepository.save({ users });
  }

  async update(id: number) {
    const currentChat = await this.chatRepository.preload({ id });
    return await this.chatRepository.save(currentChat);
  }
}

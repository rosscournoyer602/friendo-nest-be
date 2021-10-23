import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";
import { Connection, Repository } from "typeorm";
import { Chat } from "./entities/chat.entity";

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
    private readonly userService: UserService
  ) {}

  async findAll() {
    return await this.chatRepository.find({ relations: ["users", "messages"] });
  }

  async findChatsByUser(id: string) {
    return await this.chatRepository
      .createQueryBuilder("chat")
      .leftJoinAndSelect("chat.users", "user")
      .where("user.id = :id", { id })
      .getMany();
  }

  async create(users: User[]) {
    if (users.length <= 1) {
      throw new BadRequestException({
        description: "Chat must contain at least two users",
      });
    }
    const usersData = await this.userService.findByIds(users);
    return await this.chatRepository.save({
      users: usersData,
    });
  }
}

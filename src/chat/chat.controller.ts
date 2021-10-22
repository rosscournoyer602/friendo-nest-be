import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";
import { ChatService } from "./chat.service";
import { CreateChatDto } from "./dto/create-chat.dto";

@Controller("chat")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get("")
  async findAll() {
    return await this.chatService.findAll();
  }

  @Get(":id")
  async findChatsByUserId(@Param("id") id: string) {
    return await this.chatService.findChatsByUser(id);
  }

  @Post("create")
  async update(@Body() createChatDto: CreateChatDto) {
    const { users } = createChatDto;
    try {
      return await this.chatService.create(users);
    } catch (err) {
      return err;
    }
  }
}

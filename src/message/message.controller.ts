import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateChatDto } from "src/chat/dto/create-chat.dto";
import { CreateMessageDto } from "./dto/create-message.dto";
import { MessageService } from "./message.service";

@Controller("message")
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get("")
  async findAll() {
    return await this.messageService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.messageService.findOne(id);
  }

  @Patch(":id")
  async update(@Param("id") id: number) {
    return await this.messageService.update(id);
  }

  @Post("")
  async create(@Body() createMessageDto: CreateMessageDto) {
    const { sender, chat, content } = createMessageDto;
    return await this.messageService.create(sender, chat, content);
  }
}

import { Controller, Get, Param, Patch } from "@nestjs/common";
import { ChatService } from "./chat.service";

@Controller("chat")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get("")
  async findAll() {
    return await this.chatService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.chatService.findOne(id);
  }

  @Patch(":id")
  async update(@Param("id") id: number) {
    return await this.chatService.update(id);
  }
}

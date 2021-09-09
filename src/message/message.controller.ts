import { Controller, Get, Param, Patch } from "@nestjs/common";
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
}

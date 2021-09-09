import { Controller, Get, Param, Patch } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("")
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.userService.findOne(id);
  }

  @Patch(":id")
  async update(@Param("id") id: number) {
    return await this.userService.update(id);
  }
}

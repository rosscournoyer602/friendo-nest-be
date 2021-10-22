import { Controller, Get, Param, Patch, Query } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("")
  async findAll() {
    return await this.userService.findAll();
  }

  @Get("/search")
  async findSome(@Query() params: any) {
    const { id } = params;
    return this.userService.findByIds(id);
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

import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";
import { User } from "src/user/entities/user.entity";
export class CreateChatDto {
  @IsArray()
  @ApiProperty({ name: "users", type: "array" })
  readonly users: User[];
}

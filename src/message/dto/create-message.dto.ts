import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";
import { Chat } from "src/chat/entities/chat.entity";
import { User } from "src/user/entities/user.entity";

export class CreateMessageDto {
  @ApiProperty({ name: "user", type: User })
  @IsInt()
  readonly sender: User;
  @ApiProperty({ name: "chat", type: Chat })
  @IsInt()
  readonly chat: Chat;
  @IsString()
  @ApiProperty({ name: "content", type: "string" })
  readonly content: string;
}

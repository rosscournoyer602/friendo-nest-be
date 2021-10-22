import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { type } from "os";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findByIds(ids: any) {
    return await this.userRepository
      .createQueryBuilder("user")
      .where("user.id IN (:...ids)", { ids })
      .getMany();
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne(id);
  }

  async create(name: string) {
    return await this.userRepository.save({ name });
  }

  async update(id: number) {
    const existingUser = await this.userRepository.preload({ id });
    return await this.userRepository.save(existingUser);
  }
}

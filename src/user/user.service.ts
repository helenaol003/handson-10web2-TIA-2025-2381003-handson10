import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    save(user: User) {
        throw new Error("Method not implemented.");
    }
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async findByEmail(email: string): Promise<User | null> {
        const user = this.userRepository.findOne({where: { email } });
        return user;
    }

    async findByEmailOrUsername(email: string, username): Promise<User | null> {
        const user = this.userRepository.findOne({
            where: [{ email }, { username }],
        });
        return user;
    }

    async dave(user: User): Promise<User> {
        return this.userRepository.save(user);
    }
}
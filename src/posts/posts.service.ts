import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { GetUsersDto } from 'src/users/dto/get-users.dto';

@Injectable()
export class PostsService {
    constructor(
        private readonly userService: UsersService
    ) {}

    public findAll(userId?: string) {
        if (!userId) {
            return 'This action returns all posts';
        }
        const userDto: GetUsersDto = { id: Number(userId) };
        const user = this.userService.findByUserId(userDto);
        return `This action returns posts for user #${userId}`;
    }
}

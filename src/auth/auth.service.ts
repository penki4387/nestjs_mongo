import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { GetUsersDto } from 'src/users/dto/get-users.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))//circulary dependency
        private readonly userService: UsersService
    ) {}
    
    public login(email: string, password: string, id: string) {
        const userDto: GetUsersDto = { id: Number(id) };
        const user = this.userService.findByUserId(userDto);
        return user;
    }

    public isAuth() {
        return true;
    }
}

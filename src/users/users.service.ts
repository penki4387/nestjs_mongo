import { Injectable ,forwardRef,Inject} from '@nestjs/common';
import { GetUsersDto } from './dto/get-users.dto';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class UsersService { 
    constructor(
        @Inject(forwardRef(() => AuthService))//circular dependency
        private readonly authservice:AuthService){}
    public findAll() {
        const isAuth= this.authservice.isAuth()
        return [
            {
                firstName: "jan",
                email: "jan1@gmail.com",
                isAuth
            }
        ]
    }

    public findByUserId(
        getUserParamDto: GetUsersDto,
        limit: number = 10,
        page: number = 1) {
        return `This action returns user #${getUserParamDto.id} with limit ${limit} and page ${page}`;
    }

    public createUser(

    ){
        
    }
}

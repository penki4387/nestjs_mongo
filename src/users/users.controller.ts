import { Controller,Get,Post,Patch,Put,Delete,Query,Param,Body,Req,Headers,Ip,ParseIntPipe,DefaultValuePipe ,ValidationPipe} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { PatchUsersDto } from './dto/patch-user.dto';
import { UsersService } from './users.service';
//http://localhost:3000/users

@Controller('users')
export class UsersController {
    //injecting user service
constructor(
    private readonly userService:UsersService
){}
@Get()
public getUsers() {
    return this.userService.findAll();
}

@Get(':id')
public findByUserId(
    @Param() getUserParamDto: GetUsersDto,
    @Query('limit',new DefaultValuePipe('10')) limit?: number,
    @Query('page', new DefaultValuePipe('1')) page?: number
) {
    console.log('Limit:', limit);
    console.log('Page:', page);
    return this.userService.findByUserId(getUserParamDto,limit,page);
}

//params,query

// @Get('/:id')
// public getUsers(
//   @Param('id', ParseIntPipe) id: number,
//   @Query('limit') limit?: number,
//   @Query('page', ParseIntPipe) page?: number
// ) {
//     console.log("gerrrrrrrrrrrrr");
    
//     console.log(id,"=========")
//     return 'get request to user endpoint';
// }



// @Get('/:id/{:optional}')
// public getUsers(
//   @Param('id', ParseIntPipe) id: number | undefined, //ParseIntPipe is convert string to number and also validate integer
//   @Param('optional') optional?: number | undefined,
//   @Query('limit', ParseIntPipe) limit?: number,
// ) {
//   console.log(typeof id);
//   console.log(typeof limit);
//   console.log(optional);
//   if (optional) {
//     return `ID is ${id} and optional parameter is ${optional}`;
//   } else {
//     return `ID is ${id} and no optional parameter`;
//   }
// }


@Post()
public createUser(
    @Body() _createUserDto:CreateUserDto,//create dto
    @Headers() _headers:any, 
    @Ip()_ip:any
){
    return 'post request to user ednn point '
}

@Patch()
public patchUser(
    @Body()_patchUserDto:PatchUsersDto

){
    return 'patch request'
}
}

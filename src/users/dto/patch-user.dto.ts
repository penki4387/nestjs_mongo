import { CreateUserDto } from "./create-user.dto";
import { PartialType } from '@nestjs/mapped-types';

export class PatchUsersDto extends PartialType(CreateUserDto) {}
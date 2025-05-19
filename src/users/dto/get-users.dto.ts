import { IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class GetUsersDto {
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    id: number;
}

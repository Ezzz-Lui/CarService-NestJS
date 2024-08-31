import { IsOptional, IsString, IsUUID } from 'class-validator'
import { UUID } from 'crypto';
export class UpdateCarDTO {


    @IsString()
    @IsUUID()
    @IsOptional() //Decorador para asignar que el parametro es opcional, si viene debe de ser uuid o string.
    readonly id ?: UUID

    @IsString()
    @IsOptional()
    readonly brand ?: string;

    @IsString()
    @IsOptional()
    readonly model ?: string;

}
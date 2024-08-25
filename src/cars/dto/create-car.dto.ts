import { IsString } from 'class-validator'
export class CreatCarDTO {

    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;

}
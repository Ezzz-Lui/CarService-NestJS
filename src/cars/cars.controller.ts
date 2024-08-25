import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { error } from 'console';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}


    @Get()
    getAllBrandsCars(){
        return this.carsService.findAll()
    }


    //Validacion con pipes que el id sea un numero
    @Get(':id')
    getBrandCarById( @Param('id', ParseIntPipe ) id:number ){

       return this.carsService.findOneById( id )
    }

}

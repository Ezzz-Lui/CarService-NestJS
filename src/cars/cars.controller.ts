import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}


    @Get()
    getAllBrandsCars(){
        return this.carsService.findAll()
    }

    @Get(':id')
    getBrandCarById( @Param('id') id:string ){
       return this.carsService.findOneById( +id )
    }

}

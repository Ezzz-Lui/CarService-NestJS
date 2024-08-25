import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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


    //otros metodos HTPP: POST
    @Post()
    createCar( @Body() bodyRequest: any ){
        return bodyRequest;
    }

    @Patch(':id')
    updateCar( @Body() bodyUpdate: any ){
        return bodyUpdate;
    }


    //delete method
    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: number){
        return {
            method: 'delete',
            id
        }

    }

}

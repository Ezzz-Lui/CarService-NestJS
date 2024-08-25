import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { UUID } from 'crypto';
import { CreatCarDTO } from './dto/create-car.dto';


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
    getBrandCarById( @Param('id', ParseUUIDPipe) id:string ){

       return this.carsService.findOneById( id )
    }


    //otros metodos HTPP: POST
    @Post()
    @UsePipes( ValidationPipe )
    createCar( @Body() createDTO: CreatCarDTO ){
        return createDTO;
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

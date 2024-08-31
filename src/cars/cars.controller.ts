import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
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


    //Metodo HTPP: POST
    @Post()
    createCar( @Body() createDTO: CreatCarDTO ){
        return this.carsService.create( createDTO );
    }

    //Metodo HTPP: Update
    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe) id: number,
        @Body() createCarDTO: CreatCarDTO )
        {
        return createCarDTO;
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

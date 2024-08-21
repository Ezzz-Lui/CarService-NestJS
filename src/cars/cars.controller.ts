import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private carsBrandsCatalog = ['Toyota','Mazda','Jeep','Ferrari','Lambo'];

    @Get()
    getAllBrandsCars(){
        return this.carsBrandsCatalog
    }

    @Get(':id')
    getBrandCarById( @Param('id') id:string ){
        return this.carsBrandsCatalog[id]

    }

}

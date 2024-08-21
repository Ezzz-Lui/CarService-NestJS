import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private carsBrandsCatalog = ['Toyota','Mazda','Jeep','Ferrari','Lambo'];

    @Get()
    getAllBrandsCars(){
        return this.carsBrandsCatalog
    }

}

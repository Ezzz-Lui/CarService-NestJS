import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';


@Injectable()
export class SeedService {

  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService,
  ){}

  testingDB(){

    this.carsService.fillCarsWithSeedData( CARS_SEED )
    this.brandsService.showBrandsWithSeedData(BRANDS_SEED)

    return 'Seed loaded'
  }

}

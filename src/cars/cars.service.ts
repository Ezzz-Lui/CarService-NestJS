import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private CarsDB = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corola'
        },
        {
            id:2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id:3,
            brand:'Jeep',
            model: 'Cherokee'
        }
    ];

    findAll(){
        return this.CarsDB;
    }

    findOneById( id: number){
        const carId = this.CarsDB.find(cars => cars.id === id)
        return carId;

    }

}

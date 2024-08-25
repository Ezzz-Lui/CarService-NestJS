import { Injectable, NotFoundException } from '@nestjs/common';

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
        const carId = this.CarsDB.find(cars => cars.id === id);

        //Manejar excepciones con Exception Filter
        //Mandar un error 404 si el id del carro no existe en nuestra litsta
        if ( !carId ){
            throw new NotFoundException(`Car with id '${ id }' not found`);
        }

        return carId;

    }

}

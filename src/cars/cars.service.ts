import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { Car } from './interfaces/car.interface'
import { CreatCarDTO } from './dto/create-car.dto';

@Injectable()
export class CarsService {

    private CarsDB: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corola'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand:'Jeep',
            model: 'Cherokee'
        }
    ];

    findAll(){
        return this.CarsDB;
    }

    findOneById( id: string){
        const carId = this.CarsDB.find(cars => cars.id === id);

        //Manejar excepciones con Exception Filter
        //Mandar un error 404 si el id del carro no existe en nuestra litsta
        if ( !carId ) throw new NotFoundException(`Car with id '${ id }' not found`);
        

        return carId;

    }

    //crear nuevo carro por metodo post
    create( createCarDTO: CreatCarDTO){

        const carCreated: Car ={
            id: uuid(),
            ...createCarDTO // usando el operador spead "..."
        }
        this.CarsDB.push( carCreated );

        return carCreated;
    }



}

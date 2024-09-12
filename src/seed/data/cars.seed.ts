import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[]=[
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Ford',
        model: 'Mustang'
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Camaro'
    },
    {
        id: uuid(),
        brand: 'BMW',
        model: 'X5'
    }
];

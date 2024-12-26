import Car from "../models/Car";

export default interface GarageService {
    allCars(): Car[];

    addCar(car: Car): boolean;

    removeCar(regNumber: string): Car | null;

    findCarByRegNumber(regNumber: string): Car | null;

    findCarsByModel(model:string): Car[];

    findCarsByCompany(company:string): Car[];

    findCarsByColor(color:string): Car[];

    findCarsByEngine(min: number, max: number): Car[];


}
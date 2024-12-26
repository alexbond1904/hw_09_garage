import GarageService from "../services/GarageService";
import Car from "../models/Car";

export default class GarageController {
    private garageService: GarageService;

    constructor(garageService: GarageService) {
        this.garageService = garageService;
    }

    addCar(carDto:unknown){
        return this.garageService.addCar(carDto as Car);
    }

    removeCar(regNumber: string) {
        return this.garageService.removeCar(regNumber);
    }

    findCarByRegNumber(regNumber: string):Car|null {
        return this.garageService.findCarByRegNumber(regNumber);
    }

    findCarsByEngine(min: number, max: number):Car[] {
        return this.garageService.findCarsByEngine(min,max);
    }

    findCarsByColor(color:string):Car[] {
        return this.garageService.findCarsByColor(color);
    }

    findCarsByModel(model:string):Car[] {
        return this.garageService.findCarsByModel(model);
    }

    findCarsByCompany(company:string):Car[] {
        return this.garageService.findCarsByCompany(company);
    }

    allCars() {
        return this.garageService.allCars();
    }
}
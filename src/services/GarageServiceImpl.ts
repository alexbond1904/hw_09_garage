import GarageService from "./GarageService";
import Car from "../models/Car";
import GarageRepository from "../dao/GarageRepository";

export default class GarageServiceImpl implements GarageService {
    private garageRepository = new GarageRepository();

    allCars(): Car[] {
        return this.garageRepository.readAll();

    }

    addCar(car: Car): boolean {
        const cars = this.garageRepository.readAll();
        if (cars.find(c => c.regNumber.toLowerCase() === car.regNumber.toLowerCase())) {
            console.error(`Car with reqNumber ${car.regNumber} already exists`); //TODO 409 conflict
            return false;
        }
        cars.push(car);
        return this.garageRepository.writeAll(cars);
    }

    removeCar(regNumber: string): Car | null {
        const cars = this.garageRepository.readAll();
        const index = cars.findIndex(c => c.regNumber.toLowerCase() === regNumber.toLowerCase());
        if (index === -1) {
            return null;
        }
        //const removeCar = cars.splice(index,1)[0];
        const [removeCar] = cars.splice(index, 1);
        this.garageRepository.writeAll(cars);
        return removeCar;
    }

    findCarByRegNumber(regNumber: string): Car | null {
        const cars = this.garageRepository.readAll();
        return cars.find(c => c.regNumber.toLowerCase() === regNumber.toLowerCase()) || null;
    }

    findCarsByEngine(min: number, max: number): Car[] {
        const cars = this.garageRepository.readAll();
        return cars.filter(c => c.engine >= min && c.engine < max);
    }

    findCarsByColor(color: string): Car[] {
        const cars = this.garageRepository.readAll();
        return cars.filter(c => c.color === color);
    }

    findCarsByCompany(company: string): Car[] {
        const cars = this.garageRepository.readAll();
        return cars.filter(c => c.company === company);
    }

    findCarsByModel(model: string): Car[] {
        const cars = this.garageRepository.readAll();
        return cars.filter(c => c.model === model);
    }

}
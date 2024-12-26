import * as fs from "node:fs";
import Car from "../models/Car";

export default class GarageRepository {
    private readonly filePath: string;

    constructor(filePath = './db.txt') {
        this.filePath = filePath;
    }

    readAll(): Car[] {
        try {
            const res = fs.readFileSync(this.filePath,{encoding:'utf-8'});
            return JSON.parse(res) as Car[];
        } catch (err: any) {
            console.error(`Error -> ${err}`);
            return [];
        }
    }

    writeAll(cars: Car[]):boolean {
        try {
            const data = JSON.stringify(cars,null,2);
            fs.writeFileSync(this.filePath,data,{encoding:'utf-8'});
            return true;
        }catch (err){
            console.error(err)
            return false;
        }
    }
}
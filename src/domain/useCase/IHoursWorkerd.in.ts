import { Employee } from "../entities/Employee";

export interface IHoursWorkedIn{
    exec(filename:string):Employee[];
}
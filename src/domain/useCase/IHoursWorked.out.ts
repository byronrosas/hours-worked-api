import { Employee } from "../entities/Employee";

export interface IHoursWorkedOut{
    present(outputData:Employee[]):void;  
    setInput(data:any):void;  
}
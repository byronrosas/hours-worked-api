import { IHoursWorkedIn } from './../useCase/IHoursWorkerd.in';
export class HoursWorkedController{    
    constructor(private readonly cu:IHoursWorkedIn){        
    }
    
    exec(inputData:string){
        this.cu.exec(inputData);
    }
}
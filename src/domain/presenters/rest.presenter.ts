import { ServerResponse } from 'http';
import { Employee } from '../entities/Employee';
import { IHoursWorkedOut } from './../useCase/IHoursWorked.out';
export class RestPresenter implements IHoursWorkedOut{    
    private _response:ServerResponse;
    present(outputData:Employee[]) {
        
        this._response.writeHead(200, {"Content-Type": "application/json"});        
        this._response.end(this.generateJSON(outputData));
    }

    private generateJSON(outputData:Employee[]){
        let employeesJSON = outputData.map((employee:Employee)=>{
            let o = {
                name:employee.getName(),
                pay:employee.getTotalPay()
            }
            return o;
        });

        return JSON.stringify(employeesJSON);
    }

    setInput(response:ServerResponse){
        this._response = response;
    }
}
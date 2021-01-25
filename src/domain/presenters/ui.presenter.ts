import { ServerResponse } from 'http';
import { Employee } from '../entities/Employee';
import { IHoursWorkedOut } from './../useCase/IHoursWorked.out';
export class UIPresenter implements IHoursWorkedOut{    
    private _response:ServerResponse;
    present(outputData:Employee[]) {                
        this._response.write(this.generateHTML(outputData));        
        this._response.end();
    }    

    private generateHTML(outputData:Employee[]):string{
        let htmlContent = `
            <h1>ACME - employee</h1>
            <hr/>
            <ul>
        `;
        outputData.forEach((employee:Employee)=>{
            htmlContent+=`
                <li>
                    <h4>
                    The amount to pay <strong>${employee.getName()}</strong> is:
                    <strong><i>${employee.getTotalPay()} USD</i></strong>
                    </h4>                                                                
                </li>
            `;
        });
        htmlContent+=`</ul>`;

        return htmlContent;
    }

    setInput(response:ServerResponse){
        this._response = response;
    }
}
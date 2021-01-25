import { HoursWorkedCli } from './models/HoursWorked.cli';
import { IHoursWorkedOut } from './../useCase/IHoursWorked.out';
import { Employee } from '../entities/Employee';
export class CliPresenter implements IHoursWorkedOut{

    present(outputData: Employee[]) {
        console.log(this.generateCLI(outputData));
    }

    private generateCLI(outputData:Employee[]){
        let cliContent = `
            **************ACME - employee***************
            ********************************************\n
        `;

        outputData.forEach((employee:Employee)=>{
            cliContent+=`
            \t\t => The amount to pay ${employee.getName()} is: ${employee.getTotalPay()} USD \n 
            `;
        });

        return cliContent;
    }

    setInput(data: any): void {
        throw new Error('Method not implemented.');
    }
}
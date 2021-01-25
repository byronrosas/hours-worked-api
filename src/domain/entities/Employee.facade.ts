import { DataTablePayHourFormatter } from './formatters/DataTablePayHour.formatter';
import { DataPaymentFileFormatter } from './formatters/DataPaymentFile.formatter';
import { Payment } from './Payment';
import { Employee } from './Employee';
import DATA_PAY_HOUR from '../data/dataTablaPayHour';
export class EmployeeFacade{
    constructor(private readonly paymentObj:Payment){}
    paymentProcess(employeeData:string):Employee | null{
        let toReturn:Employee | null = null;
        //data employee formatter
        let formatter = new DataPaymentFileFormatter(employeeData);                
        //payment employee
        let employee = Employee.fromFile(formatter);
        employee.setTotalPay(this.paymentObj);
        
        toReturn = employee;

        return toReturn;
    }
}
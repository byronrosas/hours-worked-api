import { EmployeeFacade } from './../entities/Employee.facade';
import { IHoursWorkedOut } from './IHoursWorked.out';
import { IFileRepository } from '../repositories/IFile.repository';
import { IHoursWorkedIn } from './IHoursWorkerd.in';
import { Employee } from '../entities/Employee';
import { DataTablePayHourFormatter } from '../entities/formatters/DataTablePayHour.formatter';
import DATA_PAY_HOUR from '../data/dataTablaPayHour';
import { Payment } from '../entities/Payment';

export class HoursWorkedCU implements IHoursWorkedIn{
    constructor(
        private readonly fileRepository:IFileRepository,
        private readonly presenter:IHoursWorkedOut
    ){}
    exec(filename:string):Employee[] {
        console.log("use case => Hours Worked");
        //get file content
        let fileContent = this.fileRepository.read(filename);  
                            
        //data payments table formatter
        let formatterData = new DataTablePayHourFormatter(DATA_PAY_HOUR);
        //payment obj
        let payment = new Payment(formatterData);
        let arrFileContent = fileContent.split("\n");
        let arrEmployees:Employee[] = [];
        arrEmployees = arrFileContent.map((contentEmployee:string)=>{
            let employeeFacade = new EmployeeFacade(payment);
            let employee:Employee = <Employee>employeeFacade.paymentProcess(contentEmployee);
            return employee;
        });        
        this.presenter.present(arrEmployees);
        return arrEmployees;
    }    
}
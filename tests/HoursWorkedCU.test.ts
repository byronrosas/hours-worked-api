import { HoursWorkedCU } from './../src/domain/useCase/HoursWorked.cu';
import { IHoursWorkedIn } from './../src/domain/useCase/IHoursWorkerd.in';
import { CliPresenter } from './../src/domain/presenters/cli.presenter';
import { FileRepository } from './../src/detail/repositories/File.repository';
import { expect } from 'chai';
import { Employee } from '../src/domain/entities/Employee';
import { IFileRepository } from '../src/domain/repositories/IFile.repository';
import { IHoursWorkedOut } from '../src/domain/useCase/IHoursWorked.out';


//repositories
let fileRepository:IFileRepository = new FileRepository();

//presenter
let cliPresenter:IHoursWorkedOut = new CliPresenter();
//use case
let useCaseCLI:IHoursWorkedIn = new HoursWorkedCU(fileRepository,cliPresenter);    

describe('HoursWorkedCU-class', function () {
    it('should calculate pay for employees', function () {
      
        // 1. ARRANGE
        let correctPay = [{
            name:"RENE",
            pay:215
        },
        {
            name:"ASTRID",
            pay:85
        },
        {
            name:"BYRON",
            pay:195
        },
        {
            name:"ESTEPHANY",
            pay:225
        },
        {
            name:"DAVID",
            pay:590
        }];
    
        // 2. ACT
        let arrEmployees:Employee[] = useCaseCLI.exec("test.txt");
        
        let payByEmployee = arrEmployees.map((employee:Employee)=>{
            return {
                name:employee.getName(),
                pay:employee.getTotalPay()
            };
        });
    
        // 3. ASSERT
        expect(correctPay).to.be.eql(payByEmployee);
    
      });
    

  });
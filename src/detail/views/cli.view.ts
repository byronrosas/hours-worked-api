import { HoursWorkedController } from "../../domain/controllers/HoursWorked.controller";
import { CliPresenter } from "../../domain/presenters/cli.presenter";
import { IFileRepository } from "../../domain/repositories/IFile.repository";
import { HoursWorkedCU } from "../../domain/useCase/HoursWorked.cu";
import { IHoursWorkedOut } from "../../domain/useCase/IHoursWorked.out";
import { IHoursWorkedIn } from "../../domain/useCase/IHoursWorkerd.in";
import { FileRepository } from "../repositories/File.repository";

//repositories
let fileRepository:IFileRepository = new FileRepository();
//presenter
let cliPresenter:IHoursWorkedOut = new CliPresenter();

//use case
let useCaseCLI:IHoursWorkedIn = new HoursWorkedCU(fileRepository,cliPresenter);    
//controller
let hoursWorkedControllerRest:HoursWorkedController = new HoursWorkedController(useCaseCLI);    

export function CLIView(){
    return (filename:string)=>{
        hoursWorkedControllerRest.exec(filename);
    }
}
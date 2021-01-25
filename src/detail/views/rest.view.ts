import { UIPresenter } from './../../domain/presenters/ui.presenter';
import http, { ServerResponse, IncomingMessage } from 'http';
import { HoursWorkedController } from '../../domain/controllers/HoursWorked.controller';
import { RestPresenter } from '../../domain/presenters/rest.presenter';
import { IFileRepository } from '../../domain/repositories/IFile.repository';
import { HoursWorkedCU } from '../../domain/useCase/HoursWorked.cu';
import { IHoursWorkedOut } from '../../domain/useCase/IHoursWorked.out';
import { IHoursWorkedIn } from '../../domain/useCase/IHoursWorkerd.in';
import { FileRepository } from '../repositories/File.repository';


//repositories
let fileRepository:IFileRepository = new FileRepository();
//presenter
let restPresenter:IHoursWorkedOut = new RestPresenter();
let uiPresenter:IHoursWorkedOut = new UIPresenter();
//use case
let useCaseREST:IHoursWorkedIn = new HoursWorkedCU(fileRepository,restPresenter);
let useCaseUI:IHoursWorkedIn = new HoursWorkedCU(fileRepository,uiPresenter);
//controller
let hoursWorkedControllerRest:HoursWorkedController = new HoursWorkedController(useCaseREST);
let hoursWorkedControllerUI:HoursWorkedController = new HoursWorkedController(useCaseUI);

const PORT = 3000;
export function  RestView(){    
    const server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{        

        req.on('error', err => {
            console.error(err);
            // Handle error...
            res.statusCode = 400;
            res.end('400: Bad Request');
            return;
        });

        var URL = req.url;
        if(URL!=null){
            if(URL === "/"){
                res.write("ACME API V1");
                res.end();                            
            }else{
                
                //get file name from URL
                let partialURL = URL.split("/");
                if(partialURL[1]=="api"){                                                                        
                    //set object res                
                    restPresenter.setInput(res);
                    //controller
                    hoursWorkedControllerRest.exec(partialURL[2]);
                }else{
                    //set object res                
                    uiPresenter.setInput(res);
                    //controller
                    hoursWorkedControllerUI.exec(partialURL[1]);
                }                
            }
        }        
    });

    server.listen(PORT, () => {
        console.log(`Server listening by ${PORT}`);
    });
}
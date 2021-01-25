import { IDataPaymentFormatter } from './IDataPayment.formatter';
export class DataPaymentFileFormatter implements IDataPaymentFormatter<string,Map<string,number[]>>{
    data: string; 
    constructor(data:string){
        this.data = data;
    }   
    
    getData(): Map<string, number[]>{ 
        let toReturn:Map<string, number[]> = new Map<string,number[]>();
        
        //divide the name of the rest
        let arrInfo = this.data.split("=");
        
        //divide the times
        let arrHours = arrInfo[1].split(",");
        
        arrHours.forEach((el:string)=>{            
            //get day string
            let day =el.substr(0,2);
            //get time range time init and time end
            let arrRangeTime = el.substring(2).split("-");
            //convert time init to seconds
            let timeInit = new Date(`01-01-2020 ${arrRangeTime[0]}`).getTime();
            //convert time end to seconds
            let timeEnd = new Date(`01-01-2020 ${arrRangeTime[1]}`).getTime();       

            toReturn.set(day,[timeInit,timeEnd]);   
        });
        
        return toReturn;       
    }

}
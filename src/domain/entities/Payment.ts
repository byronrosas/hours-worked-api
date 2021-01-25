import { IPayment } from './Employee';
import { IDataPaymentFormatter } from './formatters/IDataPayment.formatter';
export class Payment implements IPayment{    
    constructor(private readonly dataFormatter:IDataPaymentFormatter<Map<string,Array<string[] | number[]>>,Map<string, Array<number[]>>>){}
    public calculatePayment(hoursWorked:Map<string,number[]>):number{                
        //data hours-day-pay
        let dataHourPay = this.dataFormatter.getData();
        let toReturn:number = 0;
        let weekendDays:string[] = ["SA","SU"];        
        hoursWorked.forEach((timeArr:number[],day:string)=>{
            
            //verify weekend day
            let isWeekend:boolean = weekendDays.includes(day);
            //ranges time 
            let timeRanges = <number[][]>dataHourPay.get("time");
            //pay for each range for normal days
            let normalDaysPay = <number[][]>dataHourPay.get("N");          
            //pay for each range for weekend days
            let weekendDaysPay = <number[][]>dataHourPay.get("W");
                        
            let isRangeInit:boolean = false;                     
            //for each range time   
            for (var [index, [timeInit,timeEnd]] of timeRanges.entries()) {                
                let payHour = 0;
                //pay hour for weekend and normal days
                if(isWeekend){
                    payHour = weekendDaysPay[index][0];
              
                }else{                        
                    payHour = normalDaysPay[index][0];

                }    
                let limSup  = !new Date(timeEnd).getHours() ? 24 :  new Date(timeEnd).getHours();
                let limInf = !new Date(timeInit).getHours() ? 24 :  new Date(timeInit).getHours();
                if(timeArr[0]>=timeInit && timeArr[0]<=timeEnd){
                    isRangeInit=true;                    
                    limInf = !new Date(timeArr[0]).getHours() ? 24 : new Date(timeArr[0]).getHours();                                
                }
                let isRangeEnd:boolean = timeArr[1]>=timeInit && timeArr[1]<=timeEnd;                
                
                if(isRangeEnd){
                    limSup = !new Date(timeArr[1]).getHours() ? 24 : new Date(timeArr[1]).getHours();
                }                 
                                
                //hours
                let hoursByRange = Math.abs(limSup - limInf);                                
                
                if(isRangeInit){                    
                    toReturn+=payHour*hoursByRange;
                }                
              
                if(isRangeEnd){                     
                    break;   
                }     
            }                      

        });        
        return toReturn;
    }
}
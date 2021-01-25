import { IDataPaymentFormatter } from './IDataPayment.formatter';
export class DataTablePayHourFormatter implements IDataPaymentFormatter<Map<string,Array<string[] | number[]>>,Map<string, Array<number[]>>>{
    data: Map<string,Array<string[] | number[]>>; 
    
    constructor(data:Map<string,Array<string[] | number[]>>){
        this.data = data;
    }   
    
    getData(): Map<string, Array<number[]>>{ 
        let toReturn:Map<string,Array<number[]>> = new Map<string,Array<number[]>>();                           
        //get time
        let timeRange = this.data.get("time");
        
        let times:Array<number[]> = [];
        //convert time to unix
        timeRange?.forEach((values:string[] | number[])=>{
            let timeInit = new Date(`01-01-2020 ${values[0]}`).getTime();
            let timeEnd = new Date(`01-01-2020 ${values[1]}`).getTime();
            let arr = [timeInit,timeEnd]
            times.push(arr); 
        });
        
        //assign range unix times 
        toReturn.set("time",times);        
        if(this.data.get("N")!=undefined && this.data.get("W")!=undefined){
            toReturn.set("N",<number[][]>this.data.get("N"));
            toReturn.set("W",<number[][]>this.data.get("W"))
        }        

        return toReturn;       
    }

}
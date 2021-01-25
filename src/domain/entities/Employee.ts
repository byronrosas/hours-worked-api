import { IDataPaymentFormatter } from './formatters/IDataPayment.formatter';
import { Payment } from './Payment';
export interface IPayment{
    calculatePayment(hoursWorked:Map<string,number[]>):number;
}
export class Employee{
    private _name:string;    
    private hoursWorked:Map<string,number[]>; //map<"MO",[hour init, hour end]>
    private _totalPay:number;

    constructor(){}

    public static fromFile(formatter:IDataPaymentFormatter<string,Map<string,number[]>>):Employee{
        // create new employee
        let o = new Employee();         
        //divide the name of the rest
        let arrInfo = formatter.data.split("=");        
                                
        o._name = arrInfo[0];
        o.hoursWorked = formatter.getData();   
        
        
        return o;
    }

    public setTotalPay(payment:IPayment):void{
        this._totalPay = payment.calculatePayment(this.hoursWorked);
    }

    public getTotalPay():number{
        return this._totalPay;
    }

    public getName():string{
        return this._name;
    }

}
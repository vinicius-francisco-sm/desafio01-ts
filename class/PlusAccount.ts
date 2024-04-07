import { DioAccount } from "./DioAccount";

export class PlusAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
          this.balance += value + 10;
          console.log('Valor depositado com sucesso');
          console.log('Saldo atual:', this.balance);
        }
      }
}
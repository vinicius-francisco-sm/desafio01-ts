import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log('Emprestimo realizado com sucesso');
      console.log('Saldo atual:', this.balance);
    }
  }
}

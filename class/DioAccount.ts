export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log('Valor depositado com sucesso');
      console.log('Saldo atual:', this.balance);
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if(this.validateBalance(value)){
        this.balance -= value;
        console.log('Saque realizado com sucesso');
        console.log('Saldo atual:', this.balance);
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance);
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida')
  }

  private validateBalance = (value: number): boolean => {
    if(this.balance >= value){
      return true;
    }

    throw new Error('Saldo insuficiente');
  }
}

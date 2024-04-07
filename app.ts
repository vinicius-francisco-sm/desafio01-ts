import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1,'Pedrinho', 1);
console.log(peopleAccount);
console.log(peopleAccount.getName());
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('Empresa top', 2);
console.log(companyAccount);
console.log(companyAccount.getName());
companyAccount.deposit(100);
companyAccount.withdraw(50);
companyAccount.getBalance();
companyAccount.getLoan(100);

const plusAccount: PlusAccount = new PlusAccount('Rogerinho', 3);
console.log(plusAccount);
console.log(plusAccount.getName());
plusAccount.deposit(100);
plusAccount.withdraw(50);
plusAccount.getBalance();
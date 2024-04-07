import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1,'Pedrinho', 1);
// console.log(peopleAccount);
// peopleAccount.deposit(20);
// peopleAccount.withdraw(21);
// console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('Empresa top', 2);
// console.log(companyAccount);
// companyAccount.getLoan(20);
// console.log(companyAccount);

const plusAccount: PlusAccount = new PlusAccount('Rogerinho', 3);
console.log(plusAccount);
plusAccount.deposit(100);
console.log(plusAccount);
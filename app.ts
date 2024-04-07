import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1,'Pedrinho', 1);
// console.log(peopleAccount);
// peopleAccount.deposit(20);
// peopleAccount.withdraw(21);
// console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount('Empresa top', 2);
console.log(companyAccount);
companyAccount.getLoan(20);
console.log(companyAccount);
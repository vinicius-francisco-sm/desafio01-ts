import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1,'Pedrinho', 1);
console.log(peopleAccount);
peopleAccount.deposit(20);
peopleAccount.withdraw(21);
console.log(peopleAccount);
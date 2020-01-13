'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(accountNumber: number): any[] {
    for (let account of accounts) {
      if (accountNumber === account.accountNumber) {
        return [account.clientName, account.balance];
      }
    }
  }
console.log(getNameAndBalance(11234543));
console.log(getNameAndBalance(23456311));
console.log(getNameAndBalance(43546731));

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//
checkAccountNumber: (x: number): any => (
    accounts.find(data => data.)
)

                      //eredeti tömb
function transferMoney(accounts, originAccount: number, destinationAccount: number, amount: number) {
    
    for (let i: number = 0; i < accounts.length; i++) {
  
        if (originAccount === accounts[i].accountNumber) {
          accounts[i].balance -= amount;
        }
  
        if (destinationAccount === accounts[i].accountNumber) {
          accounts[i].balance += amount;
        }
    }
return accounts;
}
                                    //originaccount     //amount   
console.log(transferMoney(accounts, 43546731, 11234543, 50000000000));
                                              //destinationaccunt
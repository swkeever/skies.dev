/* eslint-disable no-underscore-dangle */
// account.ts
export default class Account {
  private _balance: number;

  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw Error('initial balance should be >= 0');
    }
    this._balance = initialBalance;
  }

  deposit(amount: number): number {
    if (amount <= 0) {
      throw Error('deposit amount must be > 0');
    }
    this._balance += amount;
    return this._balance;
  }

  withdraw(amount: number): number {
    if (amount <= 0) {
      throw Error('withdraw amount must be > 0');
    }
    if (amount > this._balance) {
      throw Error('amount exceeds balance');
    }
    this._balance -= amount;
    return this._balance;
  }

  get balance(): number {
    return this._balance;
  }
}

// __tests__/account.test.ts
import Account from '../account';

test('should not be able to have a negative initial balance', () => {
  expect(() => new Account(-1)).toThrow();
  expect(() => new Account(Number.MIN_SAFE_INTEGER)).toThrow();
});

test('should be able to have a positive initial balance', () => {
  expect(new Account()).toBeTruthy();
  expect(new Account(Number.MAX_SAFE_INTEGER)).toBeTruthy();
});

test('should be able to return the account balance', () => {
  expect(new Account(1).balance).toBe(1);
  expect(new Account(Number.MAX_SAFE_INTEGER).balance).toBe(
    Number.MAX_SAFE_INTEGER,
  );
});

test('should be able to deposit any amount > 0', () => {
  const account = new Account();
  account.deposit(1);
  expect(account.balance).toBe(1);
  account.deposit(Number.MAX_SAFE_INTEGER - 1);
  expect(account.balance).toBe(Number.MAX_SAFE_INTEGER);
});

test('should not be able to deposit any amount <= 0', () => {
  const account = new Account();
  expect(() => account.deposit(0)).toThrow();
  expect(() => account.deposit(-1)).toThrow();
  expect(() => account.deposit(Number.MIN_SAFE_INTEGER)).toThrow();
});

test('should return new balance after depositing', () => {
  const account = new Account();
  for (let i = 1; i <= 10; i += 1) {
    expect(account.deposit(1)).toBe(i);
  }
});

test('should not be able to withdraw any amount <= 0', () => {
  const account = new Account();
  expect(() => account.withdraw(0)).toThrow();
  expect(() => account.withdraw(-1)).toThrow();
  expect(() => account.withdraw(Number.MIN_SAFE_INTEGER)).toThrow();
});

test('should be able to withdraw any amount > 0 given funds are available', () => {
  const account = new Account(Number.MAX_SAFE_INTEGER);
  account.withdraw(1);
  expect(account.balance).toBe(Number.MAX_SAFE_INTEGER - 1);
  account.withdraw(account.balance);
  expect(account.balance).toBe(0);
});

test('should not be able to withdraw an amount if not enough funds are available', () => {
  const account = new Account();
  expect(() => account.withdraw(account.balance + 1)).toThrow();
});

test('should return the new balance after withdrawal', () => {
  const account = new Account(10);
  for (let i = 1; i <= 10; i += 1) {
    expect(account.withdraw(1)).toBe(10 - i);
  }
});

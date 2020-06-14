import { toHandle } from '../strings';

test('empty string', () => {
  expect(toHandle('')).toBe('');
});

test('removes whitespace', () => {
  expect(toHandle('Napoleon Hill')).toBe('napoleon.hill');
});

test('trims whitespace', () => {
  expect(toHandle(' Albert Einstein')).toBe('albert.einstein');
});

test('handles initials', () => {
  expect(toHandle('Booker T. Washington')).toBe('booker.t.washington');
});

test('handles multiple initials', () => {
  expect(toHandle('J. K. Rowling')).toBe('j.k.rowling');
});

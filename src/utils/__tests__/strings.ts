import { toHandle } from '../strings';

test('empty string', () => {
  expect(toHandle('')).toBe('');
});

test('removes whitespace', () => {
  expect(toHandle('Napoleon Hill')).toBe('napoleon.hill');
});

test('handles initials', () => {
  expect(toHandle('Booker T. Washington')).toBe('booker.t.washington');
});

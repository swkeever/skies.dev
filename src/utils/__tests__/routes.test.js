const routes = require('../routes');

test('equals with trailing slash', () => {
  const a = '/blog';
  const b = '/blog/';
  expect(routes.equals(a, b)).toBe(true);
});

import { isActive } from '../Nav';
import routes from '../../utils/routes';

describe('blog path', () => {
  const blogPath = `${routes.blog}/personal-statement`;

  test('should be active', () => {
    expect(isActive(blogPath, routes.blog)).toBeTruthy();
  });

  test('should not be active', () => {
    expect(isActive(blogPath, routes.contact)).toBeFalsy();
  });
});

test('ignore trailing slash', () => {
  expect(isActive(`${routes.resume}/`, routes.resume)).toBeTruthy();
});

describe('home page', () => {
  test('active', () => {
    expect(isActive(routes.home, routes.home)).toBeTruthy();
  });

  test('not active', () => {
    expect(isActive(routes.blog, routes.home)).toBeFalsy();
    expect(isActive(routes.home, routes.blog)).toBeFalsy();
  });
});

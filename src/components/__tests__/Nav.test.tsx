import { isActive } from '../Nav';
import routes from '../../utils/routes';

describe('blog path', () => {
  const blogPath = `${routes.blogs}/personal-statement`;

  test('should be active', () => {
    expect(isActive(blogPath, routes.blogs)).toBeTruthy();
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
    expect(isActive(routes.blogs, routes.home)).toBeFalsy();
    expect(isActive(routes.home, routes.blogs)).toBeFalsy();
  });
});

import { isActive } from '../Nav';
import routes from '../../utils/routes';

describe('blog path', () => {
  const blogPath = `${routes.learn}/personal-statement`;

  test('should be active', () => {
    expect(isActive(blogPath, routes.learn)).toBeTruthy();
  });

  test('should not be active', () => {
    expect(isActive(blogPath, routes.contact)).toBeFalsy();
  });
});

test('ignore trailing slash', () => {
  expect(isActive(`${routes.about}/`, routes.about)).toBeTruthy();
});

describe('home page', () => {
  test('active', () => {
    expect(isActive(routes.home, routes.home)).toBeTruthy();
  });

  test('not active', () => {
    expect(isActive(routes.learn, routes.home)).toBeFalsy();
    expect(isActive(routes.home, routes.blogs)).toBeFalsy();
  });
});

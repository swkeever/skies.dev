import { isActive } from '../index';
import routes from '../../../../../../utils/routes';

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
  expect(isActive(`${routes.contact}/`, routes.contact)).toBeTruthy();
});

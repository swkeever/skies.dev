import classNames from '../class-names';

test('should aggregate class names', () => {
  const res = classNames('bg-red-500', 'hover:bg-red-600');

  expect(res).toBe('bg-red-500 hover:bg-red-600');
});

// Note: classes are minified at build time.

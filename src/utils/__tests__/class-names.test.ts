import tw from '../tailwind';

test('should aggregate class names', () => {
  const res = tw('bg-red-500', 'hover:bg-red-600');

  expect(res).toBe('bg-red-500 hover:bg-red-600');
});

// Note: classes are minified at build time.

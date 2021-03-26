import tw from '@utils/tailwind';

const grads = [
  'from-red-500 to-yellow-400',
  'from-purple-400 to-pink-500',
  'from-green-400 to-blue-500',
];

const globalStyles = {
  colors: {
    primary: '#4299E1',
  },
  randomGradient: (n: number) => grads[n % grads.length],
  gradientText: 'bg-clip-text text-transparent bg-gradient-to-br',
  transitions: 'transition-all duration-200 ease-in-out',
  navbar: {
    height: 'h-20',
  },
  mdx: {
    margin: 'mb-5 lg:mb-10',
  },
  onlySmallScreens: tw('lg:hidden'),
  outline:
    'outline-none focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50',
  fadeTransition: {
    enter: 'transition-opacity duration-200',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition-opacity duration-200',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  blogGrid: tw('grid', 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4', 'gap-6'),
};

export default globalStyles;

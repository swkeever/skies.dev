import tw from '@utils/tailwind';

const globalStyles = {
  colors: {
    primary: '#4299E1',
  },
  transitions: 'transition-all duration-200 ease-in-out',
  navbar: {
    height: 'h-20',
  },
  mdx: {
    margin: 'mb-5 lg:mb-10',
  },
  onlySmallScreens: tw('lg:hidden'),
  outline:
    'focus:outline-none active:shadow-outline-blue focus:shadow-outline-blue',
  fadeTransition: {
    enter: 'transition-opacity duration-200',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition-opacity duration-200',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
  blogGrid: tw(
    'grid',
    'grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6',
    'gap-6',
  ),
};

export default globalStyles;

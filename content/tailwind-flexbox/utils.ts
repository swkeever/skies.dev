import globalStyles from '../../src/styles';
import tw from '../../src/utils/tailwind';

export const styles = {
  container: 'my-8 lg:my-12 p-2 bg-neutralBgSoft rounded-md shadow-inner',
  li: tw(
    'rounded-md border border-neutralBgSofter p-3 text-onPrimaryBg bg-primaryBgSoft',
    globalStyles.transitions,
  ),
};
export const threeItems = ['Uno', 'Dos', 'Tres'];
export const fiveItems = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];

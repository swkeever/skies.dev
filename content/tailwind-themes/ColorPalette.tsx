import React from 'react';
import globalStyles from '../../src/styles';
import tw from '../../src/utils/tailwind';

const classNames = [
  'bg-primaryBg text-onPrimaryBgSofter',
  'bg-primaryBgSoft text-onPrimaryBgSoft',
  'bg-primaryBgSofter text-onPrimaryBg',
  'bg-primarySoft text-white',
  'bg-primary text-white',
  'bg-primaryBold text-white',
  'bg-neutralBg text-onNeutralBgSofter',
  'bg-neutralBgSoft text-onNeutralBgSoft',
  'bg-neutralBgSofter text-onNeutralBg',
  'bg-neutralSoft text-onNeutralBg',
  'bg-neutral text-neutralBg',
  'bg-neutralBold text-neutralBg',
];
export default function ColorPalette() {
  return (
    <ul
      className={tw(
        'grid grid-cols-2 md:grid-cols-3 gap-5',
        globalStyles.mdx.margin,
      )}
    >
      {classNames.map((className) => (
        <li
          key={className}
          className={tw(
            className,
            'rounded-md',
            'p-4',
            'text-xs md:text-sm font-mono font-medium',
            'shadow-lg',
            globalStyles.transitions,
          )}
        >
          {className.split(' ').map((cn) => (
            <div>{cn}</div>
          ))}
        </li>
      ))}
    </ul>
  );
}

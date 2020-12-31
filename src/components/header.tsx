import React from 'react';
import { Link } from '@reach/router';
import globalStyles from '@styles/index';
import tw from '@utils/tailwind';
import ThemeToggle from './theme-toggle';
import routes from '../utils/routes';
import Logo from '../../assets/logo.svg';

interface PropTypes {
  type?: 'primary' | 'neutral';
}

export default function Header({ type = 'primary' }: PropTypes) {
  const styles = {
    primary: {
      bg: 'bg-primary',
      logo: 'text-white',
    },
    neutral: {
      bg: 'bg-neutralBg',
      logo: 'text-primaryBold hover:text-primary',
    },
  };

  const colors = styles[type];

  return (
    <header
      className={tw(
        colors.bg,
        'flex justify-between',
        'p-2',
        'z-40',
        globalStyles.transitions,
      )}
    >
      <Link
        to={routes.blog}
        className={tw(
          globalStyles.transitions,
          globalStyles.outline,
          'rounded',
        )}
      >
        <Logo
          className={tw(
            'w-32 h-auto',
            colors.logo,
            globalStyles.transitions,
            'fill-current',
          )}
        />
      </Link>
      <div className={tw('flex')}>
        <ThemeToggle />
      </div>
    </header>
  );
}

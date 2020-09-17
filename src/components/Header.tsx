import React from 'react';
import { Link } from '@reach/router';
import globalStyles from '@styles/index';
import tw from '@utils/tailwind';
import ThemeToggle from './ThemeToggle';
import Nav from './Nav';
import routes from '../utils/routes';
import Logo from '../../assets/logo.svg';

export default function Header() {
  const styles = {
    primary: {
      bg: 'bg-neutralBg lg:bg-primary',
      logo: 'text-primaryBold lg:text-onPrimary',
    },
    neutral: {
      bg: 'bg-neutralBg shadow-sm',
      logo: 'text-primaryBold',
    },
  };

  const colors = styles.primary;

  return (
    <>
      <header
        className={tw(
          'fixed',
          'flex-shrink-0',
          'bottom-0 left-0 top-auto right-auto',
          'lg:top-0 lg:bottom-auto',
          'border-t border-neutralBgSofter',
          'w-screen',
          'z-40',
          'safe-bottom',
          colors.bg,
          // 'shadow-sm',
        )}
      >
        <div
          className={tw(
            'lg:h-12',
            'flex items-center',
            globalStyles.navbar.height,
          )}
        >
          <Link
            to={routes.home}
            className={tw(
              'hidden',
              'lg:flex',
              'h-full',
              'mx-3',
              globalStyles.transitions,
            )}
          >
            <Logo className={tw('w-32 h-auto', colors.logo, 'fill-current')} />
          </Link>
          <Nav />
        </div>
      </header>
      <ThemeToggle />
    </>
  );
}

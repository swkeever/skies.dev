import React from 'react';
import { Link } from '@reach/router';
import globalStyles from '@styles/index';
import classNames from '@utils/class-names';
import ThemeToggle from './ThemeToggle';
import Nav from './Nav';
import routes from '../utils/routes';
import Logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <>
      <header
        style={{
          paddingBottom: 'env(safe-area-inset-bottom)',
          // paddingTop: 'env(safe-area-inset-top)',
        }}
        className={classNames(
          'fixed',
          'bottom-0 left-0 top-auto right-auto',
          'lg:top-0 lg:bottom-auto',
          'w-screen',
          'z-40',
          'bg-neutralBg',
          'shadow-sm',
        )}
      >
        <div
          className={`flex ${globalStyles.navbar.height} lg:h-12 items-center`}
        >
          <Link
            to={routes.home}
            className={`
          hidden
          lg:flex
              
          h-full 
          mx-3
          ${globalStyles.transitions}
          
        `}
          >
            <Logo className="w-32 h-auto text-primaryBold fill-current" />
          </Link>
          <Nav />
        </div>
      </header>
      <ThemeToggle />
    </>
  );
}

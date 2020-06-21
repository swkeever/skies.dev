import React from 'react';
import { Link } from '@reach/router';
import ThemeToggle from './ThemeToggle';
import Nav from './Nav';
import routes from '../utils/routes';

type HeaderProps = {
  lightTheme: boolean;
  setLightTheme: Function;
};

export default function Header({ lightTheme, setLightTheme }: HeaderProps) {
  return (
    <header>
      <Link
        to={routes.home}
        className={`
          z-50
          hidden
          inline
          lg:block
          lg:fixed
          top-0
          left-0
          ml-4
          flex-none
          tracking-wider
          mt-3
          text-lg
          text-onPrimary
          hover:text-onPrimary
        `}
      >
        <span className="mr-1 " role="img" aria-label="Man technologist">
          👨‍💻
        </span>
        skies.dev
      </Link>
      <Nav />
      <ThemeToggle lightTheme={lightTheme} setLightTheme={setLightTheme} />
    </header>
  );
}

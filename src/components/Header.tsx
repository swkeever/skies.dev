import React from 'react';
import { Link } from '@reach/router';
import ThemeToggle from './ThemeToggle';
import Nav from './Nav';
import routes from '../utils/routes';
import Logo from '../../assets/logo.svg';

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
          ml-3
          flex-none
          mt-3
        `}
      >
        <Logo className="w-32 h-auto" />
      </Link>
      <Nav />
      <ThemeToggle lightTheme={lightTheme} setLightTheme={setLightTheme} />
    </header>
  );
}

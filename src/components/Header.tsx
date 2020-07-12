import React from 'react';
import { Link } from '@reach/router';
import ThemeToggle from './ThemeToggle';
import Nav from './Nav';
import routes from '../utils/routes';
import Logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <>
      <header
        className={`fixed 
        w-screen z-40 
        bg-primary 
        bottom-0 left-0 top-auto right-auto
        lg:top-0 lg:bottom-auto
    `}
      >
        <div className="flex h-16 lg:h-12 items-center">
          <Link
            to={routes.home}
            className={`
          hidden
          px-2
          lg:block
        `}
          >
            <Logo className="w-32 h-auto" />
          </Link>
          <Nav />
        </div>
      </header>
      <ThemeToggle />
    </>
  );
}

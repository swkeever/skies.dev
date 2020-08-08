import React from 'react';
import { Link } from '@reach/router';
import ThemeToggle from './ThemeToggle';
import Nav from './Nav';
import routes from '../utils/routes';
import Logo from '../../assets/logo.svg';
import { globalStyles } from '../styles';

export default function Header() {
  return (
    <>
      <header
        style={{
          paddingBottom: 'env(safe-area-inset-bottom)',
          // paddingTop: 'env(safe-area-inset-top)',
        }}
        className={`fixed 
        w-screen z-40 
        bg-primary 
        bottom-0 left-0 top-auto right-auto
        lg:top-0 lg:bottom-auto
    `}
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
          ml-2
          ${globalStyles.transitions}
          
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

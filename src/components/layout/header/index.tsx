import React from 'react';
import ThemeToggle from './ThemeToggle';
import Nav from './nav';
import Brand from './Brand';

type HeaderProps = {
  lightTheme: boolean;
  setLightTheme: Function;
};

export default function Header({ lightTheme, setLightTheme }: HeaderProps) {
  return (
    <header>
      <Brand />
      <Nav />
      <ThemeToggle lightTheme={lightTheme} setLightTheme={setLightTheme} />
    </header>
  );
}

import React from 'react';
import { Link } from 'gatsby';
import routes from '../../../utils/routes';

export default function Button() {
  return (
    <Link
      to={routes.contact}
      className={`
        inline-block
        bg-light
        text-onLight
        hover:text-onLight
        rounded-full
        focus:outline-none
        px-4 
        py-2 
        mt-4
        mb-8
        lg:mt-6
        font-bold
        lg:px-6 
        lg:text-lg
        shadow
        active:shadow-none
      `}
    >
      Learn more
    </Link>
  );
}

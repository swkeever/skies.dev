import React from 'react';
import { Link } from '@reach/router';
import routes from '../../../utils/routes';

export default function Brand() {
  return (
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
          tracking-wider
          font-bold
          uppercase
          mt-3
          text-lg
          text-onPrimary
          hover:text-onPrimary
        `}
    >
      <span role="img" aria-label="Man technologist">
        👨‍💻
      </span>
      {' '}
      Sean Keever
    </Link>
  );
}

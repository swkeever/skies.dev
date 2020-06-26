import React from 'react';
import { blogDescription } from '../../pages/blog';
import Blog from '../../../assets/blog.svg';

export default function Header() {
  return (
    <>
      <div
        className={`
          diagonal-t 
          bg-primary
          z-0
          md:pt-8
          pb-16 
        `}
      >
        <div className="flex items-center px-4 pt-2 z-10 max-w-screen-md mx-auto">
          <div className="">
            <h1
              className={`
              leading-none
              text-4xl
              lg:text-5xl
              text-onPrimary
              font-bold
              mt-8
            `}
            >
              A Blog on Software Engineering
            </h1>
            <p className="text-onPrimarySoft mt-4 text-lg lg:text-xl">
              {blogDescription}
            </p>
          </div>

          <Blog
            className={`
            w-full
            lg:w-7/12
            h-auto
            hidden
            md:block
          `}
          />
        </div>
      </div>
    </>
  );
}

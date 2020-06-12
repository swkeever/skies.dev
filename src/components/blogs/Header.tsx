import React from 'react';
import BlogsContainer from './BlogsContainer';
import Bulb from '../../../assets/bulb.svg';

export default function Header() {
  return (
    <>
      <div
        className={`
          diagonal-t 
          bg-primaryBg
          pt-px 
          pb-20 
        `}
      >
        <BlogsContainer>
          <h1
            className={`
              w-11/12
              mt-12
              leading-tight
              text-3xl
              md:text-4xl
              text-onPrimaryBg
              md:w-8/12
              md:w-9/12
              lg:w-7/12
            `}
          >
            Blogs about life as a software engineer.
          </h1>
          <p
            className={`
              w-7/12
              -mb-4
              lg:w-6/12
              lg:text-lg
              text-onPrimaryBgSoft
            `}
          >
            I write about lessons learned in the field, and anything else I feel
            is important.
          </p>
        </BlogsContainer>
      </div>
      <BlogsContainer>
        <Bulb
          className={`
            w-40 
            absolute 
            right-0 
            top-0
            mr-4
            h-auto
            -mt-40
            md:-mt-40 
            md:w-48
            lg:w-64 
            lg:-mt-64 
          `}
        />
      </BlogsContainer>
    </>
  );
}

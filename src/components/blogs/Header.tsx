import React from 'react';
import BlogsContainer from './BlogsContainer';
import Bulb from '../../../assets/bulb.svg';

export default function Header() {
  return (
    <>
      <div
        className={`
          diagonal-t 
          bg-primary
          pt-px 
          pb-20 
        `}
      >
        <BlogsContainer>
          <h1
            className={`
              w-11/12
              mt-10
              leading-none
              text-3xl
              md:text-4xl
              text-onPrimary
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
              text-onPrimarySoft
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
            absolute 
            right-0 
            top-0
            h-auto
            w-1/2
            -mt-32
            mr-2
            md:w-5/12
            md:-mt-40
            md:mr-4
            lg:mr-8

          `}
        />
      </BlogsContainer>
    </>
  );
}

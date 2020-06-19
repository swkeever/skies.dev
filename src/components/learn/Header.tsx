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
          pb-24 
          md:pb-20
        `}
      >
        <BlogsContainer>
          <h1
            className={`
              w-11/12
              mt-10
              md:mt-5 
              lg:mt-12
              leading-none
              text-3xl
              md:text-4xl
              text-onPrimary
              md:w-8/12
              md:w-9/12
              lg:w-7/12
              mb-4
            `}
          >
            Learn about software engineering and web development.
          </h1>
          <p
            className={`
              md:w-7/12
              -mb-4
              lg:w-6/12
              lg:text-lg
              text-onPrimarySoft
            `}
          >
            Explore byte-sized articles in computer science, software
            engineering, and web development.
          </p>
        </BlogsContainer>
      </div>
      <BlogsContainer>
        <Bulb
          className={`
            absolute 
            right-0 
            top-0
            z-30
            h-40
            w-40
            -mt-20
            mr-4
            md:w-64
            md:h-64
            md:-mt-40
            md:mr-16
            lg:w-4/12
            lg:h-auto
            lg:-mt-48
            lg:mr-16
          `}
        />
      </BlogsContainer>
    </>
  );
}

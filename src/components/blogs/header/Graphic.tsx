import React from 'react';
import Bulb from '../../../../assets/bulb.svg';
import BlogsContainer from '../BlogsContainer';

export default function Graphic() {
  return (
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
  );
}

import React from 'react';
import BlogsContainer from '../BlogsContainer';
import Graphic from './Graphic';
import Title from './Title';
import Subtitle from './Subtitle';

export default function Header() {
  return (
    <>
      <div
        className={`
        diagonal-t 
        bg-primaryBg
        pt-px 
        pb-20
        md:pb-16 
        lg:pb-20 
      `}
      >
        <BlogsContainer>
          <Title />
          <Subtitle />
        </BlogsContainer>
      </div>
      <Graphic />
    </>
  );
}

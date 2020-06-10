import React from 'react';
import BlogContainer from './BlogContainer';
import ShareCallToAction from './ShareCallToAction';

export default function BlogHeader({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div
      className={`
        bg-primaryBg
        diagonal-t
        pt-5
        pb-10
        lg:pb-2
        -mb-4
      `}
    >
      <BlogContainer>
        <h1
          className={`
        mt-10
        md:mt-8
        leading-none
        text-3xl
        text-onPrimaryBg
        md:text-3xl
        lg:mt-0
      `}
        >
          {title}
        </h1>
        <div
          className={`
        uppercase
        tracking-widest
        text-onPrimaryBgSoft
        text-lg
        text-left
      `}
        >
          <span
            className={`
          text-xs 
          mr-1
          block
          -mb-px
          lg:-mb-2
        `}
          >
            Published
          </span>
          <time dateTime={date}>{date}</time>
        </div>
        <ShareCallToAction />
      </BlogContainer>
    </div>
  );
}

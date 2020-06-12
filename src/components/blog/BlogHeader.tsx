import React from 'react';
import BlogContainer from './BlogContainer';
import ShareCallToAction from './ShareCallToAction';
import BlogMeta from '../BlogMeta';

export default function BlogHeader({
  title,
  date,
  timeToRead,
}: {
  title: string;
  date: string;
  timeToRead: number;
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
        <BlogMeta
          date={date}
          timeToRead={timeToRead}
          className="text-primarySoft"
        />
        <ShareCallToAction />
      </BlogContainer>
    </div>
  );
}

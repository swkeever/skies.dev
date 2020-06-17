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
        bg-primary
        relative
        z-10
        diagonal-t
        pt-5
        md:pt-px
        lg:pt-2
        pb-16
        md:pb-12
        lg:pb-3
        -mb-4
      `}
    >
      <BlogContainer className="lg:py-8">
        <h1
          className={`
        mt-6
        md:mt-8
        leading-none
        text-3xl
        text-onPrimary
        lg:text-4xl
        lg:mt-0
      `}
        >
          {title}
        </h1>
        <BlogMeta
          date={date}
          timeToRead={timeToRead}
          className="text-onPrimarySoft space-x-8"
        />
        <ShareCallToAction
          className="mt-2 -ml-1"
          linkClassName="text-onPrimarySoft hover:text-onPrimary"
        />
      </BlogContainer>
    </div>
  );
}

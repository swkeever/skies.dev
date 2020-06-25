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
        pt-2
        pb-12
        md:pb-12
        lg:pb-4
        -mb-4
      `}
    >
      <BlogContainer className="lg:py-8">
        <h1
          className={`
            mt-8
            leading-none
            text-4xl
            text-onPrimary
            md:text-5xl
            lg:mt-0
          `}
        >
          {title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <BlogMeta
            date={date}
            timeToRead={timeToRead}
            className="text-onPrimarySoft space-x-8"
          />
          <ShareCallToAction
            className="mt-2 -ml-1"
            linkClassName="text-onPrimarySoft hover:text-onPrimary"
          />
        </div>
      </BlogContainer>
    </div>
  );
}

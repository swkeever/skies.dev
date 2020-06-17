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
        diagonal-t
        pt-5
        md:pt-px
        lg:pt-2
        pb-10
        lg:pb-2
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
          className="-mb-4 justify-end"
          linkClassName="text-onPrimarySoft hover:text-onPrimary"
        />
      </BlogContainer>
    </div>
  );
}

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
        pt-4
        pb-24
        md:pb-32
      `}
      itemScope
      itemType="http://schema.org/BlogPosting"
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
            font-bold
            
          `}
          itemProp="name"
        >
          {title}
        </h1>
        <div className="mt-4 flex md:items-center flex-col md:flex-row md:justify-between">
          <BlogMeta
            date={date}
            timeToRead={timeToRead}
            className="text-onPrimarySoft space-x-6 text-sm md:text-base"
          />
          <ShareCallToAction
            className="md:mt-0 mt-2"
            linkClassName="text-onPrimarySoft hover:text-onPrimary"
          />
        </div>
      </BlogContainer>
    </div>
  );
}

import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import { Blog } from '../../pages/blog';
import { slugToLink } from '../../utils/links';
import BlogMeta from '../BlogMeta';

export default function BlogListItem({ blog }: { blog: Blog }): ReactElement {
  const li = (
    <li
      className={`
    bg-neutralBg 
    border-t-4 
    border-primary 
    md:transition 
    md:transform 
    hover:scale-105 
    hover:shadow-xl 
    translate-y-0
    hover:-translate-y-3 
    shadow-md 
    duration-300 
    rounded-b-lg 
    rounded-t-sm 
    mb-0
    `}
    >
      <Link
        to={slugToLink(blog.slug)}
        className="flex flex-col h-full justify-between text-onNeutralBg hover:text-onNeutralBg"
      >
        <div className="px-4 z-10 h-24">
          <BlogMeta
            date={blog.date}
            timeToRead={blog.timeToRead}
            className="justify-between relative z-20 text-sm text-onNeutralBgSoft"
          />
          <ul className=" ml-0 mt-1 text-sm list-none flex flex-wrap">
            {blog.tags.map((t) => (
              <li
                key={`${blog.id}-${t}`}
                className="bg-primaryBgSoft mr-1 mb-1 relative z-40 text-onPrimaryBgSoft rounded-full px-2"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Img
          className="w-11/12  mx-auto relative z-10"
          fluid={blog.imageFluid}
          alt={blog.title}
          fadeIn={false}
        />
        <div className=" bg-primary relative z-0 mt-auto diagonal-b pt-12 -mt-12 rounded-b-md pb-4">
          <div className="mt-4 px-4">
            <h2 className="mt-auto relative leading-none text-onPrimary z-20 text-xl ">
              {blog.title}
            </h2>
            <p className="mt-1 relative leading-snug z-20 text-onPrimarySoft">
              {blog.description}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );

  return <>{li}</>;
}

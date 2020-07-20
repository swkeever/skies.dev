import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import { FaArrowRight } from 'react-icons/fa';
import Img from 'gatsby-image';
import { Blog } from '../../pages';
import { globalStyles } from '../../styles';
import BlogMeta from '../BlogMeta';

export default function BlogListItem({ blog }: { blog: Blog }): ReactElement {
  const li = (
    <li>
      <Link
        to={blog.slug}
        className={`
        ${globalStyles.transitions.colors}
        flex flex-col
        h-full
        shadow hover:shadow-xl
        bg-neutralBg
        rounded
         transform 
        translate-y-0 hover:-translate-y-1



      `}
      >
        <Img
          className=""
          sizes={{
            ...blog.image,
            aspectRatio: 7 / 4,
          }}
          fluid={blog.image}
          alt={blog.title}
        />

        <div className="flex flex-col px-3 py-2 space-y-1 h-5/12">
          <h2 className="text-2xl font-bold leading-none text-onNeutralBg">
            {blog.title}
          </h2>
          <BlogMeta
            className="text-sm text-neutralSoft"
            date={blog.date}
            timeToRead={blog.timeToRead}
          />
          <p className="w-full text-onNeutralBgSoft ">{blog.description}</p>
        </div>
      </Link>
    </li>
  );

  return <>{li}</>;
}

import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import { FaArrowRight } from 'react-icons/fa';
import Img from 'gatsby-image';
import { Blog } from '../../pages';
import { globalStyles } from '../../styles';
import BlogMeta from '../BlogMeta';

export default function BlogListItem({ blog }: { blog: Blog }): ReactElement {
  const Container = ({ children }: { children: ReactNode }) => (
    <div
      className={`py-2 px-3 
    flex-grow
    flex flex-col justify-start items-start`}
    >
      {children}
    </div>
  );

  const li = (
    <li
      className={`
        ${globalStyles.transitions.colors}
        bg-neutralBg
        pb-2
        rounded
        shadow
        flex flex-col
        h-full
      `}
    >
      <Img fluid={blog.image} alt={blog.title} />

      <Container>
        <h2 className="text-2xl leading-none font-bold">{blog.title}</h2>
        <BlogMeta
          className="text-neutralSoft text-sm mt-1"
          date={blog.date}
          timeToRead={blog.timeToRead}
        />
        <p className="text-onNeutralBgSoft mt-1">{blog.description}</p>
        <Link
          to={blog.slug}
          className={`
        inline-block
        mt-auto
        pt-3
        pb-1 
        border-b border-onNeutralBgLink hover:border-onNeutralBgLinkHover
        text-onNeutralBgLink hover:text-onNeutralBgLinkHover
        
      `}
        >
          Read more
          <FaArrowRight className="inline mb-1 ml-1" />
        </Link>
      </Container>
    </li>
  );

  return <>{li}</>;
}

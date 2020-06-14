import React from 'react';
import { useLocation } from '@reach/router';
import BlogContainer from './BlogContainer';
import links from '../../utils/links';

export default function CallToAction({ editUrl }: { editUrl: string }) {
  const { pathname } = useLocation();
  const linkStyles = `

  lg:text-xl
  border-b
  text-onPrimary
  hover:text-light
  inline-block
  mt-4
  `;

  return (
    <div
      className={`
        bg-primary
        diagonal-b
        mt-8
        pt-8
        pb-4
        lg:pt-0
        lg:pb-0 
      `}
    >
      <BlogContainer className="flex space-x-5 lg:space-x-8">
        <a
          href={editUrl}
          className={linkStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit on GitHub
        </a>

        <a
          href={links.discussOnTwitter(pathname)}
          className={linkStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuss on Twitter
        </a>
      </BlogContainer>
    </div>
  );
}

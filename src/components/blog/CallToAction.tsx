import React from 'react';
import { useLocation } from '@reach/router';
import BlogContainer from './BlogContainer';
import links from '../../utils/links';
import ShareCallToAction from './ShareCallToAction';
import Button from '../Button';

export default function CallToAction({ editUrl }: { editUrl: string }) {
  const { pathname } = useLocation();

  return (
    <div
      className={`
        bg-neutralBgSoft
        diagonal-b
        pt-16
        -mt-24
        lg:-mt-32
        pb-6
        lg:pt-16
        lg:pb-8 
        
      `}
    >
      <BlogContainer className="lg:pt-8" />

      <div className="container mt-4 max-w-xl mx-auto">
        <ShareCallToAction linkClassName="mb-4 block text-onNeutralBgSoft hover:text-onNeutralBgLinkHover" />

        <Button
          tag="a"
          to={links.discussOnTwitter(pathname)}
          color="primary"
          className=""
        >
          Discuss on Twitter
        </Button>

        <a
          href={editUrl}
          className="ml-5 text-lg border-b text-onNeutralBgSoft hover:text-onNeutralBgLinkHover pb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit on GitHub
        </a>
      </div>
    </div>
  );
}

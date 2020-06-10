import React from 'react';
import { FaEdit } from 'react-icons/fa';
import BlogContainer from './BlogContainer';
import Button from '../Button';

export default function CallToAction({ editUrl }: { editUrl: string }) {
  return (
    <div
      className={`
        bg-primaryBg
        text-onPrimaryBg
        diagonal-b
        mt-8
        pt-12
        pb-10 
        z-0
      `}
    >
      <BlogContainer>
        <h2
          className={`
            text-onPrimaryBg
            leading-tight
            text-2xl
            lg:text-3xl
          `}
        >
          Can this document be improved?
        </h2>
        <p
          className={`
          text-onPrimaryBgSoft
        `}
        >
          This article is editable on GitHub. Any edits, big or small, are
          welcome and much appreciated.
          <span
            role="img"
            aria-label="Heart"
            className={`
            ml-1
          `}
          >
            💙
          </span>
        </p>
        <Button
          tag="a"
          to={editUrl}
          color="primary"
          className={`
            mt-8
          `}
        >
          Edit on GitHub
          <FaEdit
            className={`
              inline
              ml-2
              mb-1
              text-onPrimarySoft  
            `}
          />
        </Button>
      </BlogContainer>
    </div>
  );
}
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import Container from './Container';
import ShareCallToAction from './ShareCallToAction';

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
      <Container>
        <h2
          className={`
            text-onPrimaryBg
            leading-none
            text-2xl
            lg:text-3xl
          `}
        >
          Thanks for reading!
          <span
            role="img"
            aria-label="Cool"
            className={`
            ml-2
          `}
          >
            😎
          </span>
        </h2>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={editUrl}
          className={`
            mt-8
            inline-block
            bg-primary
            text-light
            hover:text-light
            hover:underline
            shadow
            cursor-pointer
            active:shadow-none
            font-bold
            rounded-full
            px-4
            py-1
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
        </a>
        <ShareCallToAction />
      </Container>
    </div>
  );
}

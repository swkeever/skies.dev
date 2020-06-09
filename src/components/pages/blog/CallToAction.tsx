import React from 'react';
import { FaEdit } from 'react-icons/fa';
import Container from './Container';
import ShareCallToAction from './ShareCallToAction';
import Button from '../../Button';

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
          Can this document be improved?
        </h2>
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
        <ShareCallToAction />
      </Container>
    </div>
  );
}

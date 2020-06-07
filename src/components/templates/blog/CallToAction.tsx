import React from 'react';
import Container from './Container';
import links from '../../../utils/links';

export default function CallToAction() {
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
        <p className="text-onPrimaryBgSoft">
          Please consider opening an
          {' '}
          <a href={`${links.sourceRepo}/issues`}>issue</a>
          {' '}
          or
          {' '}
          <a href={`${links.sourceRepo}/pulls`}>pull request</a>
          . ❤️
        </p>
      </Container>
    </div>
  );
}

import React from 'react';
import Lost from '../../assets/lost.svg';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <>
    <SEO
      title="Page not found"
      keywords={['Page not found', '404']}
      description="This is the 404 page. Not much to see here."
    />
    <section className="max-w-screen-xl mx-auto p-4 my-auto">
      <h1
        className={`
            text-lg
            md:text-xl
            text-neutral
            text-center
            mb-4 xl:mb-8
          `}
      >
        404 &ndash; Page not found.
      </h1>
      <div className="w-11/12 md:w-9/12 max-w-6xl mx-auto">
        <Lost className="w-full h-full" />
      </div>
    </section>
  </>
);

export default NotFoundPage;

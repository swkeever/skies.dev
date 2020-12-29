import React from 'react';
import Layout from '@components/layout';
import SEO from '@components/seo';
import tw from '@utils/tailwind';
import { Link } from 'gatsby';
import routes from '@utils/routes';
import globalStyles from '@styles/index';

const NotFoundPage = () => (
  <Layout type="neutral">
    <SEO
      title="Page not found"
      keywords={['Page not found', '404']}
      description="This is the 404 page. Not much to see here."
    />
    <section className="max-w-screen-xl my-auto p-4">
      <h1 className={tw('text-neutral font-medium text-lg')}>
        404 - Page not found
      </h1>
      <p className={tw('text-6xl md:text-8xl font-semibold text-onNeutralBg')}>
        Whoops.
      </p>
      <p className={tw('text-xl md:text-2xl text-neutral mt-1')}>
        This page doesn&apos;t exist.
      </p>
      <Link
        className={tw(
          'text-onPrimary bg-primaryBold hover:bg-primary',
          globalStyles.transitions,
          globalStyles.outline,
          'shadow',
          'inline-block',
          'mt-4',
          'py-3 px-6',
          'border border-transparent',
          'font-medium font-bold',
          'rounded-lg',
        )}
        to={routes.blog}
      >
        Back to home
      </Link>
    </section>
  </Layout>
);

export default NotFoundPage;

import React from 'react';
import SEO from '@components/SEO';
import { MDXProvider } from '@mdx-js/react';
import shortcodes from '@components/Shortcodes';
import Newsletter from '@components/Newsletter';
import Hero from '@components/Hero';
import classNames from '@utils/class-names';

export default function MarkdownPage({
  children,
  pageContext: { frontmatter },
}) {
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords || []}
      />
      {frontmatter.withHero ? <Hero /> : null}
      <section
        className={classNames('mb-24 mx-auto', 'w-full max-w-screen-md')}
      >
        <div className={classNames('mx-auto', 'px-2 md:px-4')}>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
      </section>
      <Newsletter color="neutralSoft" showTopics />
    </>
  );
}

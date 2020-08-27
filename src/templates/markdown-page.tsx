import React from 'react';
import SEO from '@components/SEO';
import { MDXProvider } from '@mdx-js/react';
import shortcodes from '@components/Shortcodes';
import Newsletter from '@components/Newsletter';
import Hero from '@components/Hero';

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
      <Hero />
      <section
        className={`
        mb-24
        max-w-screen-md mx-auto w-full
      `}
      >
        <div
          className={`
        mx-auto px-2 md:px-4
        `}
        >
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
      </section>
      <Newsletter color="neutralSoft" showTopics />
    </>
  );
}

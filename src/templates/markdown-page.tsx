import React from 'react';
import SEO from '@components/seo';
import { MDXProvider } from '@mdx-js/react';
import shortcodes from '@components/shortcodes';
import Newsletter from '@components/newsletter';
import Hero from '@components/hero';
import tw from '@utils/tailwind';

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
      <section className={tw('mb-24 mx-auto', 'w-full max-w-screen-md')}>
        <div className={tw('mx-auto', 'px-2 md:px-4')}>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
      </section>
      <Newsletter color="neutralSoft" />
    </>
  );
}

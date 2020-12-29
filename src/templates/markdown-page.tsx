import React from 'react';
import SEO from '@components/seo';
import { MDXProvider } from '@mdx-js/react';
import shortcodes from '@components/shortcodes';
import Newsletter from '@components/newsletter';
import tw from '@utils/tailwind';
import Layout from '@components/layout';

export default function MarkdownPage({
  children,
  pageContext: { frontmatter },
}) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords || []}
      />
      <section className={tw('my-24 mx-auto', 'w-full max-w-screen-md')}>
        <div className={tw('mx-auto', 'px-2 md:px-4')}>
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
      </section>
      <Newsletter color="neutralSoft" />
    </Layout>
  );
}

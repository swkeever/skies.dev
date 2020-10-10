import React from 'react';
import globalStyles from '@styles/index';
import { graphql } from 'gatsby';
import Hero from '@components/hero';
import tw from '@utils/tailwind';
import BlogDisplay from '@components/blog-display';
import Form from '../components/form';
import SEO from '../components/seo';
import Newsletter from '../components/newsletter';
import { PageQuery } from '../../graphql-types';

export const dateFragment = graphql`
  fragment BlogDate on MdxFrontmatter {
    date {
      modified(formatString: "MMMM DD, YYYY")
      published(formatString: "MMMM DD, YYYY")
    }
  }
`;

export const homePageQuery = graphql`
  query HomePage {
    allMdx(
      limit: 4
      sort: {
        order: DESC
        fields: [frontmatter___date___modified, frontmatter___date___published]
      }
      filter: { fileAbsolutePath: { regex: "/content/" } }
    ) {
      nodes {
        ...BlogCard
      }
    }
  }
`;

const IndexPage = ({ data }: { data: PageQuery }) => (
  <div className={tw(globalStyles.transitions, 'bg-neutralBgSoft')}>
    <SEO
      description="Come check out articles on web development and software engineering by Seattle software developer Sean Keever."
      keywords={[
        'Sean Keever',
        'software engineer',
        'Seattle',
        'full stack developer',
      ]}
    />
    <Hero />

    <section className={tw('relative', 'py-20', globalStyles.transitions)}>
      <BlogDisplay
        blogs={data.allMdx.nodes}
        title="Recent publications"
        subtitle="I write articles on software engineering, computer science, and lessons
          learned in industry."
      />
    </section>

    <section
      id="contact"
      className={tw(globalStyles.transitions, 'bg-neutralBg', 'py-20')}
    >
      <div className="max-w-screen-md mx-auto px-4">
        <h2
          className={tw(
            globalStyles.transitions,
            'font-extrabold',
            'text-onNeutralBgSoft',
            'text-3xl',
            'mb-3',
          )}
        >
          Contact
        </h2>
        <p
          className={tw(
            'text-neutral',
            'text-lg',
            'mb-16',
            'max-w-lg',
            globalStyles.transitions,
          )}
        >
          If you would like to get in touch with me, contact me here. Your
          message will go straight to my email.
        </p>
        <Form />
      </div>
    </section>
    <Newsletter color="neutralSoft" />
  </div>
);

export default IndexPage;

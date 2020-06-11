import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function Title({ name, label }: { name: string; label: string }) {
  const data = useStaticQuery(query);

  return (
    <div
      className={`
        -mt-40
        
        
        relative
        z-20
        flex
        justify-center
        space-x-1
      `}
    >
      <Img
        className={`
          rounded-full
          border-4
          border-neutralBg
          w-32
          mt-6
          md:mt-10
          lg:w-56
          lg:-mt-6

        `}
        fluid={data.file.childImageSharp.fluid}
      />
      <div className="mt-12 lg:mt-6">
        <h1
          className={`
            lg:text-5xl
            text-onPrimary
            leading-tight
        `}
        >
          {name}
        </h1>
        <p
          className={`
          text-onPrimary
          uppercase
          tracking-widest
          -mt-2
          lg:text-2xl
          lg:tracking-wide
          lg:-mt-2
          font-medium
          text-center
        `}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Header({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  return (
    <section
      className={`
      mb-10
    `}
    >
      <Title name={name} label={label} />
    </section>
  );
}

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
          w-24
          mt-12
          md:mt-0
          lg:mt-6
          md:w-48 
          lg:w-56
          lg:-mt-6
        `}
        fluid={data.file.childImageSharp.fluid}
      />
      <div className="mt-12 md:mt-8">
        <h1
          className={`
            text-4xl
            md:text-5xl
            uppercase
            text-onPrimary
            leading-tight
        `}
        >
          {name}
        </h1>
        <p
          className={`
          text-onPrimarySoft
          uppercase
          tracking-wide
          md:tracking-widest
          md:ml-1
          -mt-2
          md:-mt-3
          text-xl
          md:text-2xl
          font-medium
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
    <section className="mb-6 md:mb-0">
      <Title name={name} label={label} />
    </section>
  );
}

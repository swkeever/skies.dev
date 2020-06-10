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
        -mt-32
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

        `}
        fluid={data.file.childImageSharp.fluid}
      />
      <div
        className={`
            mt-3
        `}
      >
        <h1
          className={`
            text-onPrimaryBg
            leading-none
        `}
        >
          {name}
        </h1>
        <p
          className={`
          text-onPrimaryBgSoft
          uppercase
          tracking-widest
          mt-0
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
    <div
      className={`
      mb-8
    `}
    >
      <Title name={name} label={label} />
    </div>
  );
}

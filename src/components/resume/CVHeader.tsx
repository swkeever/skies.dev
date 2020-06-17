import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

export default function Header({
  name,
  label,
  image,
}: {
  name: string;
  label: string;
  image: FluidObject;
}) {
  return (
    <section className="mb-6 md:mb-0">
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
          imgStyle={{ borderRadius: 9999 }}
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
          fluid={image}
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
    </section>
  );
}

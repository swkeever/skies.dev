/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FaCode } from 'react-icons/fa';
import { IExperience } from '../../pages/cv';

function Item({
  company,
  position,
  website,
  startDate,
  endDate,
  summary,
  highlights,
}: {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}) {
  return <li />;
}

export default function Experience({
  experience,
}: {
  experience: IExperience;
}) {
  return (
    <>
      <h2>
        Experience
        <span>
          <FaCode
            className={`
            inline
            ml-2
            text-onNeutralBgSoft
            mb-1
          `}
          />
        </span>
      </h2>
      <ul>
        {experience.map((e) => (
          <Item key={`${e.company}-${e.position}`} {...e} />
        ))}
      </ul>
    </>
  );
}

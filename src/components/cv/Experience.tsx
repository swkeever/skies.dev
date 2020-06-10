/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';
import {
  FaCode, FaBriefcase, FaCheck, FaCheckCircle,
} from 'react-icons/fa';
import { IExperience } from '../../pages/cv';
import List from './List';
import ListItemTitle from './ListItemTitle';
import CVDate from './CVDate';
import CVSection from './CVSection';
import CVSectionTitle from './CVSectionTitle';
import CVLocation from './CVLocation';

function Highlights({ highlights }: { highlights: string[] }) {
  return (
    <ul className="list-none ml-0 flex flex-col space-y-1">
      {highlights.map((highlight) => (
        <li className="flex items-center -ml-4 md:-ml-3">
          <FaCheckCircle className="text-primarySoft text-2xl w-2/12" />
          <p className="w-10/12 pr-2">{highlight}</p>
        </li>
      ))}
    </ul>
  );
}

function Position({ position }: { position: ReactNode }) {
  return (
    <span className="inline-block -mt-1 uppercase tracking-widest">
      {position}
    </span>
  );
}

function Item({
  company,
  position,
  location,
  startDate,
  endDate,
  highlights,
}: {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}) {
  return (
    <li>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <ListItemTitle>{company}</ListItemTitle>
          <Position position={position} />
        </div>
        <div className="mt-1">
          <CVLocation location={location} />
          <CVDate startDate={startDate} endDate={endDate} />
        </div>
      </div>

      <Highlights highlights={highlights} />
    </li>
  );
}

export default function Experience({
  experience,
}: {
  experience: IExperience[];
}) {
  return (
    <CVSection>
      <CVSectionTitle>
        <FaBriefcase
          className={`
            inline
            mr-3
            text-2xl
            text-onPrimarySoft
            mb-1
          `}
        />
        Experience
      </CVSectionTitle>
      <List>
        {experience.map((e) => (
          <Item key={`${e.company}-${e.position}`} {...e} />
        ))}
      </List>
    </CVSection>
  );
}

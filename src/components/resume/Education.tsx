/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaGraduationCap, FaChartLine } from 'react-icons/fa';
import CVList from './CVList';
import ListItemTitle from './ListItemTitle';
import CVDate from './CVDate';
import CVSection from './CVSection';
import CVSectionTitle from './CVSectionTitle';
import CVLocation from './CVLocation';

function Major({ degree, major }: { degree: string; major: string }) {
  return (
    <div className="-mt-2">
      <span className=" text-xl tracking-wider">{degree}</span>
      <span className="uppercase tracking-widest align-baseline ml-1">
        {major}
      </span>
    </div>
  );
}

function CVGradePointAvg({ gpa }: { gpa: string }) {
  return (
    <div className="text-onNeutralBgSoft">
      <FaChartLine className="inline text-primarySoft mb-px mr-1" />
      {`GPA ${gpa}`}
    </div>
  );
}

function Item({
  school,
  location,
  degree,
  major,
  startDate,
  endDate,
  gpa,
}: {
  school: string;
  location: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
}) {
  return (
    <li className="">
      <ListItemTitle>{school}</ListItemTitle>
      <Major degree={degree} major={major} />
      <div className="mt-3 flex flex-col space-y-3">
        <CVLocation location={location} />
        <CVDate startDate={startDate} endDate={endDate} />
        <CVGradePointAvg gpa={gpa} />
      </div>
    </li>
  );
}

export default function Education({ education }: { education: Object }) {
  return (
    <CVSection>
      <CVSectionTitle>
        <FaGraduationCap className="inline mr-2 text-onPrimarySoft mb-1" />
        Education
      </CVSectionTitle>
      <CVList>
        {education.map((i) => (
          <Item key={i.school} {...i} />
        ))}
      </CVList>
    </CVSection>
  );
}

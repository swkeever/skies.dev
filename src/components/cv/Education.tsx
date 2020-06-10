/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaGraduationCap, FaChartLine } from 'react-icons/fa';
import List from './List';
import ListItemTitle from './ListItemTitle';
import TimeBlock from './TimeBlock';
import CVSection from './CVSection';
import CVSectionTitle from './CVSectionTitle';

function Major({ degree, major }: { degree: string; major: string }) {
  return (
    <div className="-mt-1">
      {/* <FaBook className="inline mb-1 text-onNeutralBgSoft mr-1" /> */}
      <span className=" text-xl tracking-wider">{degree}</span>
      <span className="uppercase tracking-widest align-baseline ml-1">
        {major}
      </span>
    </div>
  );
}

function GPA({ gpa }: { gpa: string }) {
  return (
    <div className="text-onNeutralBgSoft mt-1 md:text-right -mt-px">
      <FaChartLine className="inline text-primarySoft mb-px mr-1" />
      <span className="text-sm tracking-wide mr-1">GPA</span>
      <span className="text-xl">{gpa}</span>
    </div>
  );
}

function Item({
  school,
  degree,
  major,
  startDate,
  endDate,
  gpa,
}: {
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
}) {
  return (
    <li className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col">
        <ListItemTitle>{school}</ListItemTitle>
        <Major degree={degree} major={major} />
      </div>
      <div className="flex flex-col">
        <TimeBlock startDate={startDate} endDate={endDate} />
        <GPA gpa={gpa} />
      </div>
    </li>
  );
}

export default function Education({ education }: { education: Object }) {
  return (
    <CVSection>
      <CVSectionTitle>
        <FaGraduationCap className="inline mr-2 text-primarySoft mb-1" />
        Education
      </CVSectionTitle>
      <List>
        {education.map((i) => (
          <Item key={i.school} {...i} />
        ))}
      </List>
    </CVSection>
  );
}

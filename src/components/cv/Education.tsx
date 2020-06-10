/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FaGraduationCap,
  FaRegCalendarAlt,
  FaChartLine,
  FaBook,
} from 'react-icons/fa';

function Time({ date }: { date: string }) {
  return (
    <time dateTime={date} className="text-onNeutralBgSoft ml-px inline-block">
      {new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
      }).format(new Date(date))}
    </time>
  );
}

function TimeBlock({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  return (
    <div className="uppercase mt-2">
      <FaRegCalendarAlt className="inline text-onNeutralBgSoft mr-1 mb-1" />
      <Time date={startDate} />
      <span>&mdash;</span>
      <Time date={endDate} />
    </div>
  );
}

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
    <div className="text-onNeutralBgSoft mt-1 md:text-right">
      <FaChartLine className="inline text-onNeutralBgSoft mb-px mr-1" />
      <span className="text-sm tracking-wide mr-1">GPA</span>
      <span>{gpa}</span>
    </div>
  );
}

function School({ institution }: { institution: string }) {
  return <h3 className="text-2xl mt-px">{institution}</h3>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Coursework({ courses }: { courses: string[] }) {
  return (
    <>
      <h4 className="text-sm font-normal mt-1 text-onNeutralBgSoft">
        <FaBook className="inline text-onNeutralBgSoft mr-1" />
        <span className="ml-px">Coursework</span>
      </h4>
      <ul className="list-none ml-0 mt-1">
        {courses.map((c) => (
          <li
            key={c}
            className="inline-block bg-neutralBgSoft rounded-full text-sm px-2 mr-1"
          >
            {c}
          </li>
        ))}
      </ul>
    </>
  );
}

function Item({
  institution,
  degree,
  major,
  startDate,
  endDate,
  gpa,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  courses,
}: {
  institution: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
}) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <School institution={institution} />
          <Major degree={degree} major={major} />
        </div>
        <div className="flex flex-col">
          <TimeBlock startDate={startDate} endDate={endDate} />
          <GPA gpa={gpa} />
        </div>
      </div>
      {/* <Coursework courses={courses} /> */}
    </div>
  );
}

export default function Education({ education }: { education: Object }) {
  return (
    <section>
      <h2>
        Education
        <span>
          <FaGraduationCap className="inline ml-2 text-onNeutralBgSoft mb-1" />
        </span>
      </h2>
      <ul className="ml-0 flex flex-col space-y-4 border-l-2 border-primary pl-4">
        {education.map((i) => (
          <Item key={i.institution} {...i} />
        ))}
      </ul>
    </section>
  );
}

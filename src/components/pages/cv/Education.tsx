/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

function Time({ date }: { date: string }) {
  return (
    <time
      dateTime={date}
      className={`
        text-center
        text-onNeutralBgSoft
      `}
    >
      {new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
      }).format(new Date(date))}
    </time>
  );
}

function Item({
  institution,
  area,
  startDate,
  endDate,
  gpa,
  courses,
}: {
  institution: string;
  area: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string;
}) {
  return (
    <div>
      <h3
        className={`
        mt-0
      `}
      >
        {institution}
      </h3>
      <div
        className={`
        flex
        space-x-1
        uppercase
        tracking-widest
        text-sm
      `}
      >
        <Time date={startDate} />
        <span>{' - '}</span>
        <Time date={endDate} />
      </div>
      <ul
        className={`
        flex
        justify-between
        list-none
        ml-0
      `}
      >
        <li
          className={`

        `}
        >
          {area}
        </li>
        <li
          className={`
          
        `}
        >
          {`GPA ${gpa}`}
        </li>
      </ul>
      <h4>Coursework</h4>
      <ul
        className={`
        list-none
        ml-0
      `}
      >
        {courses.map((c) => (
          <li
            key={c}
            className={`
              inline-block
              bg-neutralBgSoft
              rounded-full
              text-sm
              shadow-inner
              px-2
              mr-1
              
            `}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Education({ education }: { education: Object }) {
  return (
    <div>
      <h2
        className={`

      `}
      >
        Education
        <span>
          <FaGraduationCap
            className={`
            inline
            ml-2
            text-onNeutralBgSoft
            mb-1
          `}
          />
        </span>
      </h2>
      <ul
        className={`
          ml-0
          flex
          flex-col
          space-y-4
        `}
      >
        {education.map((i) => (
          <Item key={i.institution} {...i} />
        ))}
      </ul>
    </div>
  );
}

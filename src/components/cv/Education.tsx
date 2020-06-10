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
  degree,
  major,
  startDate,
  endDate,
  gpa,
  courses,
}: {
  institution: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string;
}) {
  return (
    <div
      className={`
    `}
    >
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
        <span>&mdash;</span>
        <Time date={endDate} />
      </div>
      <div
        className={`
        flex
        justify-between
        mt-4
        align-baseline
      `}
      >
        <div
          className={`
          
        `}
        >
          <span
            className={`
            text-xl
            tracking-wider
          `}
          >
            {degree}
          </span>
          <span
            className={`
            uppercase
            tracking-widest
            
            text-sm
            align-baseline
            ml-1
          `}
          >
            {major}
          </span>
        </div>
        <div
          className={`
            font-xl
            font-light
        `}
        >
          <span
            className={`
            mr-px
            text-sm
            tracking-wider
          `}
          >
            GPA
          </span>
          <span
            className={`
            text-xl
          `}
          >
            {gpa}
          </span>
        </div>
      </div>
      <h4
        className={`
        text-sm
        pb-0
        font-normal
      `}
      >
        Coursework
      </h4>
      <ul
        className={`
        list-none
        ml-0
        mt-1
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
    <>
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
    </>
  );
}

import React from 'react';
import { FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';

export default function BlogMeta({
  date,
  timeToRead,
  className = '',
}: {
  date: string;
  timeToRead: number;
  className?: string;
}) {
  const timeStyles = `
  inline-block
  uppercase
  tracking-widest
  `;

  return (
    <ul className={`flex mb-0 ml-0 ${className}`}>
      <li className={`${timeStyles}`}>
        <time>
          <FaRegCalendarAlt className="inline mr-1 mb-1" />
          {date}
        </time>
      </li>
      <li className={`${timeStyles}`}>
        <div className="ml-px">
          <FaRegClock className="inline mr-1 mb-1" />
          {timeToRead}
          {' '}
          minute read
        </div>
      </li>
    </ul>
  );
}

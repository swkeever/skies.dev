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
  `;

  return (
    <ul className={`flex ${className}`}>
      <li>
        <time>{date}</time>
      </li>
      <span className="mx-2">&middot;</span>
      <li>
        <div>
          {timeToRead}
          {' '}
          minute read
        </div>
      </li>
    </ul>
  );
}

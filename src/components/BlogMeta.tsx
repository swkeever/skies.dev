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
    <div className={`flex ${className}`}>
      <time>{date}</time>
      <span className="mx-2">&middot;</span>
      <span>
        {timeToRead}
        {' '}
        minute read
      </span>
    </div>
  );
}

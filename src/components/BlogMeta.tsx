import React from 'react';

export default function BlogMeta({
  date,
  timeToRead,
  className = '',
}: {
  date: string;
  timeToRead: number;
  className?: string;
}) {
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

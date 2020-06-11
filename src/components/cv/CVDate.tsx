import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

function Time({ date }: { date: string }) {
  const dateObj = new Date(date);

  const month = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(dateObj);

  return (
    <time dateTime={date} className="text-onNeutralBgSoft ml-px inline-block">
      {month}
    </time>
  );
}

export default function CVDate({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  return (
    <div>
      <FaRegCalendarAlt className="inline text-primarySoft mr-1 mb-1" />
      <Time date={startDate} />
      <span className="mx-px text-neutral">&mdash;</span>
      <Time date={endDate} />
    </div>
  );
}

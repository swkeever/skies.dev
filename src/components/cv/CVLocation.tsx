import React, { ReactNode } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function CVLocation({ location }: { location: ReactNode }) {
  return (
    <div>
      <FaMapMarkerAlt className="inline mb-1 mr-1 text-primarySoft" />
      <span className="text-onNeutralBgSoft ml-px">{location}</span>
    </div>
  );
}

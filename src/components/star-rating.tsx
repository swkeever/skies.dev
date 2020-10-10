import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

type PropTypes = {
  rating: number;
};

export default function StarRating({ rating }: PropTypes) {
  if (rating > 10 || rating < 0) {
    throw new Error('Rating should be in [0, 10]');
  }
  return (
    <div className="flex text-primaryBold space-x-1 text-2xl">
      {[2, 4, 6, 8, 10].map((num) => {
        // Full star
        if (rating >= num) {
          return <FaStar />;
        }

        // Half star
        if (rating + 1 === num) {
          return <FaStarHalfAlt />;
        }

        // Empty star
        return <FaRegStar />;
      })}
    </div>
  );
}

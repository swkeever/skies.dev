import React from 'react';

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <ul
      className={`
        list-none 
        ml-0
      `}
    >
      {tags.map((t) => (
        <li
          className={`
            inline-block 
            bg-primaryBg
            text-onPrimaryBgSoft
            rounded-full 
            text-base
            px-2 
            mr-2
            mb-2 
            shadow-xs
          `}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

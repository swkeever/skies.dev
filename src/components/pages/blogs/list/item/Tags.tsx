import React from 'react';

export default function Tags({ tags, slug }: { tags: string[]; slug: string }) {
  return (
    <ul
      className={`
        list-none 
        ml-0
      `}
    >
      {tags.map((t) => (
        <li
          key={`${slug}-${t}`}
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

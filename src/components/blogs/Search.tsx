import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import BlogsContainer from './BlogsContainer';

export type Tag = {
  name: string;
  selected: boolean;
};

type Search = {
  filter: string;
  setFilter: Function;
  tags: Tag[];
  setTags: Function;
};

export default function Search({
  filter, setFilter, tags, setTags,
}: Search) {
  const tagStyles = {
    inactive: `
    bg-neutralBgSoft
    text-onNeutral
    shadow
    `,

    active: `
    bg-primary
    shadow-inner
    text-light
    `,
  };

  return (
    <BlogsContainer className="mt-2">
      <label htmlFor="filter-input">
        <span className="inline-block mb-5 font-bold">Search</span>
        <div>
          <FaSistrix
            className={`
              inline
              text-2xl 
              absolute
              text-neutral
              ml-3
              z-50
            `}
          />
          <input
            id="filter-input"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            className={`
              -mt-8
              bg-neutralBgSoft
              w-9/12
              rounded-md
              text-onNeutral
              pl-10 
              pr-2
              relative
              py-2
              placeholder-neutral
              md:w-8/12
              lg:w-7/12
              outline-none
              shadow-inner
              focus:shadow-focus
            `}
            placeholder="Filter is applied automatically"
            type="search"
          />
        </div>
      </label>
      <div>
        <label className="block font-bold mt-4 -mb-2" htmlFor="tags">
          I&apos;m interested in
          <ul
            id="tags"
            className={`
              list-none 
              ml-0
            `}
          >
            {tags.map((t, idx) => (
              <li
                key={t.name}
                className={`${
                  t.selected ? tagStyles.active : tagStyles.inactive
                }
                  inline-block 
                  rounded-full 
                  px-4 
                  mr-2 
                  mb-2
                  cursor-pointer 
                `}
              >
                <button
                  type="button"
                  className={`
                    focus:outline-none
                    active:outline-none
                  `}
                  onClick={() => {
                    const newTags = tags.slice();
                    newTags[idx] = {
                      name: t.name,
                      selected: !t.selected,
                    };
                    setTags(newTags);
                  }}
                >
                  {t.name}
                </button>
              </li>
            ))}
          </ul>
        </label>
      </div>
    </BlogsContainer>
  );
}

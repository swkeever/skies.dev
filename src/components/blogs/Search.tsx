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
    `,

    active: `
    bg-primary
    text-light
    `,
  };

  return (
    <BlogsContainer className="mt-2 pb-8">
      <label htmlFor="filter-input">
        <span className="inline-block mb-3 font-semibold text-onNeutralBgSoft">
          What can I help you find?
        </span>
        <div>
          <FaSistrix
            className={`
              inline
              text-2xl 
              absolute
              text-neutral
              ml-2
              z-30
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
              rounded-md
              text-onNeutral
              pl-10 
              pr-2
              relative
              py-2
              placeholder-neutral
              w-9/12
              md:w-6/12
              outline-none
              shadow-inner
              focus:shadow-focus
            `}
            placeholder="Filter is applied as you type"
            type="search"
          />
        </div>
      </label>
      <div className="mt-8">
        <label
          className="block font-semibold text-onNeutralBgSoft"
          htmlFor="tags"
        >
          I&apos;m interested in
          <ul
            id="tags"
            className={`
              list-none 
              ml-0
              my-1
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
                    font-medium
                    ${!t.selected ? 'text-onNeutralBgSoft' : 'text-onPrimary'}
                    
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

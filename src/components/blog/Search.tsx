import React from 'react';
import { FaSistrix } from 'react-icons/fa';

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
    <div className="max-w-lg mx-auto px-2 mt-2 pb-8">
      <div className="">
        <h2 className="text-xl font-normal mt-0 text-onNeutralBgSoft mb-5">
          What can I help you find?
        </h2>
        <label htmlFor="filter-input">
          <span className="hidden">Search</span>
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
              rounded-full
              text-onNeutral
              pl-10 
              pr-2
              relative
              py-2
              w-full
              outline-none
              shadow-inner
              focus:shadow-focus
            `}
              type="search"
            />
          </div>
        </label>
        <div className="mt-6">
          <label htmlFor="tags">
            <span className="hidden">Categories</span>
            <ul id="tags">
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
      </div>
    </div>
  );
}

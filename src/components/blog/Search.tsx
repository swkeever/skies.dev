import React, { useContext } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { BlogContext } from '../../pages';
import { globalStyles } from '../../styles';

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

export default function Search() {
  const {
    filter, setFilter, tags, setTags, setPage,
  }: Search = useContext(
    BlogContext,
  );

  const tagStyles = {
    inactive: `
    bg-primaryBgSoft
    text-onPrimaryBgSoft
    shadow-lg
    -translate-y-1
    `,

    active: `
    bg-neutralBgSoft
    text-onNeutralBgSoft
    border-onPrimaryBgSoft
    translate-y-0
    ease-out
    `,
  };

  return (
    <div className="mt-6 pb-8">
      <div className="">
        <label htmlFor="filter-input">
          <span className="sr-only">Search</span>
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
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              autoComplete="off"
              id="filter-input"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(0);
              }}
              placeholder="What can I help you find? 🧐"
              className={`
              -mt-8
              bg-neutralBgSoft
              rounded-full
              text-onNeutral
              placeholder-neutralSoft
              lg:text-xl
              pl-10 
              pr-2
              relative
              py-3
              w-full
              shadow-inner
              ${globalStyles.outline}
              focus:bg-neutralBg
              transition
              duration-200
              ease-out
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
                  className={`
                     inline-block               
                `}
                >
                  <button
                    type="button"
                    className={`
                    ${t.selected ? tagStyles.active : tagStyles.inactive}
                                   
                    transform
                  translate
                  duration-200
                  rounded-full 
                  px-4 
                  mr-2 
                  mb-2
                  cursor-pointer
                    focus:outline-none
                    focus:shadow-outline
                    active:outline-none
                    font-medium                    
                  `}
                    onClick={() => {
                      const newTags = tags.slice();
                      newTags[idx] = {
                        name: t.name,
                        selected: !t.selected,
                      };
                      setTags(newTags);
                      setPage(0);
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

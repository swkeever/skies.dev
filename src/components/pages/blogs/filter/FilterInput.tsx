import React from 'react';
import { FaSistrix } from 'react-icons/fa';

type InputProps = {
  filter: string;
  setFilter: Function;
};

export default function FilterInput({ filter, setFilter }: InputProps) {
  return (
    <>
      <label htmlFor="filter-input">
        <span className="hidden">Search</span>
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
            placeholder="What can I help you find?"
            type="text"
          />
        </div>
      </label>
    </>
  );
}

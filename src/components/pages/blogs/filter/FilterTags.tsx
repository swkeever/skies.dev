import React from 'react';

export type Tag = {
  name: string
  selected: boolean
}

type TagsProps = {
  tags: Tag[]
  setTags: Function
}

export default function FilterTags({ tags, setTags }: TagsProps) {
  const styles = {
    tag: `
    inline-block 
    bg-neutralBgSoft
    text-onNeutral
    rounded-full 
    px-4 
    mr-2
    mb-2 
    transition
    duration-75
    cursor-pointer 
    shadow
    `,

    tagActive: `
    transition
    duration-75 
    inline-block
    bg-primary
    shadow-inner
    text-light
    rounded-full
    px-4 
    mr-2 
    mb-2
    cursor-pointer 
    `,
  };

  return (
    <>
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
              className={t.selected ? styles.tagActive : styles.tag}
            >
              <button
                type="button"
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
    </>
  );
}

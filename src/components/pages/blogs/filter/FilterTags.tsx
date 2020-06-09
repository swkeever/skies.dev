import React from 'react';

export type Tag = {
  name: string;
  selected: boolean;
};

type TagsProps = {
  tags: Tag[];
  setTags: Function;
};

export default function FilterTags({ tags, setTags }: TagsProps) {
  const styles = {
    tag: `
    bg-neutralBgSoft
    text-onNeutral
    shadow
    `,

    tagActive: `
    bg-primary
    shadow-inner
    text-light
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
              className={`${t.selected ? styles.tagActive : styles.tag}
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
    </>
  );
}

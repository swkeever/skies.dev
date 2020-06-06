import React from "react"
import { FaSistrix } from "react-icons/fa"
import BlogsContainer from "./BlogsContainer"

type InputProps = {
  filter: string
  setFilter: Function
}

function Input({ filter, setFilter }: InputProps) {
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
            onChange={e => {
              setFilter(e.target.value)
            }}
            className={`
            -mt-8
            bg-neutralBgSoft
            w-9/12
            rounded-md
            text-onPrimary
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
  )
}

type TagsProps = {
  tags: Tag[]
  setTags: Function
}

function Tags({ tags, setTags }: TagsProps) {
  const styles = {
    tag: `
    inline-block 
    bg-neutral
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
  }

  return (
    <>
      <label className="block font-bold mt-4 -mb-2" htmlFor="tags">
        I'm interested in
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
                  const newTags = tags.slice()
                  newTags[idx] = {
                    name: t.name,
                    selected: !t.selected,
                  }
                  setTags(newTags)
                }}
              >
                {t.name}
              </button>
            </li>
          ))}
        </ul>
      </label>
    </>
  )
}

type FiltersProps = {
  filter: string
  setFilter: Function
  tags: Tag[]
  setTags: Function
}

type Tag = {
  name: string
  selected: boolean
}

export default function Filters({
  filter,
  setFilter,
  tags,
  setTags,
}: FiltersProps) {
  return (
    <BlogsContainer>
      <Input filter={filter} setFilter={setFilter} />
      <Tags tags={tags} setTags={setTags} />
    </BlogsContainer>
  )
}

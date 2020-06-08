import React from 'react';
import LabelSpan from './LabelSpan';

type InputPropTypes = {
  value: string
  setValue: Function
  label: string
  placeholder: string
  name: string
  id: string
  type: string
}

const inputStyles = `
  bg-neutralBgSoft 
  shadow-inner 
  outline-none
  focus:shadow-focus
  rounded
  w-full
  rounded-md
  px-2 
  py-1
  placeholder-onNeutralSoft
  text-onNeutral
  mb-2
`;

export function TextArea({
  value,
  setValue,
  label,
  placeholder,
  name,
  id,
}: {
  value: string
  setValue: Function
  label: string
  placeholder: string
  name: string
  id: string
}) {
  return (
    <label htmlFor={name}>
      <LabelSpan label={label} />
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={`${inputStyles}
          h-32
          resize-none
        `}
        name={name}
        id={id}
        required
      />
    </label>
  );
}

export function Input({
  value,
  setValue,
  label,
  placeholder,
  name,
  id,
  type,
}: InputPropTypes) {
  return (
    <label htmlFor={name}>
      <LabelSpan label={label} />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={inputStyles}
        name={name}
        id={id}
        type={type}
        required
      />
    </label>
  );
}

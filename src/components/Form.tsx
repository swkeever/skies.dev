import React, { useState } from 'react';
import globalStyles from '@styles/index';

function LabelSpan({ label }: { label: string }) {
  return (
    <span
      className={`
        text-neutralSoft
        tracking-widest
        text-sm
      `}
    >
      {label}
    </span>
  );
}

const inputStyles = `
  appearance-none
  bg-neutralBgSoft 
  border border-neutralBgSofter
  ${globalStyles.outline}
  ${globalStyles.transitions}
  w-full
  rounded-md
  px-2 
  py-1
  text-onNeutralBg
  mb-2
  lg:mb-4 
  lg:py-2
`;

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <form
      autoComplete="off"
      method="post"
      action="https://formspree.io/maypervg"
      className={`
        w-auto
        clearfix
      `}
    >
      <input type="text" name="_gotcha" className="hidden" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 xl:gap-x-5">
        <label htmlFor="name">
          <LabelSpan label="Name" />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyles}
            name="name"
            id="name"
            type="text"
            required
          />
        </label>
        <label htmlFor="email">
          <LabelSpan label="Email" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyles}
            name="email"
            id="email"
            type="email"
            required
          />
        </label>
      </div>

      <label htmlFor={subject}>
        <LabelSpan label="Subject" />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputStyles}
          name="subject"
          id="subject"
          type="text"
          required
        />
      </label>

      <label htmlFor={name}>
        <LabelSpan label="Message" />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputStyles}
            h-48
            resize-none
          `}
          name="message"
          id="message"
          required
        />
      </label>
      <button
        className={`float-right
          inline-block
          bg-primaryBold hover:bg-primary
          text-onPrimary
          rounded-full
          ${globalStyles.transitions}
          ${globalStyles.outline}
          px-4       
          py-2 
          font-bold
          lg:px-8 
          lg:text-lg
        `}
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

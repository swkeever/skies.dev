import React, { useState } from 'react';
import globalStyles from '@styles/index';
import tw from '@utils/tailwind';

function LabelSpan({ label }: { label: string }) {
  return (
    <span
      className={`
        text-neutral
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
      className={tw('w-auto clearfix')}
    >
      <input type="text" name="_gotcha" className="hidden" />
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 xl:gap-x-5">
        <label htmlFor="name">
          <LabelSpan label="Name" />
          <input
            value={name}
            onChange={(e) => setName(() => e.target.value)}
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
            onChange={(e) => setEmail(() => e.target.value)}
            className={inputStyles}
            name="email"
            id="email"
            type="email"
            required
          />
        </label>
      </section>

      <label htmlFor={subject}>
        <LabelSpan label="Subject" />
        <input
          value={subject}
          onChange={(e) => setSubject(() => e.target.value)}
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
          onChange={(e) => setMessage(() => e.target.value)}
          className={tw(inputStyles, 'h-48', 'resize-none')}
          name="message"
          id="message"
          required
        />
      </label>
      <button
        className={tw(
          'float-right',
          'inline-block',
          'bg-primaryBold hover:bg-primary',
          'text-onPrimary',
          'rounded-full',
          globalStyles.transitions,
          globalStyles.outline,
          'px-4 py-2 lg:px-8',
          'font-bold',
          'lg:text-lg',
          'shadow',
        )}
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

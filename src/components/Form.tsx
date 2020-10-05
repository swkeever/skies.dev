import React, { useState } from 'react';
import globalStyles from '@styles/index';
import tw from '@utils/tailwind';

const inputStyles = tw(
  'appearance-none',
  'bg-neutralBgSoft',
  'border border-neutralBgSofter',
  globalStyles.outline,
  globalStyles.transitions,
  'w-full',
  'rounded-md',
  'px-2 py-1 lg:py-2',
  'text-onNeutralBg',
  'mb-2 lg:mb-4',
);

const labelStyles = tw('text-neutralBold');

export default function Form() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [subject, setSubject] = useState<string>('');

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
          <span className={labelStyles}>Name</span>
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
          <span className={labelStyles}>Email</span>
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
      </section>

      <label htmlFor="subject">
        <span className={labelStyles}>Subject</span>
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

      <label htmlFor="message">
        <span className={labelStyles}>Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
          'rounded-lg',
          globalStyles.transitions,
          globalStyles.outline,
          'py-3 px-10',
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

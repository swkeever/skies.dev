import React, { useState } from 'react';
import globalStyles from '@styles/index';
import tw from '@utils/tailwind';
import { AnalyticsAction, AnalyticsCategory, track } from '@utils/analytics';
import { useLocation } from '@reach/router';

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
  const { pathname } = useLocation();

  return (
    <form
      autoComplete="off"
      method="post"
      action="https://formspree.io/maypervg"
      className={tw('w-auto')}
    >
      <input type="text" name="_gotcha" className="hidden" />
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 xl:gap-x-5">
        <label htmlFor="name">
          <span className={labelStyles}>Name</span>
          <input
            autoComplete="off"
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
            autoComplete="off"
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
          autoComplete="off"
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
          autoComplete="off"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={tw(inputStyles, 'h-48', 'resize-none')}
          name="message"
          id="message"
          required
        />
      </label>
      <button
        onClick={() => {
          if (!name || !email || !subject || !message) {
            // Form has not been filled out
            return;
          }
          track({
            category: AnalyticsCategory.Contact,
            action: AnalyticsAction.SendEmail,
            label: pathname,
          });
        }}
        className={tw(
          'flex justify-end',
          'inline-block',
          'bg-primary hover:bg-primaryBold',
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

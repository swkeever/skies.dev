import React, { useState, useEffect } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import randomQuote from '../../utils/quotes';
import { toHandle } from '../../utils/strings';
import Button from '../Button';

function LabelSpan({ label }: { label: string }) {
  return (
    <span
      className={`
        text-neutral
        tracking-widest
        uppercase
        text-xs
      `}
    >
      {label}
    </span>
  );
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

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [placeholder, setPlaceholder] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const { quote, author } = randomQuote();
    setPlaceholder({
      name: author,
      email: `${toHandle(author)}@example.com`,
      message: quote,
    });
  }, []);

  return (
    <form
      method="post"
      action="https://formspree.io/maypervg"
      className={`
        w-auto
        clearfix
      `}
    >
      <input type="text" name="_gotcha" className="hidden" />
      <label htmlFor="name">
        <LabelSpan label="Name" />
        <input
          value={email}
          onChange={(e) => setName(e.target.value)}
          placeholder={placeholder.email}
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
          placeholder={placeholder.email}
          className={inputStyles}
          name="email"
          id="email"
          type="email"
          required
        />
      </label>
      <label htmlFor={name}>
        <LabelSpan label="Message" />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder.message}
          className={`${inputStyles}
            h-32
            resize-none
          `}
          name="message"
          id="message"
          required
        />
      </label>
      <Button
        tag="button"
        color="primary"
        className="float-right"
        type="submit"
      >
        Send
        <span
          className={`
          inline-block
          ml-1
          align-text-top
          text-light
          opacity-75
        `}
        >
          <FaTelegramPlane />
        </span>
      </Button>
    </form>
  );
}

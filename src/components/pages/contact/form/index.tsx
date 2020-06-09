import React, { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { Input, TextArea } from './Field';
import Gotcha from './Gotcha';
import randomQuote from '../../../../utils/quotes';
import { toHandle } from '../../../../utils/strings';
import Button from '../../../Button';

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
      <Gotcha />
      <Input
        value={name}
        setValue={setName}
        placeholder={placeholder.name}
        label="Name"
        name="name"
        id="name"
        type="text"
      />
      <Input
        value={email}
        setValue={setEmail}
        placeholder={placeholder.email}
        label="Email"
        type="email"
        name="_replyto"
        id="email"
      />
      <TextArea
        value={message}
        setValue={setMessage}
        label="Message"
        placeholder={placeholder.message}
        name="message"
        id="message"
      />
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
          <FiSend />
        </span>
      </Button>
    </form>
  );
}

import React, { useState, useEffect } from 'react';
import { Input, TextArea } from './Field';
import Gotcha from './Gotcha';
import Buttons from './buttons';
import randomQuote from '../../../../utils/quotes';
import { toHandle } from '../../../../utils/strings';

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
      <Buttons setName={setName} setEmail={setEmail} setMessage={setMessage} />
    </form>
  );
}

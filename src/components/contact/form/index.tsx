import React, { useState } from 'react';
import { Input, TextArea } from './Field';
import Gotcha from './Gotcha';
import Buttons from './buttons';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
        placeholder="Bob Ross"
        label="Name"
        name="name"
        id="name"
        type="text"
      />
      <Input
        value={email}
        setValue={setEmail}
        placeholder="bob.ross@example.com"
        label="Email"
        type="email"
        name="_replyto"
        id="email"
      />
      <TextArea
        value={message}
        setValue={setMessage}
        label="Message"
        placeholder="There are no mistakes, only happy accidents."
        name="message"
        id="message"
      />
      <Buttons setName={setName} setEmail={setEmail} setMessage={setMessage} />
    </form>
  );
}

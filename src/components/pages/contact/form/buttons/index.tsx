import React from 'react';
import Reset from './Reset';
import Send from './Send';

export default function Buttons({
  setMessage,
  setEmail,
  setName,
}: {
  setMessage: Function;
  setEmail: Function;
  setName: Function;
}) {
  return (
    <div
      className={`
        flex
        justify-end
      `}
    >
      <Reset setMessage={setMessage} setName={setName} setEmail={setEmail} />
      <Send />
    </div>
  );
}

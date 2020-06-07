import React from 'react';

export default function Reset({
  setName,
  setEmail,
  setMessage,
}: {
  setName: Function
  setEmail: Function
  setMessage: Function
}) {
  return (
    <button
      type="button"
      className={`
                px-4
                hover:pt-0
                mr-2
                text-onNeutral
                hover:border-b
                hover:border-neutral
                focus:outline-none
          `}
      onClick={() => {
        setName('');
        setEmail('');
        setMessage('');
      }}
    >
      Reset
    </button>
  );
}

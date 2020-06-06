import React from 'react';
import { FiSend } from 'react-icons/fi';

export default function Send() {
  return (
    <button
      type="submit"
      className={`
        bg-primary
        rounded-full
        px-6
        py-2
        text-light
        font-bold
        shadow
        active:shadow-none
        focus:outline-none
      `}
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
    </button>
  );
}

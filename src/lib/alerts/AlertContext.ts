import { createContext } from 'react';

const AlertContext = createContext({
  show: () => {
    // eslint-disable-next-line no-console
    console.warn('alert.show() was called before initialization.');
  },
});

export default AlertContext;

import { createContext } from 'react';

const AlertContext = createContext({
  show: () => {
    throw Error('alert.show() was called before initialization.');
  },
});

export default AlertContext;

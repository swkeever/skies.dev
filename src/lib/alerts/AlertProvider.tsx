import React, { ReactNode, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertContext from './AlertContext';
import {
  AlertOptions, ShowFunction, RemoveFunction, Alert,
} from './alerts';
import AlertTemplate from './AlertTemplate';

const defaultOptions: AlertOptions = {
  duration: undefined,
  type: 'info',
};

let uuid = 0;

export default function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const show: ShowFunction = (message, options = {}) => {
    uuid += 1;
    setAlerts(
      alerts.concat({
        id: uuid,
        message,
        options: {
          ...defaultOptions,
          ...options,
        },
      }),
    );
  };

  const remove: RemoveFunction = (alert) => {
    setAlerts((as) => as.filter((a) => a.id !== alert.id));
  };

  return (
    <AlertContext.Provider value={{ show }}>
      <TransitionGroup>
        {alerts.map((alert, index) => (
          <CSSTransition key={alert.id} timeout={500} classNames="alert">
            <AlertTemplate index={index} alert={alert} removeAlert={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>

      {children}
    </AlertContext.Provider>
  );
}

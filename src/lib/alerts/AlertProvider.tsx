import React, { ReactNode, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertContext from './AlertContext';
import {
  AlertOptions, ShowFunction, RemoveFunction, Alert,
} from './alerts';
import AlertTemplate from './AlertTemplate';

const defaultOptions: AlertOptions = {
  durationSeconds: undefined,
  type: 'info',
};

export default function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const show: ShowFunction = (message, options = {}) => {
    setAlerts((as) => as.concat({
      id: Date.now(),
      message,
      options: {
        ...defaultOptions,
        ...options,
      },
    }));
  };

  const remove: RemoveFunction = (alert) => {
    setAlerts((as) => as.filter((a) => a.id !== alert.id));
  };

  return (
    <AlertContext.Provider value={{ show }}>
      <div className="fixed md:left-1 lg:right-1 lg:left-auto top-2 lg:top-16 z-50">
        <TransitionGroup className="flex flex-col space-y-2">
          {alerts.map((alert) => (
            <CSSTransition key={alert.id} timeout={200} classNames="alert">
              <AlertTemplate alert={alert} removeAlert={remove} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>

      {children}
    </AlertContext.Provider>
  );
}

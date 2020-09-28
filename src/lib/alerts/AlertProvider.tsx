import React, { ReactNode, useState } from 'react';
import hash from '@utils/hash';
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
    const hashCode = hash(message);

    if (alerts.filter((a) => a.id === hashCode).length > 0) {
      // Already have this alert. Ignoring.
      return;
    }

    setAlerts((as) => as.concat({
      id: hashCode,
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
      <div className="fixed left-1/2 transform -translate-x-1/2 top-2 lg:top-12 lg:translate-y-px z-50">
        <div className="flex flex-col">
          {alerts.map((alert) => (
            <div initial="hidden" animate="visible">
              <AlertTemplate alert={alert} removeAlert={remove} />
            </div>
          ))}
        </div>
      </div>

      {children}
    </AlertContext.Provider>
  );
}

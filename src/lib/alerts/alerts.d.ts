type AlertOptions = {
  duration?: number;
  type?: 'success' | 'info' | 'warning' | 'error';
};

export type Alert = {
  id: number;
  message: string;
  options: AlertOptions;
};

export type ShowFunction = (message: string, options?: AlertOptions) => void;

export type RemoveFunction = (alert: Alert) => void;

export type AlertClient = {
  show: ShowFunction;
};

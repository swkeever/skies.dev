import React, { useEffect } from 'react';
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaRegTimesCircle,
  FaInfoCircle,
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { globalStyles } from '../../styles';
import { Alert, RemoveFunction } from './alerts';

const colors = {
  info: {
    bg: 'bg-primaryBg border-primary',
    text: 'text-onPrimaryBgSoft',
    Icon: ({ className }) => (
      <FaInfoCircle className={`${className} text-primary`} />
    ),
    button: 'text-primaryBold hover:bg-primaryBgSoft focus:bg-primaryBgSoft',
  },
  success: {
    bg: 'bg-successBg border-success',
    text: 'text-onSuccessBg',
    Icon: ({ className }) => (
      <FaCheckCircle className={`${className} text-success`} />
    ),
    button: 'text-successBold hover:bg-successBgSoft focus:bg-successBgSoft',
  },
  warning: {
    bg: 'bg-warningBg border-warning',
    text: 'text-onWarningBgSoft',
    Icon: ({ className }) => (
      <FaExclamationTriangle className={`${className} text-warning`} />
    ),
    button: 'text-warningBold hover:bg-warningBgSoft focus:bg-warningBgSoft',
  },
  error: {
    bg: 'bg-dangerBg border-danger',
    text: 'text-onDangerBgSoft',
    Icon: ({ className }) => (
      <FaRegTimesCircle className={`${className} text-danger`} />
    ),
    button: 'text-dangerBold hover:bg-dangerBgSoft focus:bg-dangerBgSoft',
  },
};

type PropTypes = {
  alert: Alert;
  removeAlert: RemoveFunction;
};

export default function AlertTemplate({ alert, removeAlert }: PropTypes) {
  const onDelete = () => removeAlert(alert);

  const styles = colors[alert.options.type];

  useEffect(() => {
    const timer = alert.options.duration
      ? setTimeout(onDelete, alert.options.duration)
      : null;
    return () => timer && clearTimeout(timer);
  }, []);

  return (
    <div
      className={` 
      w-screen 
      md:w-96 
       px-2 shadow-2xl
      ${globalStyles.transitions}
      `}
    >
      <div className={`${styles.bg} border-l-4 rounded-sm p-4`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <styles.Icon className="h-5 w-5" />
          </div>
          <div className="ml-3">
            <p className={`text-sm leading-5 font-medium ${styles.text}`}>
              {alert.message}
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={onDelete}
                className={`
                inline-flex 
                rounded-md 
                p-1.5 
                focus:outline-none  
                ${globalStyles.transitions}
                ${styles.button}
                `}
                aria-label="Dismiss"
              >
                <IoMdClose className="h-5 w-5 text-current fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

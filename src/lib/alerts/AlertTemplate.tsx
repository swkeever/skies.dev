import React, { useEffect } from 'react';
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from 'react-icons/fa';
import { IoMdClose, IoIosCloseCircle } from 'react-icons/io';
import globalStyles from '@styles/index';
import { Alert, RemoveFunction } from './alerts';

const colors = {
  info: {
    bg: 'bg-infoBg border-info',
    text: 'text-onInfoBgSoft',
    Icon: ({ className }) => (
      <FaInfoCircle className={`${className} text-info`} />
    ),
    button: 'text-infoBold hover:bg-infoBgSoft focus:bg-infoBgSoft',
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
      <IoIosCloseCircle className={`${className} text-danger`} />
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
    if (alert.options.durationSeconds) {
      const timer = setTimeout(onDelete, alert.options.durationSeconds * 1000);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, []);

  return (
    <div
      role="alert"
      className={` 
      w-screen 
      md:max-w-lg xl:max-w-xl
      md:w-screen
      px-2 
      ${globalStyles.transitions}
      `}
    >
      <div
        className={`
        ${styles.bg} 
        shadow-2xl
        border-l-4 
        rounded-sm 
        p-4
        `}
      >
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

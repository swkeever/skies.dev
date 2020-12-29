import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import globalStyles from '@styles/index';
import {
  AnalyticsAction,
  AnalyticsCategory,
  AnalyticsEvent,
  AnalyticsLabel,
  track,
} from '@utils/analytics';
import tw from '@utils/tailwind';
import {
  LayoutContext, ldKey, rgbKey, themes,
} from './layout';

const styles = {
  shadows: 'shadow-xl lg:shadow-none',
  icon: tw(
    'h-4 w-4',
    'text-onPrimarySoft',
    'fill-current',
    globalStyles.transitions,
  ),
  transform: tw('transform', 'scale-100 active:scale-95'),
  size: {
    small: 'h-6 w-6',
  },
  themeIcon: tw(
    'opacity-100 ease-in duration-200',
    'h-4 w-4',
    'flex items-center justify-center',
    'transition-opacity',
    'mx-auto',
  ),
};

export default function ThemeToggle() {
  const {
    lightTheme, setLightTheme, theme, setTheme,
  } = useContext(
    LayoutContext,
  );

  return (
    <>
      <div className={tw('flex items-center', 'space-x-3', 'mr-4')}>
        {themes.map((th, index) => {
          const isActive = index === theme;
          const colors = isActive ? th.color.active : th.color.inactive;
          return (
            <button
              key={th.name}
              type="button"
              className={tw(
                colors.bg,
                colors.border,
                styles.size.small,
                isActive ? tw('scale-110') : tw('scale-100'),
                'active:scale-95 transform',
                'block',
                'rounded-full',
                styles.shadows,
                styles.transform,
                'border',
                globalStyles.transitions,
                globalStyles.outline,
              )}
              onClick={() => {
                const event: AnalyticsEvent = {
                  category: AnalyticsCategory.Themes,
                  action: AnalyticsAction.Switch,
                  label: th.name,
                };

                track(event);

                window.localStorage.setItem(rgbKey, index.toString());

                setTheme(() => index);
              }}
            >
              <span className="sr-only">
                Change to
                {th.name}
                {' '}
                theme
              </span>
              <span
                className={tw(styles.themeIcon, styles.transform, colors.bg)}
              />
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className={tw(
          'bg-neutralBgSoft',
          'inline-flex items-center flex-shrink-0',
          styles.shadows,
          'h-8 w-16',
          'border border-primaryBgSoft',
          'shadow-xl lg:shadow-none',
          'rounded-full',
          'cursor-pointer',
          globalStyles.transitions,
          globalStyles.outline,
          styles.transform,
        )}
        onClick={() => {
          const event: AnalyticsEvent = {
            category: AnalyticsCategory.Themes,
            action: AnalyticsAction.Switch,
            label: lightTheme ? AnalyticsLabel.Dark : AnalyticsLabel.Light,
          };

          track(event);

          window.localStorage.setItem(ldKey, lightTheme ? 'false' : 'true');

          setLightTheme(!lightTheme);
        }}
      >
        <span className="sr-only">Change light/dark mode</span>
        <span
          aria-hidden="true"
          className={tw(
            lightTheme ? 'translate-x-0' : 'translate-x-8',
            'relative',
            'inline-block',
            styles.size.small,
            'rounded-full',
            'bg-primaryBold',
            'shadow',
            'ml-1',
            styles.transform,
            globalStyles.transitions,
          )}
        >
          <span
            className={tw(
              'opacity-100 ease-in duration-200',
              'absolute inset-0',
              'h-full w-full',
              'flex items-center justify-center',
              'transition-opacity',
            )}
          >
            {lightTheme ? (
              <FaMoon className={styles.icon} />
            ) : (
              <FaSun className={styles.icon} />
            )}
          </span>
        </span>
      </button>
    </>
  );
}

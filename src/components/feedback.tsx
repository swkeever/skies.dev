import { useLocation } from '@reach/router';
import globalStyles from '@styles/index';
import {
  AnalyticsAction,
  AnalyticsCategory,
  AnalyticsEvent,
  track,
} from '@utils/analytics';
import tw from '@utils/tailwind';
import React, { useState } from 'react';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { Transition } from '@headlessui/react';
import useAlert from '@lib/alerts/use-alert';

const styles = {
  icon: tw('flex justify-center', 'w-auto'),
  button: (checked: boolean): string => tw(
    'h-12 w-full',
    checked ? tw('text-primaryBold') : 'text-neutralBold ',
    'flex justify-center items-center',
    'hover:bg-neutralBgSoft',
    globalStyles.transitions,
    'transform active:scale-95',
    'shadow-xs active:shadow-none',
    globalStyles.outline,
  ),
  p: tw('mt-4 text-sm leading-6 text-neutral'),
  label: tw('block text-sm font-medium leading-5 text-onNeutralBgSofter'),
  inputContainer: tw('mt-1 relative rounded-md shadow-sm'),
  input: tw(
    'py-3 px-4',
    'block w-full',
    'rounded',
    'appearance-none',
    'bg-neutralBg',
    'border border-neutralBgSofter',
    globalStyles.outline,
  ),
};

export default function Feedback() {
  const { pathname } = useLocation();
  const alert = useAlert();
  const [action, setAction] = useState<AnalyticsAction>(
    AnalyticsAction.Dismiss,
  );

  function trackAction(nextAction: AnalyticsAction) {
    const event: AnalyticsEvent = {
      category: AnalyticsCategory.Blogs,
      action: nextAction,
      label: pathname,
    };

    track(event);
    setAction(nextAction);
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLButtonElement>,
  ): Promise<void> {
    e.preventDefault();

    track({
      category: AnalyticsCategory.Feedback,
      action: AnalyticsAction.SendEmail,
      label: pathname,
    });

    alert.show('Thanks for your feedback!');
  }

  return (
    <>
      <section className={tw('mx-auto my-16', 'max-w-screen-xl', 'clearfix')}>
        <h2 className={tw('mb-8', 'text-neutralBold')}>Was this helpful?</h2>
        <div
          className={tw(
            'flex justify-center items-center',
            'relative',
            'w-56',
            'border border-neutralSoft',
            'rounded-lg',
            'text-2xl',
          )}
        >
          <button
            onClick={() => {
              trackAction(AnalyticsAction.Like);
            }}
            type="button"
            className={tw(
              styles.button(action === AnalyticsAction.Like),
              'border-r border-neutralSoft',
              'rounded-l-lg',
            )}
          >
            <span className="sr-only">Yes</span>
            <FaThumbsUp className={styles.icon} />
          </button>
          <button
            onClick={() => {
              trackAction(AnalyticsAction.Dislike);
            }}
            type="button"
            className={tw(
              styles.button(action === AnalyticsAction.Dislike),
              'rounded-r-lg',
            )}
          >
            <span className="sr-only">No</span>
            <FaThumbsDown className={styles.icon} />
          </button>
        </div>
        <Transition
          show={action !== AnalyticsAction.Dismiss}
          {...globalStyles.fadeTransition}
        >
          <form
            autoComplete="off"
            method="post"
            action="https://formspree.io/maypervg"
            className={tw(
              'grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8',
              'mt-8',
            )}
          >
            <div className="sm:col-span-2">
              <label htmlFor="email" className={styles.label}>
                Email
                <div className={styles.inputContainer}>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className={tw(styles.input, globalStyles.transitions)}
                  />
                </div>
              </label>
            </div>
            <input type="text" name="_gotcha" className="hidden" />
            <div className="sm:col-span-2">
              <label htmlFor="message" className={styles.label}>
                Feedback
                <div className={styles.inputContainer}>
                  <textarea
                    id="message"
                    name="feedback"
                    rows={4}
                    required
                    className={tw(styles.input, globalStyles.transitions)}
                  />
                </div>
              </label>
            </div>
            <div className="sm:col-span-2">
              <span className="w-full inline-flex rounded-md shadow-sm">
                <button
                  onSubmit={handleSubmit}
                  type="submit"
                  className={tw(
                    'w-full',
                    'inline-flex items-center justify-center',
                    'px-6 py-3',
                    'border border-transparent',
                    'text-base leading-6 font-medium',
                    'rounded-md',
                    'bg-primaryBold hover:bg-primary text-white',
                    'active:bg-onPrimaryBgSofter',
                    globalStyles.transitions,
                    globalStyles.outline,
                  )}
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
          <button
            onClick={() => {
              trackAction(AnalyticsAction.Dismiss);
            }}
            type="button"
            className={tw(
              'block float-right',
              globalStyles.transitions,
              globalStyles.outline,
              'mt-4',
              'rounded-md',
              'text-neutralBold hover:text-onNeutralBgSofter',
            )}
          >
            Dismiss
          </button>
        </Transition>
      </section>
    </>
  );
}

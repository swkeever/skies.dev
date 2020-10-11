import React from 'react';
import useAlert from '@lib/alerts/use-alert';
import globalStyles from '@styles/index';
import tw from '@utils/tailwind';
import {
  AnalyticsAction,
  AnalyticsCategory,
  AnalyticsEvent,
  track,
} from '@utils/analytics';
import { useLocation } from '@reach/router';

const colors = {
  primary: {
    section: 'bg-primary',
    h2: 'text-onPrimary',
    h2Span: 'text-onPrimaryBg',
    button: 'text-primaryBgSoft bg-onPrimaryBgSoft hover:bg-onPrimaryBg',
    selectAll: 'text-onPrimary hover:bg-primaryBold',
    p: 'text-onPrimary',
    h3: 'text-onPrimary',
    typewriter: '',
    tag: {
      unchecked: 'bg-primaryBgSoft text-onPrimaryBgSoft hover:bg-primaryBg',
      checked:
        'bg-onPrimaryBgSoft text-onPrimary hover:bg-onPrimaryBgSofter border-onPrimary',
    },
    label: tw('text-onPrimaryBgSofter'),
    input: tw(
      'border border-primaryBgSofter focus:border-primaryBgSofter',
      'bg-neutralBg',
      'text-gray-800 placeholder-neutral',
    ),
  },
  primarySoft: {
    section: 'bg-primaryBg',
    h2: 'text-onPrimaryBg',
    h2Span: 'text-onPrimaryBgSofter',
    button: 'text-onPrimary bg-primaryBold hover:bg-primary',
    selectAll: 'text-onPrimaryBg hover:bg-primaryBgSoft',
    p: 'text-onPrimaryBgSoft',
    h3: 'text-onPrimaryBgSoft',
    typewriter: 'text-onPrimaryBgSofter',
    tag: {
      unchecked: 'bg-neutralBg text-onPrimaryBgSoft hover:bg-primaryBgSoft',
      checked: 'bg-primary text-onPrimary hover:bg-primary',
    },
    label: tw('text-primaryBold'),
    input: tw(
      'border border-primaryBgSofter focus:border-primaryBgSofter',
      'bg-white',
      'text-gray-800 placeholder-neutral',
    ),
  },
  neutral: {
    section: 'bg-neutralBg',
    h2: 'text-onNeutralBgSoft',
    h2Span: 'text-onPrimaryBgSofter',
    button: 'text-onPrimary bg-primaryBold hover:bg-primary',
    selectAll: 'text-onNeutralBg hover:bg-neutralBgSoft',
    p: 'text-neutral',
    h3: 'text-onNeutralBgSoft',
    typewriter: 'text-onNeutralBg',
    tag: {
      unchecked: 'bg-primaryBg text-onPrimaryBgSoft hover:bg-primaryBgSoft',
      checked: 'bg-primaryBold text-onPrimary hover:bg-primary',
    },
    label: tw('text-neutral'),
    input: tw(
      'border border-neutralBgSofter focus:border-primaryBgSofter',
      'bg-neutralBgSoft',
      'text-gray-800 placeholder-neutralSoft',
    ),
  },

  neutralSoft: {
    section: 'bg-neutralBgSoft',
    h2: 'text-onNeutralBgSoft',
    h2Span: 'text-onPrimaryBgSofter',
    button: 'text-onPrimary bg-primaryBold hover:bg-primary',
    selectAll: 'text-onNeutralBg hover:bg-neutralBgSofter',
    p: 'text-neutral',
    h3: 'text-onNeutralBgSoft',
    typewriter: 'text-onNeutralBg',
    tag: {
      unchecked: 'bg-primaryBg text-onPrimaryBgSoft hover:bg-primaryBgSoft',
      checked: 'bg-primaryBold text-onPrimary hover:bg-primary',
    },
    label: tw('text-neutralBold'),
    input: tw(
      'border border-neutralBgSofter focus:border-primaryBgSofter',
      'bg-neutralBg',
      'text-gray-800 placeholder-neutralSoft',
    ),
  },
};

const localStyles = {
  input: tw(
    'appearance-none',
    'w-full',
    'p-3',
    'leading-6',
    'rounded-lg',
    globalStyles.outline,
    globalStyles.transitions,
  ),
  label: tw(''),
};

type PropTypes = {
  color: 'primary' | 'neutral' | 'neutralSoft' | 'primarySoft';
};

export default function Newsletter({ color }: PropTypes) {
  const { pathname } = useLocation();
  const alert = useAlert();

  const FORM_ID = '1598476';
  const FORM_URL = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event: AnalyticsEvent = {
      category: AnalyticsCategory.Newsletter,
      action: AnalyticsAction.Subscribe,
      label: pathname,
    };

    track(event);

    const data = new FormData(e.target);

    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      });

      const json = await response.json();

      if (json.status === 'success') {
        const message = `
        Please verify your email to confirm your subscription.

        Check your spam if you don't see it.
        `;
        alert.show(message, {
          type: 'success',
        });
      } else {
        const message = `
        A ${response.status} occurred. Try again?
        `;
        alert.show(message, {
          type: 'error',
        });
      }
    } catch (err) {
      const message = `
      An error occurred: ${err.message}
      `;
      alert.show(message, {
        type: 'error',
      });
    }
  };

  const styles = colors[color];

  return (
    <section className={tw(styles.section, globalStyles.transitions)}>
      <div
        className={tw(
          'mx-auto max-w-2xl',
          'w-full relative',
          'py-12 px-4 lg:py-24 2xl:py-32 lg:px-8',
        )}
      >
        <h2
          className={tw(
            'text-3xl md:text-4xl leading-9 font-extrabold tracking-tight sm:leading-10',
            globalStyles.transitions,
            styles.h2,
          )}
        >
          Get articles straight to your inbox
          <div
            className={tw(styles.h2Span, globalStyles.transitions)}
            id="newsletter-headline"
          >
            Sign up for the newsletter
          </div>
        </h2>
        <p className={tw('mt-2', styles.p, globalStyles.transitions)}>
          I will not send you spam. Unsubscribe at any time.
        </p>

        <form
          action={FORM_URL}
          method="post"
          onSubmit={handleSubmit}
          className={tw('mt-4')}
          aria-labelledby="newsletter-headline"
        >
          <label htmlFor="first_name">
            <span className={tw(localStyles.label, styles.label)}>
              First name
            </span>
            <input
              id="first_name"
              autoComplete="off"
              aria-label="Your first name"
              type="text"
              name="fields[first_name]"
              className={tw(localStyles.input, styles.input)}
              placeholder="John"
            />
          </label>

          <label className={tw('mt-4', 'block')} htmlFor="email_addr">
            <span className={tw(localStyles.label, styles.label)}>Email</span>
            <input
              id="email_addr"
              autoComplete="off"
              aria-label="Email address"
              type="email"
              name="email_address"
              required
              className={tw(localStyles.input, styles.input)}
              placeholder="john.doe@example.com"
            />
          </label>

          <button
            type="submit"
            className={tw(
              globalStyles.transitions,
              globalStyles.outline,
              styles.button,
              'shadow',
              'mt-4',
              'py-3 px-6',
              'border border-transparent',
              'text-base leading-6 font-medium font-bold',
              'rounded-lg',
            )}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

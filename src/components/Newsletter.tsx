import React, { useState, useEffect, useRef } from 'react';
import { setInterval, clearInterval } from 'timers';
import useAlert from '@lib/alerts/use-alert';
import globalStyles from '@styles/index';
import blogTags from '@utils/blog-tags';
import useTypeWriter from '@lib/typewriter/use-typewriter';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import tw from '@utils/tailwind';

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
  },
  neutral: {
    section: 'bg-neutralBg',
    h2: 'text-onNeutralBgSoft',
    h2Span: 'text-primaryBold',
    button: 'text-onPrimary bg-primaryBold hover:bg-primary',
    selectAll: 'text-onNeutralBg hover:bg-neutralBgSoft',
    p: 'text-neutral',
    h3: 'text-onNeutralBgSoft',
    typewriter: 'text-onNeutralBg',
    tag: {
      unchecked: 'bg-primaryBg text-onPrimaryBgSoft hover:bg-primaryBgSoft',
      checked: 'bg-primaryBold text-onPrimary hover:bg-primary',
    },
  },

  neutralSoft: {
    section: 'bg-neutralBgSoft',
    h2: 'text-onNeutralBgSoft',
    h2Span: 'text-primaryBold',
    button: 'text-onPrimary bg-primaryBold hover:bg-primary',
    selectAll: 'text-onNeutralBg hover:bg-neutralBgSofter',
    p: 'text-neutral',
    h3: 'text-onNeutralBgSoft',
    typewriter: 'text-onNeutralBg',
    tag: {
      unchecked: 'bg-primaryBg text-onPrimaryBgSoft hover:bg-primaryBgSoft',
      checked: 'bg-primaryBold text-onPrimary hover:bg-primary',
    },
  },
};

type PropTypes = {
  color: 'primary' | 'neutral' | 'neutralSoft' | 'primarySoft';
  tags?: string[];
  showTopics?: boolean;
  copy?: string;
};
let index = 0;

export default function Newsletter({
  color,
  tags = [],
  showTopics = false,
  copy = 'Get articles straight to your inbox',
}: PropTypes) {
  const intervalRef = useRef(null);
  const alert = useAlert();

  const [magicName, setMagicName] = useState('Software Engineering');
  const topic = useTypeWriter(magicName);
  const allTags = blogTags.map(({ name }) => name);
  const [selected, setSelected] = useState(tags.length > 0 ? tags : []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const currentName = allTags[index];
      while (currentName === allTags[index]) {
        index = Math.floor(Math.random() * allTags.length);
      }
      setMagicName(allTags[index]);
    }, 3500);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);

  const FORM_ID = '1598476';
  const FORM_URL = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: 'Subscribe Button',
      // string - required - Type of interaction (e.g. 'play')
      action: 'Click',
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: 'Newsletter Campaign',
    });

    if (selected.length === 0) {
      const message = `
      You must select at least one topic to subscribe to. Otherwise, you won't get any emails! 🙈
      `;
      alert.show(message, {
        type: 'warning',
        durationSeconds: 10,
      });
      return;
    }

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
  const h3Styles = `md:text-xl font-light mb-2 overflow-hidden whitespace-no-wrap ${globalStyles.transitions}`;

  return (
    <section className={`${styles.section}  ${globalStyles.transitions} `}>
      <div
        className={tw(
          'mx-auto max-w-2xl',
          'w-full relative',
          'py-12 px-4 lg:py-24 2xl:py-32 lg:px-8',
        )}
      >
        <h2
          className={`
            text-3xl md:text-4xl
            leading-9 font-extrabold tracking-tight sm:leading-10
            ${globalStyles.transitions}
            ${styles.h2}
        `}
        >
          {copy}
          <div
            className={`${styles.h2Span} ${globalStyles.transitions}`}
            id="newsletter-headline"
          >
            Sign up for the newsletter
          </div>
        </h2>
        <form
          action={FORM_URL}
          method="post"
          onSubmit={handleSubmit}
          className={`${showTopics ? 'mt-12' : 'mt-4'}
            
            flex-col flex space-y-5`}
          aria-labelledby="newsletter-headline"
        >
          <section className={`${showTopics ? '' : 'hidden'}`}>
            <h3 className={`${styles.h3} ${h3Styles}`}>
              Select topics you care about
            </h3>

            <ul className="mt-3 flex flex-wrap">
              {blogTags.map(({ id, name }) => {
                const isChecked = selected.includes(name);
                const tagId = id.toString();
                const formId = `tag-4516-${tagId}`;
                return (
                  <li key={tagId}>
                    <label htmlFor={formId}>
                      <input
                        className="hidden"
                        id={formId}
                        type="checkbox"
                        onChange={() => {
                          if (selected.includes(name)) {
                            setSelected(selected.filter((t) => t !== name));
                          } else {
                            setSelected(selected.concat(name));
                          }
                        }}
                        checked={isChecked}
                        name="tags[]"
                        value={tagId}
                      />
                      <div
                        role="button"
                        className={tw(
                          'mr-3 mb-3',
                          'px-2',
                          'rounded-full',
                          'font-medium',
                          globalStyles.transitions,
                          globalStyles.outline,
                          'transform',
                          isChecked
                            ? tw(
                              styles.tag.checked,
                              'translate-y-0 scale-100 shadow-xs',
                            )
                            : tw(
                              styles.tag.unchecked,
                              '-translate-y-1 scale-105 shadow-lg',
                            ),
                        )}
                      >
                        {name}
                      </div>
                    </label>
                  </li>
                );
              })}
            </ul>

            <button
              className={tw(
                globalStyles.transitions,
                globalStyles.outline,
                'float-right',
                'px-2 py-1',
                'rounded-full',
                'mt-2',
                styles.selectAll,
                globalStyles.transitions,
                globalStyles.outline,
              )}
              type="button"
              onClick={() => {
                if (selected.length === allTags.length) {
                  setSelected([]);
                } else {
                  setSelected(allTags);
                }
              }}
            >
              {selected.length === allTags.length
                ? 'Unselect all'
                : 'Select all'}
            </button>
          </section>

          <section>
            {!showTopics ? null : (
              <h3 className={tw(styles.h3, h3Styles)}>
                Get notified when I post about
                {' '}
                <span
                  className={tw(
                    globalStyles.transitions,
                    styles.typewriter,
                    'font-semibold',
                  )}
                >
                  {topic}
                </span>
              </h3>
            )}

            <input
              autoComplete="off"
              aria-label="Email address"
              type="email"
              name="email_address"
              required
              className={tw(
                'appearance-none',
                'w-full',
                'px-5 py-3',
                'border border-primaryBgSofter focus:border-primaryBgSofter',
                'text-base leading-6',
                'rounded-full',
                'text-onNeutralBg placeholder-neutral',
                globalStyles.outline,
                globalStyles.transitions,
              )}
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className={tw(
                globalStyles.transitions,
                globalStyles.outline,
                styles.button,
                'w-full',
                'mt-2',
                'flex items-center justify-center',
                'shadow',
                'py-3',
                'border border-transparent',
                'text-base leading-6 font-medium font-bold',
                'rounded-full',
              )}
            >
              Subscribe
            </button>
            <p
              className={`mt-1 font-light ${styles.p} ${globalStyles.transitions}`}
            >
              I will not send you spam. Unsubscribe at any time.
            </p>
          </section>
        </form>
      </div>
    </section>
  );
}

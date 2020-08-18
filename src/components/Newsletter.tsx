import React, { useState, useEffect, useRef } from 'react';
import { setInterval, clearInterval } from 'timers';
import useAlert from '@lib/alerts/use-alert';
import { globalStyles } from '@styles/index.js';
import blogTags from '@utils/blog-tags';
import useTypeWriter from '@hooks/use-typewriter';

const colors = {
  primary: {
    section: 'bg-primary',
    h2: 'text-onPrimarySoft',
    h2Span: 'text-onPrimaryBgSoft',
    button: 'text-primaryBgSoft bg-onPrimaryBgSoft hover:bg-onPrimaryBg',
    selectAll: 'text-onPrimary hover:bg-primaryBold',
    p: 'text-onPrimary',
    h3: 'text-onPrimary',
    typewriter: '',
    tag: {
      unchecked: 'bg-primaryBgSoft text-onPrimaryBgSoft hover:bg-primaryBg',
      checked:
        'bg-primaryBold text-onPrimary hover:bg-onPrimaryBgSofter border-onPrimary',
    },
  },
  primarySoft: {
    section: 'bg-primaryBg',
    h2: 'text-onPrimaryBg',
    h2Span: 'text-primaryBold',
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
    p: 'text-neutralSoft',
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
    button: 'text-onPrimary g-primaryBold hover:bg-primary',
    selectAll: '',
    p: 'text-onPrimaryBgSoft',
    h3: '',
    typewriter: '',
    tag: {
      unchecked: 'bg-primaryBgSoft text-onPrimaryBgSoft',
      checked: '',
    },
  },
};

type PropTypes = {
  color: 'primary | neutral' | 'neutralSoft' | 'primarySoft';
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
  const [selected, setSelected] = useState(tags);
  const intervalRef = useRef(null);
  const alert = useAlert();

  const [magicName, setMagicName] = useState('Software Engineering');
  const topic = useTypeWriter(magicName);
  const allTags = blogTags.map(({ name }) => name);

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
          durationSeconds: 10,
          type: 'success',
        });
      } else {
        const message = `
        A ${response.status} occurred. Try again?
        `;
        alert.show(message, {
          durationSeconds: 8,
          type: 'error',
        });
      }
    } catch (err) {
      const message = `
      An error occurred: ${err.message}
      `;
      alert.show(message, {
        durationSeconds: 8,
        type: 'error',
      });
    }
  };

  const styles = colors[color];
  const h3Styles = `md:text-xl font-light mb-2 overflow-hidden whitespace-no-wrap ${globalStyles.transitions}`;

  return (
    <section className={`${styles.section}  ${globalStyles.transitions} `}>
      <div className="max-w-screen-xl mx-auto w-full relative">
        <div
          className={`
          mx-auto max-w-2xl
           sm:px-6 
          py-12 px-4 lg:py-20 lg:px-8
        `}
        >
          <h2
            className={`text-3xl leading-9 font-extrabold tracking-tight  sm:text-4xl sm:leading-10
            ${globalStyles.transitions}
            ${styles.h2}
        `}
          >
            {copy}
            <br className="hidden sm:inline" />
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
                          className={`
                        mr-3 mb-3
                        
                        font-medium
                        px-2
                        rounded-full
                        
                        ${globalStyles.transitions}
                        ${globalStyles.outline}
                        transform
                        ${
                          isChecked
                            ? `
                          ${styles.tag.checked}
                        translate-y-0 scale-100 shadow-xs
                        `
                            : `
                        
                        ${styles.tag.unchecked}
                        -translate-y-1 scale-105 shadow-lg
                        `
                        }
                      `}
                        >
                          {name}
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>

              <button
                className={`
                ${globalStyles.transitions}
                ${globalStyles.outline}
                
                float-right px-2 py-1 rounded-full mt-2 ${styles.selectAll}`}
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
                <h3 className={`${styles.h3} ${h3Styles}`}>
                  Get notified when I post about
                  {' '}
                  <span
                    className={`
                    ${globalStyles.transitions}
                  ${styles.typewriter}
                  font-semibold `}
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
                className={`
              appearance-none 
              w-full 
              px-5 py-3 
              border border-primaryBgSofter
              text-base leading-6 
              rounded-full 
              
              text-onNeutralBg 
              bg-neutralBg 
              placeholder-neutralSoft 
              ${globalStyles.outline} 
              focus:border-primaryBgSofter
              ${globalStyles.transitions} 
              `}
                placeholder="Enter your email"
              />
              <div
                className={`
            mt-3 
            rounded-full                   
            flex items-center justify-center
            shadow 
          `}
              >
                <button
                  type="submit"
                  className={`
                  w-full
                  py-3 
                  border border-transparent 
                  text-base leading-6 font-medium 
                  rounded-full 
                  font-bold
                  ${styles.button}
                  ${globalStyles.outline}
                  ${globalStyles.transitions}
                  `}
                >
                  Subscribe
                </button>
              </div>
              <p
                className={`mt-1 font-light ${styles.p} ${globalStyles.transitions}`}
              >
                I will not send you spam. Unsubscribe at any time.
              </p>
            </section>
          </form>
        </div>
      </div>
    </section>
  );
}

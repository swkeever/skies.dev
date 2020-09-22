import React from 'react';
import { fiveItems, styles } from './utils';

export default function Example() {
  return (
    <div className={styles.container}>
      <ul className="flex h-24 items-end">
        {fiveItems.map((element) => (
          <li key={element} className={styles.li}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}
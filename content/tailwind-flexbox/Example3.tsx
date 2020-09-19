import React from 'react';
import { threeItems, styles } from './utils';

export default function Example() {
  return (
    <div className={styles.container}>
      <ul className="flex flex-col">
        {threeItems.map((element) => (
          <li key={element} className={styles.li}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

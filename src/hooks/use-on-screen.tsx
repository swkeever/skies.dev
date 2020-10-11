import { useState, useEffect } from 'react';

export default function useOnScreen(
  options?: IntersectionObserverInit | undefined,
): [Function, boolean] {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);

  return [setRef, visible];
}

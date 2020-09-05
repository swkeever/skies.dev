import { useEffect, useState } from 'react';

export const useActiveHash = (itemIds = [], rootMargin = undefined) => {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: rootMargin || '0% 0% -80% 0%' },
    );

    itemIds.forEach((id) => {
      const elem = document.getElementById(id);
      if (elem) observer.observe(elem);
    });

    return () => {
      itemIds.forEach((id) => {
        const elem = document.getElementById(id);
        if (elem) observer.unobserve(elem);
      });
    };
  }, []);

  return activeHash;
};

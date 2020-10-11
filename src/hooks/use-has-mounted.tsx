import React from 'react';

export default function useHasMounted(): boolean {
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

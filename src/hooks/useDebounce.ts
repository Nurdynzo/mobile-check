import {useEffect, useState} from 'react';

/** Delay is set at 1000ms by default */
function useDebounce({
  value,
  delay = 1000,
}: {
  value: string;
  delay?: number;
}): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

import {useState} from 'react';

// TODO(Philip): Check why we need this for a component
export const useAppInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  const [secureText, setSecureText] = useState(true);

  return {
    isFocused,
    setIsFocused,
    secureText,
    setSecureText,
  };
};

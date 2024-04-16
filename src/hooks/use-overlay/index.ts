import {useState} from 'react';

// TODO(Philip): I owe tests
const useOverlay = (initState?: boolean) => {
  const [isOpen, setOpen] = useState<boolean>(initState ?? false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onToggle = () => setOpen(oldState => !oldState);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export default useOverlay;

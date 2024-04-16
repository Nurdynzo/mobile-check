export const AddNotesButtonState = {
  disable: 'disable',
  close: 'close',
  open: 'open',
} as const;

export type AddNotesButtonState =
  (typeof AddNotesButtonState)[keyof typeof AddNotesButtonState];

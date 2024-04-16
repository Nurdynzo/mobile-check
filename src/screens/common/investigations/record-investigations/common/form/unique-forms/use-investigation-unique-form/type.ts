export type FormState<T> = {
  [K in keyof T]?: T[K];
};

export type UpdateForm<T> = <K extends keyof T>(
  field: K,
  value: T[K] | null,
) => void;

export type UseFormStateHook<T> = {
  form: FormState<T>;
  updateForm: UpdateForm<T>;
  submitForm: () => void;
  setForm: React.Dispatch<React.SetStateAction<FormState<T>>>;
};

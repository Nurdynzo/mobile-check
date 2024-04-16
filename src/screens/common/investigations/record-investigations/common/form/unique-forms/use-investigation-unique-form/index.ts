import {useCallback, useEffect, useState} from 'react';
import {FormState, UpdateForm, UseFormStateHook} from './type';

/**
 * @description A custom React hook for managing investigation unique form state with dynamic fields.
 *
 * Usage:
 * 1. Initialize with initial form state and a submission callback.
 * 2. Use `updateForm` to change field values.
 * 3. Use `submitForm` to submit the form, triggering the submission callback with current form data.
 */
function useInvestigationUniqueFormState<T>(
  initialFormState: FormState<T>,
  onSubmit: (data: FormState<T>) => void,
): UseFormStateHook<T> {
  const [form, setForm] = useState<FormState<T>>(initialFormState);

  const updateForm: UpdateForm<T> = useCallback((field, value) => {
    setForm(prevForm => ({...prevForm, [field]: value}));
  }, []);

  const submitForm = useCallback(() => {
    onSubmit(form);
  }, [form, onSubmit]);

  useEffect(() => {
    submitForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return {form, updateForm, submitForm, setForm};
}

export default useInvestigationUniqueFormState;

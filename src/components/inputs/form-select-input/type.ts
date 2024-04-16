import {Control, FieldPath, FieldValues} from 'react-hook-form';

export type FormSelectInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  disabled?: boolean;
};

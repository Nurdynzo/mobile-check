import {ControllerRenderProps, FieldValues} from 'react-hook-form';
import {imageFileSchema, selectedItemSchema} from '../utils/schema';

type FieldProps = Omit<
  ControllerRenderProps<FieldValues, string>,
  'onChange' | 'value'
>;

export type ImageFieldControls = {
  onChange: (props: imageFileSchema) => void;
  value: imageFileSchema;
} & FieldProps;

export type SelectItemFieldControls = {
  onChange: (props: selectedItemSchema) => void;
  value: selectedItemSchema;
} & FieldProps;

export type SelectItemValueFieldControls = {
  onChange: (props: string) => void;
  value: string;
} & FieldProps;

export type InputFieldControls = {
  onChange: (props: string) => void;
  value: string;
} & FieldProps;

export type DateTimeFieldControls = {
  onChange: (props: Date | null) => void;
  value: Date;
} & FieldProps;

export type ToggleSwitchFieldControls = {
  onChange: (props: boolean) => void;
  value: boolean;
} & FieldProps;

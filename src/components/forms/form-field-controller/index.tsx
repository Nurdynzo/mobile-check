import React, {ReactNode} from 'react';
import {
  Control,
  ControllerRenderProps,
  FieldError,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';
import {View, ViewStyle} from 'react-native';
import {AppText} from '../../common';
import {appFormFieldstyles} from './styles';

type FormFieldControllerSingleProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  Field: (
    controlProps: ControllerRenderProps<FieldValues, string>,
  ) => ReactNode;
  containerStyle?: ViewStyle;
};

type FormFieldControllerDoubleProps<T extends FieldValues> = {
  control: Control<T>;
  names: {name1: FieldPath<T>; name2: FieldPath<T>};
  Fields: (controlProps: {
    field1: ControllerRenderProps<FieldValues, string>;
    field2: ControllerRenderProps<FieldValues, string>;
  }) => ReactNode;
  containerStyle?: ViewStyle;
};

const someThingMissing = 'Something is missing';

const FormFieldController = <T extends FieldValues>({
  control,
  name,
  Field,
  containerStyle,
}: FormFieldControllerSingleProps<T>) => {
  const {
    field,
    fieldState: {error},
  } = useController<T, FieldPath<T>>({name, control});

  const fieldError = error as FieldError & {path: FieldError};

  return (
    <View style={containerStyle}>
      {Field({...field})}
      {error && (
        <AppText
          text={
            fieldError.message ?? fieldError?.path?.message ?? someThingMissing
          }
          color="danger300"
          type="status_tag_semibold"
          style={appFormFieldstyles.errMsg}
        />
      )}
    </View>
  );
};

const DoubleFormFieldController = <T extends FieldValues>({
  control,
  names,
  Fields,
  containerStyle,
}: FormFieldControllerDoubleProps<T>) => {
  const {
    field: field1,
    fieldState: {error: error1},
  } = useController<T, FieldPath<T>>({name: names.name1, control});
  const {
    field: field2,
    fieldState: {error: error2},
  } = useController<T, FieldPath<T>>({name: names.name2, control});

  const fieldError1 = error1 as FieldError & {path: FieldError};
  const fieldError2 = error2 as FieldError & {path: FieldError};

  return (
    <View style={containerStyle}>
      {Fields({field1: {...field1}, field2: {...field2}})}
      {(fieldError1 || fieldError2) && (
        <AppText
          text={
            (fieldError1?.message ??
              fieldError1?.path?.message ??
              someThingMissing) ||
            (fieldError2?.message ??
              fieldError2?.path?.message ??
              someThingMissing)
          }
          color="danger300"
          type="status_tag_semibold"
          align={error1 ? 'left' : 'right'}
          style={appFormFieldstyles.errMsg}
        />
      )}
    </View>
  );
};
export {DoubleFormFieldController, FormFieldController};

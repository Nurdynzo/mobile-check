import {addNewPatientFormSchema} from './schema';

export type onPatientSubmit = {
  data: addNewPatientFormSchema;
  type: 'save_and_close' | 'create_appointment' | 'update_information';
  reset: () => void;
};

export type PatientFormProps = {
  onSubmit: (props: onPatientSubmit) => void;
} & (
  | {formType: 'create'}
  | {
      formType: 'update';
      defaultValues: addNewPatientFormSchema;
      isUpdatingForm: boolean;
    }
);

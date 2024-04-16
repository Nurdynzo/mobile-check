import {CreateAppointmentSchema} from './schema';
export type CreateAppointmentSubmitTypeProp =
  | 'save_and_close'
  | 'create_invoice'
  | 'update';
export type onAppointmentSubmit = {
  data: CreateAppointmentSchema;
  type: CreateAppointmentSubmitTypeProp;
  reset: () => void;
};

export type AppointmentFormProps = {
  patientId?: number;
  onSubmit: (props: onAppointmentSubmit) => void;
  defaultValues?: Omit<CreateAppointmentSchema, 'patient'>;
  formType: 'create' | 'edit';
};

import {
  ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiArg,
  ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiResponse,
  ApiServicesAppPatientsCreateoreditPostApiArg,
  ApiServicesAppPatientsCreateoreditPostApiResponse,
  patientApi,
} from '../services/patientApi';

import {
  ApiServicesAppInvoicesCreatenewinvoicePostApiArg,
  ApiServicesAppInvoicesCreatenewinvoicePostApiResponse,
  invoiceApi,
} from '../services/invoiceApi';

patientApi.injectEndpoints({
  endpoints: build => ({
    apiServicesAppPatientappointmentsReassignepatientappointmentPost:
      build.mutation<
        ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiResponse,
        ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientAppointments/ReassignePatientAppointment`,
          method: 'POST',
          body: queryArg.reassignPatientAppointmentDto,
        }),
        invalidatesTags: (_, error) =>
          error ? [] : ['PatientAppointments', 'Patients'],
      }),
    apiServicesAppPatientsCreateoreditPost: build.mutation<
      ApiServicesAppPatientsCreateoreditPostApiResponse,
      ApiServicesAppPatientsCreateoreditPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Patients/CreateOrEdit`,
        method: 'POST',
        body: queryArg.createOrEditPatientDto,
      }),
      invalidatesTags: (_, error) =>
        error ? [] : ['Patients', 'PatientRelations', 'Appointment'],
    }),
  }),
  overrideExisting: true,
});

invoiceApi.injectEndpoints({
  endpoints: build => ({
    apiServicesAppInvoicesCreatenewinvoicePost: build.mutation<
      ApiServicesAppInvoicesCreatenewinvoicePostApiResponse,
      ApiServicesAppInvoicesCreatenewinvoicePostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Invoices/CreateNewInvoice`,
        method: 'POST',
        body: queryArg.createNewInvoiceCommand,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['Appointment']),
    }),
  }),
  overrideExisting: true,
});

export const {
  useApiServicesAppPatientsCreateoreditPostMutation,
  useApiServicesAppPatientappointmentsReassignepatientappointmentPostMutation,
} = patientApi;

export const {useApiServicesAppInvoicesCreatenewinvoicePostMutation} =
  invoiceApi;

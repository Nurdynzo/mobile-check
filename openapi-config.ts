import type {ConfigFile} from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'https://api.plateaumed-dev.com/swagger/v1/swagger.json',
  apiFile: './src/state/services/baseApi.ts',
  apiImport: 'baseApi',
  outputFiles: {
    './src/state/services/patientDocumentUploadApi.ts': {
      filterEndpoints: [/PatientDocumentUpload/i],
      exportName: 'patientDocumentUploadApi',
    },
    './src/state/services/intakeOutputApi.ts': {
      filterEndpoints: [/IntakeOutput/i],
      exportName: 'intakeOutputApi',
      tag: true,
    },
    './src/state/services/staffApi.ts': {
      filterEndpoints: [/Staff/i],
      exportName: 'staffApi',
      tag: true,
    },
    './src/state/services/nurseCarePlansApi.ts': {
      filterEndpoints: [/NurseCarePlans/i],
      exportName: 'nurseCarePlansApi',
      tag: true,
    },
    './src/state/services/physicalExaminationsApi.ts': {
      filterEndpoints: [/PhysicalExaminations/i],
      exportName: 'physicalExaminationsApi',
      tag: true,
    },
    './src/state/services/vitalSignsApi.ts': {
      filterEndpoints: [/VitalSigns/i],
      exportName: 'vitalSignsApi',
      tag: true,
    },
    './src/state/services/sessionApi.ts': {
      filterEndpoints: [/Session/i],
      exportName: 'sessionApi',
      hooks: {queries: true, lazyQueries: true, mutations: true},
    },
    './src/state/services/accountApi.ts': {
      filterEndpoints: [/Account/i],
      exportName: 'accountApi',
    },
    './src/state/services/tokenAuthApi.ts': {
      filterEndpoints: [/TokenAuth/i],
      exportName: 'tokenAuthApi',
    },
    './src/state/services/tenantApi.ts': {
      filterEndpoints: [/Tenant/i],
      exportName: 'tenantApi',
    },
    './src/state/services/titlesApi.ts': {
      filterEndpoints: [/Titles/i],
      exportName: 'titlesApi',
      tag: true,
    },
    './src/state/services/patientApi.ts': {
      filterEndpoints: [/Patient/i],
      exportName: 'patientApi',
      tag: true,
    },
    './src/state/services/insuranceProvidersApi.ts': {
      filterEndpoints: [/InsuranceProviders/i],
      exportName: 'insuranceProvidersApi',
      tag: true,
    },
    './src/state/services/identificationTypeApi.ts': {
      filterEndpoints: [/IdentificationType/i],
      exportName: 'identificationTypeApi',
      tag: true,
    },
    './src/state/services/countriesApi.ts': {
      filterEndpoints: [/Countries/i],
      exportName: 'countriesApi',
      tag: true,
    },
    './src/state/services/districtApi.ts': {
      filterEndpoints: [/District/i],
      exportName: 'districtApi',
      tag: true,
    },
    './src/state/services/occupationApi.ts': {
      filterEndpoints: [/Occupation/i],
      exportName: 'occupationApi',
      tag: true,
    },
    './src/state/services/genoTypeApi.ts': {
      filterEndpoints: [/GenoType/i],
      exportName: 'genoTypeApi',
      tag: true,
    },
    './src/state/services/religionApi.ts': {
      filterEndpoints: [/Religion/i],
      exportName: 'religionApi',
      tag: true,
    },
    './src/state/services/bloodGroupApi.ts': {
      filterEndpoints: [/BloodGroup/i],
      exportName: 'bloodGroupApi',
      tag: true,
    },
    './src/state/services/maritalStatusApi.ts': {
      filterEndpoints: [/MaritalStatus/i],
      exportName: 'maritalStatusApi',
      tag: true,
    },
    './src/state/services/invoiceApi.ts': {
      filterEndpoints: [/Invoice/i],
      exportName: 'invoiceApi',
      tag: true,
    },
    './src/state/services/countryApi.ts': {
      filterEndpoints: [/Countries/i],
      exportName: 'countryApi',
    },
    './src/state/services/organizationUnit.ts': {
      filterEndpoints: [/OrganizationUnit/i],
      exportName: 'organizationUnit',
    },
    './src/state/services/relationshipApi.ts': {
      filterEndpoints: [/Relationship/i],
      exportName: 'relationshipApi',
    },
    './src/state/services/regionsApi.ts': {
      filterEndpoints: [/Regions/i],
      exportName: 'regionApi',
    },
    './src/state/services/appointmentApi.ts': {
      filterEndpoints: [/Appointment/i],
      exportName: 'appointmentApi',
      tag: true,
    },
    './src/state/services/patientAppointmentsApi.ts': {
      filterEndpoints: [/PatientAppointments/i],
      exportName: 'patientAppointmentsApi',
    },
    './src/state/services/wardApi.ts': {
      filterEndpoints: [/Ward/i, /BedTypes/i],
      exportName: 'wardApi',
      tag: true,
    },
    './src/state/services/roomApi.ts': {
      filterEndpoints: [/Room/i],
      exportName: 'roomApi',
      tag: true,
    },
    './src/state/services/snowstorm.ts': {
      filterEndpoints: [/Snowstorm/i],
      exportName: 'snowstormApi',
      tag: true,
    },
    './src/state/services/diagnosisApi.ts': {
      filterEndpoints: [/Diagnosis/i],
      exportName: 'diagnosisApi',
      tag: true,
    },
    './src/state/services/planItemsApi.ts': {
      filterEndpoints: [/PlanItems/i],
      exportName: 'planItemsApi',
      tag: true,
    },
    './src/state/services/medicationApi.ts': {
      filterEndpoints: [/Medication/i],
      exportName: 'medicationApi',
      tag: true,
    },
    './src/state/services/vaccineApi.ts': {
      filterEndpoints: [/Vaccine/i],
      exportName: 'vaccineApi',
      tag: true,
    },
    './src/state/services/inputNotesApi.ts': {
      filterEndpoints: [/InputNotes/i],
      exportName: 'inputNotesApi',
      tag: true,
    },
    './src/state/services/WardEmergenciesApi.ts': {
      filterEndpoints: [/WardEmergencies/i],
      exportName: 'WardEmergenciesApi',
      tag: true,
    },
    './src/state/services/symptomApi.ts': {
      filterEndpoints: [/Symptom/i],
      exportName: 'symptomApi',

      tag: true,
    },
    './src/state/services/investigationApi.ts': {
      filterEndpoints: [/Investigation/i],
      exportName: 'investigationApi',
      tag: true,
    },
    './src/state/services/woundDressingApi.ts': {
      filterEndpoints: [/WoundDressing/i],
      exportName: 'woundDressingApi',
      tag: true,
    },
    './src/state/services/bedMakingApi.ts': {
      filterEndpoints: [/BedMaking/i],
      exportName: 'bedMakingApi',
      tag: true,
    },
    './src/state/services/procedureApi.ts': {
      filterEndpoints: [/Procedure/i],
      exportName: 'procedureApi',
      tag: true,
    },
  },
  hooks: true,
};

export default config;

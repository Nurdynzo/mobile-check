import File from '@/types/file';
import {getFormData} from '@/utils/helpers/getFormData';
import {baseApi as api} from './baseApi';
import {ApiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPostApiResponse} from './investigationApi';
import {
  ApiServicesAppPatientdocumentuploadUploadpicturePostApiResponse,
  ApiServicesAppPatientdocumentuploadUploadreferralletterfilePostApiResponse,
  ProcedureEntryType,
} from './patientApi';
import {ApiServicesAppPatientdocumentuploadUploadscandocumentPostApiResponse} from './patientDocumentUploadApi';
import {
  ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiResponse,
  ApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostApiResponse,
  CreatePatientPhysicalExamSuggestionQuestionDto,
  CreatePatientPhysicalExamTypeNoteDto,
} from './physicalExaminationsApi';

const injectedRtkApi = api.injectEndpoints({
  overrideExisting: false,
  endpoints: build => ({
    apiServicesAppUploadPatientScannedDocumentPost: build.mutation<
      ApiServicesAppPatientdocumentuploadUploadscandocumentPostApiResponse,
      ApiServicesAppUploadPatientScannedDocumentArg
    >({
      query: queryArg => {
        return {
          url: `/api/services/app/PatientDocumentUpload/UploadScanDocument`,
          method: 'POST',
          body: getFormData(queryArg.body),
          formData: true,
        };
      },
    }),
    apiServicesAppUploadpatientpicturePost: build.mutation<
      ApiServicesAppPatientdocumentuploadUploadpicturePostApiResponse,
      ApiServicesAppPatientdocumentuploadUploadpicturePostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/PatientDocumentUpload/UploadPicture`,
        method: 'POST',
        body: getFormData(queryArg.body),
        formData: true,
      }),
    }),
    apiServicesAppUploadreferralletterfilePost: build.mutation<
      ApiServicesAppPatientdocumentuploadUploadreferralletterfilePostApiResponse,
      ApiServicesAppPatientdocumentuploadUploadreferralletterfilePostApiArg
    >({
      query: queryArg => {
        return {
          url: `/api/services/app/PatientDocumentUpload/UploadReferralLetterFile`,
          method: 'POST',
          body: getFormData(queryArg.body),
          formData: true,
        };
      },
    }),
    apiServicesAppRecordinvestigationresultforelectroradandpulmPost:
      build.mutation<
        ApiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPostApiResponse,
        ApiServicesRecordinvestigationresultforelectroradandpulmPostApiArg
      >({
        query: queryArg => {
          return {
            url: `/api/services/app/Investigation/RecordInvestigationResultForElectroRadAndPulm`,
            method: 'POST',
            body: getFormData(queryArg.body),
            formData: true,
          };
        },
        invalidatesTags: ['Investigation'],
      }),

    apiServicesAppPhysicalexaminationsCreatepatientphysicalexamination:
      build.mutation<
        ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiResponse,
        ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PhysicalExaminations/CreatePatientPhysicalExaminationAndUpload`,
          method: 'POST',
          body: getFormData(queryArg.body),
          formData: true,
        }),
        invalidatesTags: ['PhysicalExaminations'],
      }),
  }),
});

export type ApiServicesAppUploadPatientScannedDocumentArg = {
  body: {
    FileId?: string;
    File: File;
    IsUpdate?: boolean;
    Id?: number;
  };
};

export type ApiServicesAppPatientdocumentuploadUploadpicturePostApiArg = {
  body: {
    File?: File;
    PatientId?: number;
  };
};

export type ApiServicesAppPatientdocumentuploadUploadreferralletterfilePostApiArg =
  {
    body: {
      ReferringHealthCareProvider?: string;
      DiagnosisSummary?: string;
      FileId?: string;
      File: File;
      PatientId: number;
      AppointmentId?: number;
      Id?: number;
    };
  };

export type ApiServicesRecordinvestigationresultforelectroradandpulmPostApiArg =
  {
    body: {
      PatientId?: number;
      InvestigationId?: number;
      InvestigationRequestId?: number;
      ResultDate?: string;
      ResultTime?: string;
      Conclusion?: string;
      EncounterId?: number;
      ReviewerId?: number;
      ImageFiles: File[];
    };
  };

export type ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiArg =
  {
    body: {
      PhysicalExaminationEntryType: string;
      PhysicalExaminationTypeId: number;
      PatientId: number;
      TypeNotes?: CreatePatientPhysicalExamTypeNoteDto[];
      Suggestions?: CreatePatientPhysicalExamSuggestionQuestionDto[];
      OtherNote?: string;
      EncounterId?: number;
      ProcedureId?: number;
      ProcedureEntryType?: ProcedureEntryType;
      ImageFiles?: File[];
    };
  };

export {injectedRtkApi as customApi};

export const {
  useApiServicesAppUploadPatientScannedDocumentPostMutation,
  useApiServicesAppUploadpatientpicturePostMutation,
  useApiServicesAppUploadreferralletterfilePostMutation,
  useApiServicesAppRecordinvestigationresultforelectroradandpulmPostMutation,
  useApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationMutation,
} = injectedRtkApi;

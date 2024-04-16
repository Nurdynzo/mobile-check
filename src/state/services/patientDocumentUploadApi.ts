import {baseApi as api} from './baseApi';
export const addTagTypes = ['PatientDocumentUpload'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppPatientdocumentuploadUploadreferralletterfilePost:
        build.mutation<
          ApiServicesAppPatientdocumentuploadUploadreferralletterfilePostApiResponse,
          ApiServicesAppPatientdocumentuploadUploadreferralletterfilePostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientDocumentUpload/UploadReferralLetterFile`,
            method: 'POST',
            body: queryArg.body,
          }),
          invalidatesTags: ['PatientDocumentUpload'],
        }),
      apiServicesAppPatientdocumentuploadUploadpicturePost: build.mutation<
        ApiServicesAppPatientdocumentuploadUploadpicturePostApiResponse,
        ApiServicesAppPatientdocumentuploadUploadpicturePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientDocumentUpload/UploadPicture`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['PatientDocumentUpload'],
      }),
      apiServicesAppPatientdocumentuploadAssignuploadedfilestoreviewerPost:
        build.mutation<
          ApiServicesAppPatientdocumentuploadAssignuploadedfilestoreviewerPostApiResponse,
          ApiServicesAppPatientdocumentuploadAssignuploadedfilestoreviewerPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientDocumentUpload/AssignUploadedFilesToReviewer`,
            method: 'POST',
            body: queryArg.body,
            params: {reviewerId: queryArg.reviewerId},
          }),
          invalidatesTags: ['PatientDocumentUpload'],
        }),
      apiServicesAppPatientdocumentuploadReviewscanneddocumentPost:
        build.mutation<
          ApiServicesAppPatientdocumentuploadReviewscanneddocumentPostApiResponse,
          ApiServicesAppPatientdocumentuploadReviewscanneddocumentPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientDocumentUpload/ReviewScannedDocument`,
            method: 'POST',
            body: queryArg.body,
          }),
          invalidatesTags: ['PatientDocumentUpload'],
        }),
      apiServicesAppPatientdocumentuploadGetrejectedscanneddocumentsforreviewGet:
        build.query<
          ApiServicesAppPatientdocumentuploadGetrejectedscanneddocumentsforreviewGetApiResponse,
          ApiServicesAppPatientdocumentuploadGetrejectedscanneddocumentsforreviewGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PatientDocumentUpload/GetRejectedScannedDocumentsForReview`,
          }),
          providesTags: ['PatientDocumentUpload'],
        }),
      apiServicesAppPatientdocumentuploadGetdocumentbyidGet: build.query<
        ApiServicesAppPatientdocumentuploadGetdocumentbyidGetApiResponse,
        ApiServicesAppPatientdocumentuploadGetdocumentbyidGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientDocumentUpload/GetDocumentById`,
          params: {fileId: queryArg.fileId},
        }),
        providesTags: ['PatientDocumentUpload'],
      }),
      apiServicesAppPatientdocumentuploadGetpublicdocumenturlGet: build.query<
        ApiServicesAppPatientdocumentuploadGetpublicdocumenturlGetApiResponse,
        ApiServicesAppPatientdocumentuploadGetpublicdocumenturlGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientDocumentUpload/GetPublicDocumentUrl`,
          params: {fileId: queryArg.fileId},
        }),
        providesTags: ['PatientDocumentUpload'],
      }),
      apiServicesAppPatientdocumentuploadGetdocumentinbasestringbyidGet:
        build.query<
          ApiServicesAppPatientdocumentuploadGetdocumentinbasestringbyidGetApiResponse,
          ApiServicesAppPatientdocumentuploadGetdocumentinbasestringbyidGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientDocumentUpload/GetDocumentInBaseStringById`,
            params: {fileId: queryArg.fileId},
          }),
          providesTags: ['PatientDocumentUpload'],
        }),
      apiServicesAppPatientdocumentuploadUploadscandocumentPost: build.mutation<
        ApiServicesAppPatientdocumentuploadUploadscandocumentPostApiResponse,
        ApiServicesAppPatientdocumentuploadUploadscandocumentPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientDocumentUpload/UploadScanDocument`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['PatientDocumentUpload'],
      }),
      apiServicesAppPatientdocumentuploadGetscanneddocumentsforreviewGet:
        build.query<
          ApiServicesAppPatientdocumentuploadGetscanneddocumentsforreviewGetApiResponse,
          ApiServicesAppPatientdocumentuploadGetscanneddocumentsforreviewGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientDocumentUpload/GetScannedDocumentsForReview`,
            params: {
              showOnlyRejectedDocuments: queryArg.showOnlyRejectedDocuments,
            },
          }),
          providesTags: ['PatientDocumentUpload'],
        }),
      apiServicesAppPatientdocumentuploadGetscanneddocumentsbypatientcodeGet:
        build.query<
          ApiServicesAppPatientdocumentuploadGetscanneddocumentsbypatientcodeGetApiResponse,
          ApiServicesAppPatientdocumentuploadGetscanneddocumentsbypatientcodeGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientDocumentUpload/GetScannedDocumentsByPatientCode`,
            params: {patientCode: queryArg.patientCode},
          }),
          providesTags: ['PatientDocumentUpload'],
        }),
      apiServicesAppPatientdocumentuploadGetlistofreviewerforscanneddocumentGet:
        build.query<
          ApiServicesAppPatientdocumentuploadGetlistofreviewerforscanneddocumentGetApiResponse,
          ApiServicesAppPatientdocumentuploadGetlistofreviewerforscanneddocumentGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PatientDocumentUpload/GetListOfReviewerForScannedDocument`,
          }),
          providesTags: ['PatientDocumentUpload'],
        }),
      apiServicesAppPatientdocumentuploadGetreferraldocumentbypatientidGet:
        build.query<
          ApiServicesAppPatientdocumentuploadGetreferraldocumentbypatientidGetApiResponse,
          ApiServicesAppPatientdocumentuploadGetreferraldocumentbypatientidGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientDocumentUpload/GetReferralDocumentByPatientId`,
            params: {patientId: queryArg.patientId},
          }),
          providesTags: ['PatientDocumentUpload'],
        }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as patientDocumentUploadApi};
export type ApiServicesAppPatientdocumentuploadUploadreferralletterfilePostApiResponse =
  /** status 200 Success */ ReferralLetterUploadRequest;
export type ApiServicesAppPatientdocumentuploadUploadreferralletterfilePostApiArg =
  {
    body: {
      ReferringHealthCareProvider?: string;
      DiagnosisSummary?: string;
      FileId?: string;
      File: Blob;
      PatientId: number;
      AppointmentId?: number;
      Id?: number;
    };
  };
export type ApiServicesAppPatientdocumentuploadUploadpicturePostApiResponse =
  unknown;
export type ApiServicesAppPatientdocumentuploadUploadpicturePostApiArg = {
  body: {
    File?: Blob;
    PatientId?: number;
  };
};
export type ApiServicesAppPatientdocumentuploadAssignuploadedfilestoreviewerPostApiResponse =
  unknown;
export type ApiServicesAppPatientdocumentuploadAssignuploadedfilestoreviewerPostApiArg =
  {
    reviewerId?: number;
    body: number[];
  };
export type ApiServicesAppPatientdocumentuploadReviewscanneddocumentPostApiResponse =
  unknown;
export type ApiServicesAppPatientdocumentuploadReviewscanneddocumentPostApiArg =
  {
    body: {
      File: Blob;
      FileId: string;
      IsApproved: boolean;
      ReviewNote?: string;
      Id?: number;
    };
  };
export type ApiServicesAppPatientdocumentuploadGetrejectedscanneddocumentsforreviewGetApiResponse =
  /** status 200 Success */ GetScannedDocumentsForReviewResponse[];
export type ApiServicesAppPatientdocumentuploadGetrejectedscanneddocumentsforreviewGetApiArg =
  void;
export type ApiServicesAppPatientdocumentuploadGetdocumentbyidGetApiResponse =
  unknown;
export type ApiServicesAppPatientdocumentuploadGetdocumentbyidGetApiArg = {
  fileId?: string;
};
export type ApiServicesAppPatientdocumentuploadGetpublicdocumenturlGetApiResponse =
  /** status 200 Success */ string;
export type ApiServicesAppPatientdocumentuploadGetpublicdocumenturlGetApiArg = {
  fileId?: string;
};
export type ApiServicesAppPatientdocumentuploadGetdocumentinbasestringbyidGetApiResponse =
  /** status 200 Success */ string;
export type ApiServicesAppPatientdocumentuploadGetdocumentinbasestringbyidGetApiArg =
  {
    fileId?: string;
  };
export type ApiServicesAppPatientdocumentuploadUploadscandocumentPostApiResponse =
  /** status 200 Success */ PatientScanDocumentUploadRequest;
export type ApiServicesAppPatientdocumentuploadUploadscandocumentPostApiArg = {
  body: {
    FileId?: string;
    File: Blob;
    IsUpdate?: boolean;
    Id?: number;
  };
};
export type ApiServicesAppPatientdocumentuploadGetscanneddocumentsforreviewGetApiResponse =
  /** status 200 Success */ GetScannedDocumentsForReviewResponse[];
export type ApiServicesAppPatientdocumentuploadGetscanneddocumentsforreviewGetApiArg =
  {
    showOnlyRejectedDocuments?: boolean;
  };
export type ApiServicesAppPatientdocumentuploadGetscanneddocumentsbypatientcodeGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppPatientdocumentuploadGetscanneddocumentsbypatientcodeGetApiArg =
  {
    patientCode?: string;
  };
export type ApiServicesAppPatientdocumentuploadGetlistofreviewerforscanneddocumentGetApiResponse =
  /** status 200 Success */ ScannedDocumentReviewerQueryResponse[];
export type ApiServicesAppPatientdocumentuploadGetlistofreviewerforscanneddocumentGetApiArg =
  void;
export type ApiServicesAppPatientdocumentuploadGetreferraldocumentbypatientidGetApiResponse =
  /** status 200 Success */ GetPatientReferralDocumentDto;
export type ApiServicesAppPatientdocumentuploadGetreferraldocumentbypatientidGetApiArg =
  {
    patientId?: number;
  };
export type ReferralLetterUploadRequest = {
  referringHealthCareProvider?: string | null;
  diagnosisSummary?: string | null;
  fileId?: string | null;
  file: Blob;
  patientId: number;
  appointmentId?: number | null;
  id?: number | null;
};
export type GetScannedDocumentsForReviewResponse = {
  patientFullName?: string | null;
  patientCode?: string | null;
  pictureId?: string | null;
  pictureUrl?: string | null;
  gender?: string | null;
  dateOfBirth?: string;
  fileId?: string;
  isApproved?: boolean | null;
  reviewerNote?: string | null;
  id?: number;
};
export type PatientScanDocumentUploadRequest = {
  fileId?: string | null;
  file: Blob;
  isUpdate?: boolean;
  id?: number | null;
};
export type ScannedDocumentReviewerQueryResponse = {
  id?: number;
  fullName?: string | null;
};
export type GetPatientReferralDocumentDto = {
  id?: number;
  referringHealthCareProvider?: string | null;
  diagnosisSummary?: string | null;
  referralDocument?: string | null;
  patientId?: number;
};
export const {
  useApiServicesAppPatientdocumentuploadUploadreferralletterfilePostMutation,
  useApiServicesAppPatientdocumentuploadUploadpicturePostMutation,
  useApiServicesAppPatientdocumentuploadAssignuploadedfilestoreviewerPostMutation,
  useApiServicesAppPatientdocumentuploadReviewscanneddocumentPostMutation,
  useApiServicesAppPatientdocumentuploadGetrejectedscanneddocumentsforreviewGetQuery,
  useApiServicesAppPatientdocumentuploadGetdocumentbyidGetQuery,
  useApiServicesAppPatientdocumentuploadGetpublicdocumenturlGetQuery,
  useApiServicesAppPatientdocumentuploadGetdocumentinbasestringbyidGetQuery,
  useApiServicesAppPatientdocumentuploadUploadscandocumentPostMutation,
  useApiServicesAppPatientdocumentuploadGetscanneddocumentsforreviewGetQuery,
  useApiServicesAppPatientdocumentuploadGetscanneddocumentsbypatientcodeGetQuery,
  useApiServicesAppPatientdocumentuploadGetlistofreviewerforscanneddocumentGetQuery,
  useApiServicesAppPatientdocumentuploadGetreferraldocumentbypatientidGetQuery,
} = injectedRtkApi;

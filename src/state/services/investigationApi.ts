import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'CreateInvestigationResultReviewerHandler',
  'Investigation',
  'Invoices',
  'PatientProfile',
  'PriceSettings',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppCreateinvestigationresultreviewerhandlerHandlePost:
        build.mutation<
          ApiServicesAppCreateinvestigationresultreviewerhandlerHandlePostApiResponse,
          ApiServicesAppCreateinvestigationresultreviewerhandlerHandlePostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/CreateInvestigationResultReviewerHandler/Handle`,
            method: 'POST',
            body: queryArg.investigationResultReviewerRequestDto,
            params: {facilityId: queryArg.facilityId},
          }),
          invalidatesTags: ['CreateInvestigationResultReviewerHandler'],
        }),
      apiServicesAppInvestigationGetallGet: build.query<
        ApiServicesAppInvestigationGetallGetApiResponse,
        ApiServicesAppInvestigationGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/GetAll`,
          params: {Type: queryArg['type'], Filter: queryArg.filter},
        }),
        providesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationGetinvestigationGet: build.query<
        ApiServicesAppInvestigationGetinvestigationGetApiResponse,
        ApiServicesAppInvestigationGetinvestigationGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/GetInvestigation`,
          params: {Id: queryArg.id, PatientId: queryArg.patientId},
        }),
        providesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationRequestinvestigationPost: build.mutation<
        ApiServicesAppInvestigationRequestinvestigationPostApiResponse,
        ApiServicesAppInvestigationRequestinvestigationPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/RequestInvestigation`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationGetinvestigationsrequestsGet: build.query<
        ApiServicesAppInvestigationGetinvestigationsrequestsGetApiResponse,
        ApiServicesAppInvestigationGetinvestigationsrequestsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/GetInvestigationsRequests`,
          params: {
            PatientId: queryArg.patientId,
            Type: queryArg['type'],
            ProcedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationRecordinvestigationPost: build.mutation<
        ApiServicesAppInvestigationRecordinvestigationPostApiResponse,
        ApiServicesAppInvestigationRecordinvestigationPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/RecordInvestigation`,
          method: 'POST',
          body: queryArg.recordInvestigationRequest,
        }),
        invalidatesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationGetinvestigationresultsGet: build.query<
        ApiServicesAppInvestigationGetinvestigationresultsGetApiResponse,
        ApiServicesAppInvestigationGetinvestigationresultsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/GetInvestigationResults`,
          params: {
            PatientId: queryArg.patientId,
            Type: queryArg['type'],
            Filter: queryArg.filter,
            ProcedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationDeleteinvestigationrequestDelete:
        build.mutation<
          ApiServicesAppInvestigationDeleteinvestigationrequestDeleteApiResponse,
          ApiServicesAppInvestigationDeleteinvestigationrequestDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Investigation/DeleteInvestigationRequest`,
            method: 'DELETE',
            params: {requestId: queryArg.requestId},
          }),
          invalidatesTags: ['Investigation'],
        }),
      apiServicesAppInvestigationLinktodiagnosisPost: build.mutation<
        ApiServicesAppInvestigationLinktodiagnosisPostApiResponse,
        ApiServicesAppInvestigationLinktodiagnosisPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/LinkToDiagnosis`,
          method: 'POST',
          body: queryArg.linkInvestigationToDiagnosisRequest,
        }),
        invalidatesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationGetinvestigationtypesGet: build.query<
        ApiServicesAppInvestigationGetinvestigationtypesGetApiResponse,
        ApiServicesAppInvestigationGetinvestigationtypesGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/Investigation/GetInvestigationTypes`,
        }),
        providesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationGetilaboratoryqueueinvestigationstatuslistGet:
        build.query<
          ApiServicesAppInvestigationGetilaboratoryqueueinvestigationstatuslistGetApiResponse,
          ApiServicesAppInvestigationGetilaboratoryqueueinvestigationstatuslistGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/Investigation/GetILaboratoryQueueInvestigationStatusList`,
          }),
          providesTags: ['Investigation'],
        }),
      apiServicesAppInvestigationGetlaboratoryqueueinvestigationresultsGet:
        build.query<
          ApiServicesAppInvestigationGetlaboratoryqueueinvestigationresultsGetApiResponse,
          ApiServicesAppInvestigationGetlaboratoryqueueinvestigationresultsGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Investigation/GetLaboratoryQueueInvestigationResults`,
            params: {
              PatientName: queryArg.patientName,
              OrderBy: queryArg.orderBy,
              InvestigationCategory: queryArg.investigationCategory,
              Status: queryArg.status,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['Investigation'],
        }),
      apiServicesAppInvestigationInvestigationrequestforpatientPost:
        build.mutation<
          ApiServicesAppInvestigationInvestigationrequestforpatientPostApiResponse,
          ApiServicesAppInvestigationInvestigationrequestforpatientPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Investigation/InvestigationRequestForPatient`,
            method: 'POST',
            body: queryArg.getPatientInvestigationRequest,
          }),
          invalidatesTags: ['Investigation'],
        }),
      apiServicesAppInvestigationLabqueuesummaryinvestigationpricesPost:
        build.mutation<
          ApiServicesAppInvestigationLabqueuesummaryinvestigationpricesPostApiResponse,
          ApiServicesAppInvestigationLabqueuesummaryinvestigationpricesPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Investigation/LabQueueSummaryInvestigationPrices`,
            method: 'POST',
            body: queryArg.getInvestigationPricesRequest,
          }),
          invalidatesTags: ['Investigation'],
        }),
      apiServicesAppInvestigationGetlabresulttestinfoGet: build.query<
        ApiServicesAppInvestigationGetlabresulttestinfoGetApiResponse,
        ApiServicesAppInvestigationGetlabresulttestinfoGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/GetLabResultTestInfo`,
          params: {
            PatientId: queryArg.patientId,
            InvestigationRequestId: queryArg.investigationRequestId,
          },
        }),
        providesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationGetlabtestresultGet: build.query<
        ApiServicesAppInvestigationGetlabtestresultGetApiResponse,
        ApiServicesAppInvestigationGetlabtestresultGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/GetLabTestResult`,
          params: {
            PatientId: queryArg.patientId,
            InvestigationRequestId: queryArg.investigationRequestId,
          },
        }),
        providesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationRecordinvestigationsamplePost: build.mutation<
        ApiServicesAppInvestigationRecordinvestigationsamplePostApiResponse,
        ApiServicesAppInvestigationRecordinvestigationsamplePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/RecordInvestigationSample`,
          method: 'POST',
          body: queryArg.recordInvestigationSampleRequest,
        }),
        invalidatesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationCreateorupdateinvestigationresultreviewerPost:
        build.mutation<
          ApiServicesAppInvestigationCreateorupdateinvestigationresultreviewerPostApiResponse,
          ApiServicesAppInvestigationCreateorupdateinvestigationresultreviewerPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Investigation/CreateOrUpdateInvestigationResultReviewer`,
            method: 'POST',
            body: queryArg.investigationResultReviewerRequestDto,
          }),
          invalidatesTags: ['Investigation'],
        }),
      apiServicesAppInvestigationGetinvestigationspecimensGet: build.query<
        ApiServicesAppInvestigationGetinvestigationspecimensGetApiResponse,
        ApiServicesAppInvestigationGetinvestigationspecimensGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Investigation/GetInvestigationSpecimens`,
          params: {Type: queryArg['type']},
        }),
        providesTags: ['Investigation'],
      }),
      apiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPost:
        build.mutation<
          ApiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPostApiResponse,
          ApiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Investigation/RecordInvestigationResultForElectroRadAndPulm`,
            method: 'POST',
            body: queryArg.body,
          }),
          invalidatesTags: ['Investigation'],
        }),
      apiServicesAppInvestigationGetinvestigationresultforelectroradandpulmGet:
        build.query<
          ApiServicesAppInvestigationGetinvestigationresultforelectroradandpulmGetApiResponse,
          ApiServicesAppInvestigationGetinvestigationresultforelectroradandpulmGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Investigation/GetInvestigationResultForElectroRadAndPulm`,
            params: {
              patientId: queryArg.patientId,
              investigationRequestId: queryArg.investigationRequestId,
            },
          }),
          providesTags: ['Investigation'],
        }),
      apiServicesAppInvestigationGetradiologyandpulmonaryinvestigationsGet:
        build.query<
          ApiServicesAppInvestigationGetradiologyandpulmonaryinvestigationsGetApiResponse,
          ApiServicesAppInvestigationGetradiologyandpulmonaryinvestigationsGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Investigation/GetRadiologyAndPulmonaryInvestigations`,
            params: {investigationId: queryArg.investigationId},
          }),
          providesTags: ['Investigation'],
        }),
      apiServicesAppInvoicesCreatenewinvestigationinvoicePost: build.mutation<
        ApiServicesAppInvoicesCreatenewinvestigationinvoicePostApiResponse,
        ApiServicesAppInvoicesCreatenewinvestigationinvoicePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/CreateNewInvestigationInvoice`,
          method: 'POST',
          body: queryArg.createNewInvestigationInvoiceCommand,
        }),
        invalidatesTags: ['Invoices'],
      }),
      apiServicesAppPatientprofileGetclinicalinvestigationGet: build.query<
        ApiServicesAppPatientprofileGetclinicalinvestigationGetApiResponse,
        ApiServicesAppPatientprofileGetclinicalinvestigationGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetClinicalInvestigation`,
          params: {
            PatientId: queryArg.patientId,
            CategoryFilter: queryArg.categoryFilter,
            TestFilter: queryArg.testFilter,
            DateFilter: queryArg.dateFilter,
          },
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetawaitingclinicalinvestigationresultGet:
        build.query<
          ApiServicesAppPatientprofileGetawaitingclinicalinvestigationresultGetApiResponse,
          ApiServicesAppPatientprofileGetawaitingclinicalinvestigationresultGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/GetAwaitingClinicalInvestigationResult`,
            params: {
              PatientId: queryArg.patientId,
              CategoryFilter: queryArg.categoryFilter,
              TestFilter: queryArg.testFilter,
              DateFilter: queryArg.dateFilter,
            },
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPricesettingsAddinvestigationpricingPost: build.mutation<
        ApiServicesAppPricesettingsAddinvestigationpricingPostApiResponse,
        ApiServicesAppPricesettingsAddinvestigationpricingPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PriceSettings/AddInvestigationPricing`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['PriceSettings'],
      }),
      apiServicesAppPricesettingsUpdateinvestigationpricingPut: build.mutation<
        ApiServicesAppPricesettingsUpdateinvestigationpricingPutApiResponse,
        ApiServicesAppPricesettingsUpdateinvestigationpricingPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PriceSettings/UpdateInvestigationPricing`,
          method: 'PUT',
          body: queryArg.updateInvestigationPricingRequestCommand,
        }),
        invalidatesTags: ['PriceSettings'],
      }),
      apiServicesAppPricesettingsGetinvestigationpricingGet: build.query<
        ApiServicesAppPricesettingsGetinvestigationpricingGetApiResponse,
        ApiServicesAppPricesettingsGetinvestigationpricingGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PriceSettings/GetInvestigationPricing`,
          params: {
            TestName: queryArg.testName,
            InvestigationType: queryArg.investigationType,
            SortBy: queryArg.sortBy,
            InvestigationPricingId: queryArg.investigationPricingId,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['PriceSettings'],
      }),
      apiServicesAppPricesettingsGetinvestigationpricingsortitemsGet:
        build.query<
          ApiServicesAppPricesettingsGetinvestigationpricingsortitemsGetApiResponse,
          ApiServicesAppPricesettingsGetinvestigationpricingsortitemsGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PriceSettings/GetInvestigationPricingSortItems`,
          }),
          providesTags: ['PriceSettings'],
        }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as investigationApi};
export type ApiServicesAppCreateinvestigationresultreviewerhandlerHandlePostApiResponse =
  unknown;
export type ApiServicesAppCreateinvestigationresultreviewerhandlerHandlePostApiArg =
  {
    facilityId?: number;
    investigationResultReviewerRequestDto: InvestigationResultReviewerRequestDto;
  };
export type ApiServicesAppInvestigationGetallGetApiResponse =
  /** status 200 Success */ GetAllInvestigationsResponse[];
export type ApiServicesAppInvestigationGetallGetApiArg = {
  type?: string;
  filter?: string;
};
export type ApiServicesAppInvestigationGetinvestigationGetApiResponse =
  /** status 200 Success */ GetInvestigationResponse;
export type ApiServicesAppInvestigationGetinvestigationGetApiArg = {
  id?: number;
  patientId?: number;
};
export type ApiServicesAppInvestigationRequestinvestigationPostApiResponse =
  unknown;
export type ApiServicesAppInvestigationRequestinvestigationPostApiArg = {
  body: RequestInvestigationRequest[];
};
export type ApiServicesAppInvestigationGetinvestigationsrequestsGetApiResponse =
  /** status 200 Success */ GetInvestigationRequestsResponse[];
export type ApiServicesAppInvestigationGetinvestigationsrequestsGetApiArg = {
  patientId?: number;
  type?: string;
  procedureId?: number;
};
export type ApiServicesAppInvestigationRecordinvestigationPostApiResponse =
  unknown;
export type ApiServicesAppInvestigationRecordinvestigationPostApiArg = {
  recordInvestigationRequest: RecordInvestigationRequest;
};
export type ApiServicesAppInvestigationGetinvestigationresultsGetApiResponse =
  /** status 200 Success */ GetInvestigationResultsResponse[];
export type ApiServicesAppInvestigationGetinvestigationresultsGetApiArg = {
  patientId?: number;
  type?: string;
  filter?: string;
  procedureId?: number;
};
export type ApiServicesAppInvestigationDeleteinvestigationrequestDeleteApiResponse =
  unknown;
export type ApiServicesAppInvestigationDeleteinvestigationrequestDeleteApiArg =
  {
    requestId?: number;
  };
export type ApiServicesAppInvestigationLinktodiagnosisPostApiResponse = unknown;
export type ApiServicesAppInvestigationLinktodiagnosisPostApiArg = {
  linkInvestigationToDiagnosisRequest: LinkInvestigationToDiagnosisRequest;
};
export type ApiServicesAppInvestigationGetinvestigationtypesGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppInvestigationGetinvestigationtypesGetApiArg = void;
export type ApiServicesAppInvestigationGetilaboratoryqueueinvestigationstatuslistGetApiResponse =
  /** status 200 Success */ IdentificationTypeDto[];
export type ApiServicesAppInvestigationGetilaboratoryqueueinvestigationstatuslistGetApiArg =
  void;
export type ApiServicesAppInvestigationGetlaboratoryqueueinvestigationresultsGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfInvestigationsForLaboratoryQueueResponse;
export type ApiServicesAppInvestigationGetlaboratoryqueueinvestigationresultsGetApiArg =
  {
    patientName?: string;
    orderBy?: string;
    investigationCategory?: string;
    status?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppInvestigationInvestigationrequestforpatientPostApiResponse =
  /** status 200 Success */ {
    [key: string]: GetInvestigationForPatientResponse;
  };
export type ApiServicesAppInvestigationInvestigationrequestforpatientPostApiArg =
  {
    getPatientInvestigationRequest: GetPatientInvestigationRequest;
  };
export type ApiServicesAppInvestigationLabqueuesummaryinvestigationpricesPostApiResponse =
  /** status 200 Success */ GetInvestigationPricessResponse;
export type ApiServicesAppInvestigationLabqueuesummaryinvestigationpricesPostApiArg =
  {
    getInvestigationPricesRequest: GetInvestigationPricesRequest;
  };
export type ApiServicesAppInvestigationGetlabresulttestinfoGetApiResponse =
  /** status 200 Success */ ViewTestInfoResponse;
export type ApiServicesAppInvestigationGetlabresulttestinfoGetApiArg = {
  patientId?: number;
  investigationRequestId?: number;
};
export type ApiServicesAppInvestigationGetlabtestresultGetApiResponse =
  /** status 200 Success */ ViewTestResultResponse;
export type ApiServicesAppInvestigationGetlabtestresultGetApiArg = {
  patientId?: number;
  investigationRequestId?: number;
};
export type ApiServicesAppInvestigationRecordinvestigationsamplePostApiResponse =
  unknown;
export type ApiServicesAppInvestigationRecordinvestigationsamplePostApiArg = {
  recordInvestigationSampleRequest: RecordInvestigationSampleRequest;
};
export type ApiServicesAppInvestigationCreateorupdateinvestigationresultreviewerPostApiResponse =
  unknown;
export type ApiServicesAppInvestigationCreateorupdateinvestigationresultreviewerPostApiArg =
  {
    investigationResultReviewerRequestDto: InvestigationResultReviewerRequestDto;
  };
export type ApiServicesAppInvestigationGetinvestigationspecimensGetApiResponse =
  /** status 200 Success */ GetInvestigationSpecimensResponse;
export type ApiServicesAppInvestigationGetinvestigationspecimensGetApiArg = {
  type?: string;
};
export type ApiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPostApiResponse =
  unknown;
export type ApiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPostApiArg =
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
      ImageFiles: Blob[];
    };
  };
export type ApiServicesAppInvestigationGetinvestigationresultforelectroradandpulmGetApiResponse =
  /** status 200 Success */ ElectroRadPulmInvestigationResultResponseDto;
export type ApiServicesAppInvestigationGetinvestigationresultforelectroradandpulmGetApiArg =
  {
    patientId?: number;
    investigationRequestId?: number;
  };
export type ApiServicesAppInvestigationGetradiologyandpulmonaryinvestigationsGetApiResponse =
  /** status 200 Success */ RadiologyAndPulmonaryInvestigationDto[];
export type ApiServicesAppInvestigationGetradiologyandpulmonaryinvestigationsGetApiArg =
  {
    investigationId?: number;
  };
export type ApiServicesAppInvoicesCreatenewinvestigationinvoicePostApiResponse =
  /** status 200 Success */ CreateNewInvestigationInvoiceCommand;
export type ApiServicesAppInvoicesCreatenewinvestigationinvoicePostApiArg = {
  createNewInvestigationInvoiceCommand: CreateNewInvestigationInvoiceCommand;
};
export type ApiServicesAppPatientprofileGetclinicalinvestigationGetApiResponse =
  /** status 200 Success */ ClinicalInvestigationResultResponse[];
export type ApiServicesAppPatientprofileGetclinicalinvestigationGetApiArg = {
  patientId?: number;
  categoryFilter?: string;
  testFilter?: string;
  dateFilter?: InvestigationResultDateFilter;
};
export type ApiServicesAppPatientprofileGetawaitingclinicalinvestigationresultGetApiResponse =
  /** status 200 Success */ AwaitClinicalInvestigationResultResponse[];
export type ApiServicesAppPatientprofileGetawaitingclinicalinvestigationresultGetApiArg =
  {
    patientId?: number;
    categoryFilter?: string;
    testFilter?: string;
    dateFilter?: InvestigationResultDateFilter;
  };
export type ApiServicesAppPricesettingsAddinvestigationpricingPostApiResponse =
  unknown;
export type ApiServicesAppPricesettingsAddinvestigationpricingPostApiArg = {
  body: CreateInvestigationPricingDto[];
};
export type ApiServicesAppPricesettingsUpdateinvestigationpricingPutApiResponse =
  unknown;
export type ApiServicesAppPricesettingsUpdateinvestigationpricingPutApiArg = {
  updateInvestigationPricingRequestCommand: UpdateInvestigationPricingRequestCommand;
};
export type ApiServicesAppPricesettingsGetinvestigationpricingGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetInvestigationPricingResponseDto;
export type ApiServicesAppPricesettingsGetinvestigationpricingGetApiArg = {
  testName?: string;
  investigationType?: string;
  sortBy?: string;
  investigationPricingId?: number;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPricesettingsGetinvestigationpricingsortitemsGetApiResponse =
  /** status 200 Success */ IdentificationTypeDto[];
export type ApiServicesAppPricesettingsGetinvestigationpricingsortitemsGetApiArg =
  void;
export type InvestigationResultReviewerRequestDto = {
  investigationResultId?: number | null;
  electroRadPulmInvestigationResultId?: number | null;
  reviewerId?: number | null;
  id?: number;
};
export type GetAllInvestigationsResponse = {
  id?: number;
  name?: string | null;
  specimen?: string | null;
};
export type UnitOfTime = 'Day' | 'Week' | 'Month' | 'Year';
export type GenderType = 'Male' | 'Female' | 'Other';
export type InvestigationRangeDto = {
  ageMin?: number | null;
  ageMinUnit?: UnitOfTime;
  ageMax?: number | null;
  ageMaxUnit?: UnitOfTime;
  gender?: GenderType;
  unit?: string | null;
  minRange?: number | null;
  maxRange?: number | null;
};
export type InvestigationSuggestionDto = {
  result?: string | null;
  snomedId?: string | null;
  category?: string | null;
  normal?: boolean;
};
export type InvestigationResultsDto = {
  result?: string | null;
  normal?: boolean;
};
export type DipstickResultDto = {
  result?: string | null;
  order?: number;
};
export type DipstickRangeDto = {
  unit?: string | null;
  results?: DipstickResultDto[] | null;
};
export type DipstickDto = {
  parameter?: string | null;
  ranges?: DipstickRangeDto[] | null;
};
export type GetInvestigationResponse = {
  id?: number;
  name?: string | null;
  shortName?: string | null;
  snomedId?: string | null;
  synonyms?: string | null;
  specimen?: string | null;
  nugentScore?: boolean;
  components?: GetInvestigationResponse[] | null;
  ranges?: InvestigationRangeDto[] | null;
  suggestions?: InvestigationSuggestionDto[] | null;
  results?: InvestigationResultsDto[] | null;
  dipstick?: DipstickDto[] | null;
};
export type RequestInvestigationRequest = {
  patientId?: number;
  investigationId?: number;
  urgent?: boolean;
  withContrast?: boolean;
  notes?: string | null;
  encounterId?: number | null;
  procedureId?: number | null;
};
export type GetInvestigationRequestsResponse = {
  id?: number;
  investigationId?: number;
  name?: string | null;
  type?: string | null;
  specimen?: string | null;
  specificOrganism?: string | null;
  urgent?: boolean;
  withContrast?: boolean;
  creationTime?: string;
  procedureId?: number | null;
};
export type InvestigationComponentResultDto = {
  category?: string | null;
  name?: string | null;
  result?: string | null;
  numericResult?: number;
  reference?: string | null;
  rangeMin?: number;
  rangeMax?: number;
  unit?: string | null;
};
export type RecordInvestigationRequest = {
  patientId?: number;
  investigationId?: number;
  investigationRequestId?: number;
  name?: string | null;
  reference?: string | null;
  sampleCollectionDate?: string;
  resultDate?: string;
  sampleTime?: string;
  resultTime?: string;
  specimen?: string | null;
  conclusion?: string | null;
  specificOrganism?: string | null;
  view?: string | null;
  notes?: string | null;
  encounterId?: number;
  reviewerId?: number | null;
  procedureId?: number | null;
  investigationComponentResults?: InvestigationComponentResultDto[] | null;
};
export type GetInvestigationResultsResponse = {
  patientId?: number;
  investigationId?: number;
  investigationRequestId?: number;
  name?: string | null;
  type?: string | null;
  reference?: string | null;
  sampleCollectionDate?: string;
  resultDate?: string;
  sampleTime?: string;
  resultTime?: string;
  specimen?: string | null;
  conclusion?: string | null;
  specificOrganism?: string | null;
  view?: string | null;
  notes?: string | null;
  creationTime?: string;
  procedureId?: number | null;
  investigationComponentResults?: InvestigationComponentResultDto[] | null;
};
export type LinkInvestigationToDiagnosisRequest = {
  investigationRequestId?: number;
  diagnosisId?: number;
};
export type IdentificationTypeDto = {
  label?: string | null;
  value?: string | null;
};
export type PatientDetail = {
  patientId?: number;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  patientDisplayName?: string | null;
  patientImageUrl?: string | null;
  age?: string | null;
  gender?: string | null;
  patientCode?: string | null;
  lastModifiedTime?: string;
  creationTime?: string;
};
export type MoneyDto = {
  amount: number;
  currency: string;
};
export type ModifierOrCreatorDetailDto = {
  title?: string | null;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  unit?: string | null;
};
export type InvestigationResponseList = {
  investigationName?: string | null;
  investigationNote?: string | null;
  specimen?: string | null;
  organism?: string | null;
  amount?: MoneyDto;
  dateCreatedOrLastModified?: string;
  investigationCategory?: string | null;
  investigationId?: number;
  investigationRequestId?: number;
  creatorOrModifierInfo?: ModifierOrCreatorDetailDto;
  status?: string | null;
};
export type InvestigationsForLaboratoryQueueResponse = {
  patientDetail?: PatientDetail;
  investigationItems?: InvestigationResponseList[] | null;
};
export type PagedResultDtoOfInvestigationsForLaboratoryQueueResponse = {
  totalCount?: number;
  items?: InvestigationsForLaboratoryQueueResponse[] | null;
};
export type InvestigationStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type GetInvestigationForPatientResponse = {
  patientId?: number;
  status?: InvestigationStatus;
  nameOfInvestigation?: string | null;
  dateRequested?: string;
  isDeleted?: boolean;
};
export type GetPatientInvestigationRequest = {
  investigationIds?: number[] | null;
  patientId?: number;
};
export type GetInvestigationPricessResponse = {
  investigationsAndPrices?: {
    [key: string]: MoneyDto;
  } | null;
};
export type GetInvestigationPricesRequest = {
  investigationIds?: number[] | null;
};
export type ViewTestInfoResponse = {
  patientFirstName?: string | null;
  patientLastName?: string | null;
  patientAge?: string | null;
  gender?: string | null;
  patientImageUrl?: string | null;
  patientCode?: string | null;
  requestorFirstName?: string | null;
  requestorLastName?: string | null;
  requestorContactPhoneNumber?: string | null;
  requestorUnit?: string | null;
  requestorTitle?: string | null;
  requestorImageUrl?: string | null;
  diagnosisDescription?: string | null;
  diagnosisNotes?: string | null;
  testName?: string | null;
  specimen?: string | null;
  organism?: string | null;
  testCategory?: string | null;
  testStatus?: string | null;
  clinicOrWard?: string | null;
  investigationRequestNotes?: string | null;
  dateRequested?: string;
};
export type LabInvestigationResultsDto = {
  name?: string | null;
  result?: string | null;
  reference?: string | null;
  minRange?: number;
  maxRange?: number;
  procedureId?: number | null;
};
export type ViewTestResultResponse = {
  patientFirstName?: string | null;
  patientLastName?: string | null;
  patientAge?: string | null;
  gender?: string | null;
  patientImageUrl?: string | null;
  patientCode?: string | null;
  requestorFirstName?: string | null;
  requestorLastName?: string | null;
  requestorContactPhoneNumber?: string | null;
  requestorUnit?: string | null;
  requestorTitle?: string | null;
  requestorImageUrl?: string | null;
  dateRequested?: string;
  investigationRequestNote?: string | null;
  diagnosisDescription?: string | null;
  diagnosisNotes?: string | null;
  testName?: string | null;
  specimen?: string | null;
  organism?: string | null;
  testCategory?: string | null;
  testStatus?: string | null;
  clinicOrWard?: string | null;
  processingLabPersonnel?: string | null;
  reviewerFullName?: string | null;
  timeOfResultCollection?: string;
  dateOfResultCollection?: string;
  timeOfSampleCollection?: string;
  dateOfSampleCollection?: string;
  investigationResultId?: number;
  investigationResults?: LabInvestigationResultsDto[] | null;
  notes?: string | null;
  conclusion?: string | null;
};
export type RecordInvestigationSampleRequest = {
  patientId?: number;
  investigationId?: number;
  investigationRequestId?: number;
  encounterId?: number;
  nameOfInvestigation?: string | null;
  sampleCollectionDate?: string;
  sampleCollectionTime?: string;
  specimen?: string | null;
  procedureId?: number | null;
};
export type GetInvestigationSpecimensResponse = {
  specimens?: string[] | null;
};
export type ElectroRadPulmInvestigationResultResponseDto = {
  patientId?: number;
  investigationRequestId?: number;
  resultTime?: string;
  resultDate?: string;
  conclusions?: string | null;
  resultImageUrls?: string[] | null;
};
export type RadiologyAndPulmonaryInvestigationDto = {
  id?: number;
  investigationId?: number;
  name?: string | null;
  category?: string | null;
};
export type PaymentTypes =
  | 'ServiceOnCredit'
  | 'Wallet'
  | 'SplitPayment'
  | 'Insurance';
export type InvoiceItemRequest = {
  name?: string | null;
  quantity?: number;
  unitPrice?: MoneyDto;
  subTotal?: MoneyDto;
  discountPercentage?: number;
  isGlobal?: boolean;
  isDeleted?: boolean;
  id?: number | null;
};
export type InvoiceSource =
  | 'AccidentAndEmergency'
  | 'OutPatient'
  | 'InPatient'
  | 'Pharmacy'
  | 'Lab'
  | 'Others';
export type CreateNewInvestigationInvoiceCommand = {
  invoiceNo: string;
  appointmentId: number;
  patientId: number;
  paymentType: PaymentTypes;
  totalAmount?: MoneyDto;
  isServiceOnCredit?: boolean;
  encounterId?: number | null;
  items?: InvoiceItemRequest[] | null;
  invoiceSource?: InvoiceSource;
  id?: number | null;
};
export type ResultComponentResponse = {
  category?: string | null;
  name?: string | null;
  result?: string | null;
  numericResult?: number;
  reference?: string | null;
  rangeMin?: number;
  rangeMax?: number;
  unit?: string | null;
};
export type ClinicalInvestigationResultResponse = {
  name?: string | null;
  date?: string;
  note?: string | null;
  conclusion?: string | null;
  resultComponent?: ResultComponentResponse[] | null;
  facilityId?: number | null;
};
export type InvestigationResultDateFilter =
  | 'Today'
  | 'LastSevenDays'
  | 'LastFourteenDays'
  | 'LastThirtyDays'
  | 'LastNinetyDays'
  | 'LastOneYear';
export type AwaitClinicalInvestigationResultResponse = {
  name?: string | null;
  physician?: string | null;
  clinic?: string | null;
  date?: string;
};
export type CreateInvestigationPricingDto = {
  investigationId: number;
  amount?: MoneyDto;
  isActive: boolean;
  notes?: string | null;
};
export type UpdateInvestigationPricingRequestCommand = {
  investigationPricingId: number;
  investigationId: number;
  amount?: MoneyDto;
  isActive: boolean;
  notes?: string | null;
};
export type GetInvestigationPricingResponseDto = {
  id?: number;
  investigationId?: number;
  nameOfInvestigation?: string | null;
  typeOfInvestigation?: string | null;
  amount?: MoneyDto;
  isActive?: boolean;
  notes?: string | null;
  dateCreated?: string;
};
export type PagedResultDtoOfGetInvestigationPricingResponseDto = {
  totalCount?: number;
  items?: GetInvestigationPricingResponseDto[] | null;
};
export const {
  useApiServicesAppCreateinvestigationresultreviewerhandlerHandlePostMutation,
  useApiServicesAppInvestigationGetallGetQuery,
  useApiServicesAppInvestigationGetinvestigationGetQuery,
  useApiServicesAppInvestigationRequestinvestigationPostMutation,
  useApiServicesAppInvestigationGetinvestigationsrequestsGetQuery,
  useApiServicesAppInvestigationRecordinvestigationPostMutation,
  useApiServicesAppInvestigationGetinvestigationresultsGetQuery,
  useApiServicesAppInvestigationDeleteinvestigationrequestDeleteMutation,
  useApiServicesAppInvestigationLinktodiagnosisPostMutation,
  useApiServicesAppInvestigationGetinvestigationtypesGetQuery,
  useApiServicesAppInvestigationGetilaboratoryqueueinvestigationstatuslistGetQuery,
  useApiServicesAppInvestigationGetlaboratoryqueueinvestigationresultsGetQuery,
  useApiServicesAppInvestigationInvestigationrequestforpatientPostMutation,
  useApiServicesAppInvestigationLabqueuesummaryinvestigationpricesPostMutation,
  useApiServicesAppInvestigationGetlabresulttestinfoGetQuery,
  useApiServicesAppInvestigationGetlabtestresultGetQuery,
  useApiServicesAppInvestigationRecordinvestigationsamplePostMutation,
  useApiServicesAppInvestigationCreateorupdateinvestigationresultreviewerPostMutation,
  useApiServicesAppInvestigationGetinvestigationspecimensGetQuery,
  useApiServicesAppInvestigationRecordinvestigationresultforelectroradandpulmPostMutation,
  useApiServicesAppInvestigationGetinvestigationresultforelectroradandpulmGetQuery,
  useApiServicesAppInvestigationGetradiologyandpulmonaryinvestigationsGetQuery,
  useApiServicesAppInvoicesCreatenewinvestigationinvoicePostMutation,
  useApiServicesAppPatientprofileGetclinicalinvestigationGetQuery,
  useApiServicesAppPatientprofileGetawaitingclinicalinvestigationresultGetQuery,
  useApiServicesAppPricesettingsAddinvestigationpricingPostMutation,
  useApiServicesAppPricesettingsUpdateinvestigationpricingPutMutation,
  useApiServicesAppPricesettingsGetinvestigationpricingGetQuery,
  useApiServicesAppPricesettingsGetinvestigationpricingsortitemsGetQuery,
} = injectedRtkApi;

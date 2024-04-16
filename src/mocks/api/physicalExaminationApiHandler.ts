import {
  ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiResponse,
  ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiResponse,
  ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiResponse,
  ApiServicesAppPhysicalexaminationsGetGetApiResponse,
  ApiServicesAppPhysicalexaminationsGetheadersGetApiResponse,
  ApiServicesAppPhysicalexaminationsGetlistGetApiResponse,
  ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiResponse,
  ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiResponse,
  ApiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGetApiResponse,
  GetPhysicalExaminationHeadersResponse,
  GetPhysicalExaminationListResponse,
  GetPhysicalExaminationResponse,
  GetPhysicalExaminationTypeResponseDto,
  PatientPhysicalExaminationImageFileResponseDto,
  PatientPhysicalExaminationResponseDto,
} from '@/state/services/physicalExaminationsApi';
import {HttpResponse, http} from 'msw';

const deletePhysicalExamination = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/PhysicalExaminations/DeletePatientPhysicalExamination`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);
const deletePhysicalExaminationImage = http.delete(
  `${process.env.API_BASE_URL}/api/services/app/PhysicalExaminations/DeletePatientPhysicalExaminationImage`,
  () => {
    return HttpResponse.json({
      result:
        {} as ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const createPhysicalExamination = http.post(
  `${process.env.API_BASE_URL}/api/services/app/PhysicalExaminations/CreatePatientPhysicalExaminationAndUpload`,
  () => {
    return HttpResponse.json({
      result:
        2 as ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationanduploadPostApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getPhysicalExaminationSummary = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PhysicalExaminations/GetPatientPhysicalExaminationSummary`,
  () => {
    return HttpResponse.json({
      result:
        mockPatientPhysicalExaminationResponse as ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getPatientPhysicalExaminationUploadedImages = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PhysicalExaminations/GetPatientPhysicalExaminationUploadedImages`,
  () => {
    return HttpResponse.json({
      result:
        mockPatientPhysicalExaminationImageFileResponseDto as ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getPhysicalExaminationTypes = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PhysicalExaminations/GetPhysicalExaminationTypes`,
  () => {
    return HttpResponse.json({
      result:
        mockPhysicalExaminationTypeResponseArray as ApiServicesAppPhysicalexaminationsGetphysicalexaminationtypesGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getPhysicalExaminationHeaders = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PhysicalExaminations/GetHeaders`,
  () => {
    return HttpResponse.json({
      result:
        mockPhysicalExaminationHeaders as ApiServicesAppPhysicalexaminationsGetheadersGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getPhysicalExaminationList = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PhysicalExaminations/GetList`,
  () => {
    return HttpResponse.json({
      result:
        mockPhysicalExaminationListResponse as ApiServicesAppPhysicalexaminationsGetlistGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

const getPhysicalExaminations = http.get(
  `${process.env.API_BASE_URL}/api/services/app/PhysicalExaminations/Get`,
  () => {
    return HttpResponse.json({
      result:
        mockPhysicalExaminationResponse as ApiServicesAppPhysicalexaminationsGetGetApiResponse,
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    });
  },
);

export const physicalExaminationApiHandler = [
  deletePhysicalExamination,
  deletePhysicalExaminationImage,
  createPhysicalExamination,
  getPhysicalExaminationSummary,
  getPhysicalExaminationTypes,
  getPhysicalExaminationHeaders,
  getPhysicalExaminationList,
  getPhysicalExaminations,
  getPatientPhysicalExaminationUploadedImages,
];

const mockPatientPhysicalExaminationImageFileResponseDto: PatientPhysicalExaminationImageFileResponseDto[] =
  [
    {
      id: 1,
      patientPhysicalExaminationId: 1,
      fileId: 'abc123',
      fileName: 'example.jpg',
      fileUrl: 'https://example.com/image',
      creationTime: '2022-01-01T12:00:00Z',
    },
  ];

const mockPatientPhysicalExaminationResponse: PatientPhysicalExaminationResponseDto[] =
  [
    {
      id: 1,
      physicalExaminationEntryType: 0,
      physicalExaminationEntryTypeName: 'Preop',
      physicalExaminationTypeId: 2,
      physicalExaminationType: {
        id: 2,
        name: 'Example Type',
        type: 'Type A',
      },
      patientId: 3,
      otherNote: 'Additional notes',
      creationTime: '2022-01-01T12:00:00Z',
      deletionTime: null,
      typeNotes: [
        {
          type: 'Type 1',
          note: 'Note 1',
        },
        {
          type: 'Type 2',
          note: 'Note 2',
        },
      ],
      suggestions: [
        {
          headerName: 'Header 1',
          patientPhysicalExamSuggestionAnswers: [
            {
              snowmedId: '12345',
              description: 'Description 1',
              isAbsent: false,
              sites: null,
              planes: null,
              qualifiers: null,
            },
          ],
        },
      ],
      procedureEntryType: 'Intraop',
      imageUploaded: true,
      encounterId: 4,
      procedureId: null,
      isDeleted: false,
      deletedUser: null,
    },
  ];

const mockPhysicalExaminationTypeResponseArray: GetPhysicalExaminationTypeResponseDto[] =
  [
    {
      id: 1,
      name: 'Mock Physical Examination Type 1',
      type: 'Mock Type 1',
    },
    {
      id: 2,
      name: 'Mock Physical Examination Type 2',
      type: 'Mock Type 2',
    },
  ];

const mockPhysicalExaminationHeaders: GetPhysicalExaminationHeadersResponse = {
  headers: ['Header1', 'Header2', 'Header3'],
};

export const mockPhysicalExaminationListResponse: GetPhysicalExaminationListResponse[] =
  [
    {
      id: 1,
      type: 'Type A',
      header: 'Header 1',
      presentTerms: 'Term 1',
      snomedId: '12345',
      absentTerms: 'Term 2',
      absentTermsSnomedId: '54321',
      hasQualifiers: true,
    },
    {
      id: 2,
      type: 'Type B',
      header: 'Header 2',
      presentTerms: 'Term 3',
      snomedId: '67890',
      absentTerms: 'Term 4',
      absentTermsSnomedId: '09876',
      hasQualifiers: false,
    },
  ];

export const mockPhysicalExaminationResponse: GetPhysicalExaminationResponse = {
  type: 'Type X',
  header: 'Header X',
  presentTerms: 'Term X',
  snomedId: '54321',
  absentTerms: 'Term Y',
  absentTermsSnomedId: '12345',
  site: true,
  plane: false,
  qualifiers: [
    {
      subQualifier: 'Sub Q',
      subDivision: 'Sub D',
      qualifier: 'Qualifier',
      snomedId: '98765',
    },
  ],
  planeTypes: ['Type A', 'Type B'],
  unit: 'Unit X',
};

import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'Admissions',
  'Appointment',
  'BedMaking',
  'Diagnosis',
  'Discharge',
  'FacilityGroups',
  'Feeding',
  'InputNotes',
  'Investigation',
  'Invoices',
  'Meals',
  'Medication',
  'MockData',
  'NextAppointment',
  'NurseDischarge',
  'PatientAppointments',
  'PatientCodeTemplates',
  'PatientDocumentUpload',
  'PatientInsurers',
  'PatientOccupations',
  'PatientProfile',
  'PatientReferralDocuments',
  'PatientRelations',
  'Patients',
  'PatientWallet',
  'PhysicalExaminations',
  'PlanItems',
  'Procedure',
  'ReviewDetailedHistory',
  'Symptom',
  'Vaccine',
  'VitalSigns',
  'WardEmergencies',
  'WoundDressing',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppAdmissionsAdmitpatientPost: build.mutation<
        ApiServicesAppAdmissionsAdmitpatientPostApiResponse,
        ApiServicesAppAdmissionsAdmitpatientPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Admissions/AdmitPatient`,
          method: 'POST',
          body: queryArg.admitPatientRequest,
        }),
        invalidatesTags: ['Admissions'],
      }),
      apiServicesAppAdmissionsTransferpatientPost: build.mutation<
        ApiServicesAppAdmissionsTransferpatientPostApiResponse,
        ApiServicesAppAdmissionsTransferpatientPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Admissions/TransferPatient`,
          method: 'POST',
          body: queryArg.transferPatientRequest,
        }),
        invalidatesTags: ['Admissions'],
      }),
      apiServicesAppAdmissionsCompletetransferpatientPost: build.mutation<
        ApiServicesAppAdmissionsCompletetransferpatientPostApiResponse,
        ApiServicesAppAdmissionsCompletetransferpatientPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Admissions/CompleteTransferPatient`,
          method: 'POST',
          params: {encounterId: queryArg.encounterId},
        }),
        invalidatesTags: ['Admissions'],
      }),
      apiServicesAppAppointmentGetmostrecentappointmentforpatientGet:
        build.query<
          ApiServicesAppAppointmentGetmostrecentappointmentforpatientGetApiResponse,
          ApiServicesAppAppointmentGetmostrecentappointmentforpatientGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Appointment/GetMostRecentAppointmentForPatient`,
            params: {PatientId: queryArg.patientId},
          }),
          providesTags: ['Appointment'],
        }),
      apiServicesAppBedmakingGetpatientsummaryGet: build.query<
        ApiServicesAppBedmakingGetpatientsummaryGetApiResponse,
        ApiServicesAppBedmakingGetpatientsummaryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/BedMaking/GetPatientSummary`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['BedMaking'],
      }),
      apiServicesAppDiagnosisGetpatientdiagnosisGet: build.query<
        ApiServicesAppDiagnosisGetpatientdiagnosisGetApiResponse,
        ApiServicesAppDiagnosisGetpatientdiagnosisGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Diagnosis/GetPatientDiagnosis`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Diagnosis'],
      }),
      apiServicesAppDischargeGetpatientdischargeGet: build.query<
        ApiServicesAppDischargeGetpatientdischargeGetApiResponse,
        ApiServicesAppDischargeGetpatientdischargeGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Discharge/GetPatientDischarge`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Discharge'],
      }),
      apiServicesAppFacilitygroupsGetfacilitygrouppatientcodetemplatedetailsGet:
        build.query<
          ApiServicesAppFacilitygroupsGetfacilitygrouppatientcodetemplatedetailsGetApiResponse,
          ApiServicesAppFacilitygroupsGetfacilitygrouppatientcodetemplatedetailsGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/FacilityGroups/GetFacilityGroupPatientCodeTemplateDetails`,
          }),
          providesTags: ['FacilityGroups'],
        }),
      apiServicesAppFacilitygroupsCreateoreditpatientcodetemplatedetailsPost:
        build.mutation<
          ApiServicesAppFacilitygroupsCreateoreditpatientcodetemplatedetailsPostApiResponse,
          ApiServicesAppFacilitygroupsCreateoreditpatientcodetemplatedetailsPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/FacilityGroups/CreateOrEditPatientCodeTemplateDetails`,
            method: 'POST',
            body: queryArg.createOrEditFacilityGroupPatientCodeTemplateDto,
          }),
          invalidatesTags: ['FacilityGroups'],
        }),
      apiServicesAppFeedingGetpatientfeedingGet: build.query<
        ApiServicesAppFeedingGetpatientfeedingGetApiResponse,
        ApiServicesAppFeedingGetpatientfeedingGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Feeding/GetPatientFeeding`,
          params: {PatientId: queryArg.patientId},
        }),
        providesTags: ['Feeding'],
      }),
      apiServicesAppInputnotesGetpatientinputnotesGet: build.query<
        ApiServicesAppInputnotesGetpatientinputnotesGetApiResponse,
        ApiServicesAppInputnotesGetpatientinputnotesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InputNotes/GetPatientInputNotes`,
          params: {
            PatientId: queryArg.patientId,
            EncounterId: queryArg.encounterId,
            EntryType: queryArg.entryType,
            ProcedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['InputNotes'],
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
      apiServicesAppInvoicesGetallpatientforlookuptableGet: build.query<
        ApiServicesAppInvoicesGetallpatientforlookuptableGetApiResponse,
        ApiServicesAppInvoicesGetallpatientforlookuptableGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetAllPatientForLookupTable`,
          params: {
            Filter: queryArg.filter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetallpatientappointmentforlookuptableGet:
        build.query<
          ApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetApiResponse,
          ApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Invoices/GetAllPatientAppointmentForLookupTable`,
            params: {
              Filter: queryArg.filter,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['Invoices'],
        }),
      apiServicesAppInvoicesGetpaymentbillsbypatientidGet: build.query<
        ApiServicesAppInvoicesGetpaymentbillsbypatientidGetApiResponse,
        ApiServicesAppInvoicesGetpaymentbillsbypatientidGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetPaymentBillsByPatientId`,
          params: {
            PatientId: queryArg.patientId,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetpatientswithinvoiceitemsGet: build.query<
        ApiServicesAppInvoicesGetpatientswithinvoiceitemsGetApiResponse,
        ApiServicesAppInvoicesGetpatientswithinvoiceitemsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetPatientsWithInvoiceItems`,
          params: {
            StartDate: queryArg.startDate,
            EndDate: queryArg.endDate,
            Filter: queryArg.filter,
            PatientSeenFilter: queryArg.patientSeenFilter,
            InvoiceSource: queryArg.invoiceSource,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetpatienttotalsummaryheaderGet: build.query<
        ApiServicesAppInvoicesGetpatienttotalsummaryheaderGetApiResponse,
        ApiServicesAppInvoicesGetpatienttotalsummaryheaderGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetPatientTotalSummaryHeader`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetpatientinvoicesandwallettransactionsGet:
        build.query<
          ApiServicesAppInvoicesGetpatientinvoicesandwallettransactionsGetApiResponse,
          ApiServicesAppInvoicesGetpatientinvoicesandwallettransactionsGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Invoices/GetPatientInvoicesAndWalletTransactions`,
            params: {
              PatientId: queryArg.patientId,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['Invoices'],
        }),
      apiServicesAppInvoicesGetallproformainvoicebypatientidGet: build.query<
        ApiServicesAppInvoicesGetallproformainvoicebypatientidGetApiResponse,
        ApiServicesAppInvoicesGetallproformainvoicebypatientidGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetAllProformaInvoiceByPatientId`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppMealsGetpatientmealsGet: build.query<
        ApiServicesAppMealsGetpatientmealsGetApiResponse,
        ApiServicesAppMealsGetpatientmealsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Meals/GetPatientMeals`,
          params: {PatientId: queryArg.patientId},
        }),
        providesTags: ['Meals'],
      }),
      apiServicesAppMedicationGetpatientprescriptionsGet: build.query<
        ApiServicesAppMedicationGetpatientprescriptionsGetApiResponse,
        ApiServicesAppMedicationGetpatientprescriptionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Medication/GetPatientPrescriptions`,
          params: {
            patientId: queryArg.patientId,
            procedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['Medication'],
      }),
      apiServicesAppMockdataCreatemockpatientandappointmentsfortodayPost:
        build.mutation<
          ApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostApiResponse,
          ApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/MockData/CreateMockPatientAndAppointmentsForToday`,
            method: 'POST',
            params: {
              count: queryArg.count,
              staffMemberOrAttendingPhysicianId:
                queryArg.staffMemberOrAttendingPhysicianId,
              orgUnitOrAttendingClinicId: queryArg.orgUnitOrAttendingClinicId,
            },
          }),
          invalidatesTags: ['MockData'],
        }),
      apiServicesAppNextappointmentGetpatientnextappointmentsGet: build.query<
        ApiServicesAppNextappointmentGetpatientnextappointmentsGetApiResponse,
        ApiServicesAppNextappointmentGetpatientnextappointmentsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NextAppointment/GetPatientNextAppointments`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['NextAppointment'],
      }),
      apiServicesAppNextappointmentGetdoctorpatientnextappointmentsGet:
        build.query<
          ApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetApiResponse,
          ApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/NextAppointment/GetDoctorPatientNextAppointments`,
            params: {patientId: queryArg.patientId},
          }),
          providesTags: ['NextAppointment'],
        }),
      apiServicesAppNursedischargeGetpatientdischargewithencounteridGet:
        build.query<
          ApiServicesAppNursedischargeGetpatientdischargewithencounteridGetApiResponse,
          ApiServicesAppNursedischargeGetpatientdischargewithencounteridGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/NurseDischarge/GetPatientDischargeWithEncounterId`,
            params: {encounterId: queryArg.encounterId},
          }),
          providesTags: ['NurseDischarge'],
        }),
      apiServicesAppNursedischargeGetpatientdischargeGet: build.query<
        ApiServicesAppNursedischargeGetpatientdischargeGetApiResponse,
        ApiServicesAppNursedischargeGetpatientdischargeGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/NurseDischarge/GetPatientDischarge`,
          params: {dischargeId: queryArg.dischargeId},
        }),
        providesTags: ['NurseDischarge'],
      }),
      apiServicesAppPatientappointmentsGetallGet: build.query<
        ApiServicesAppPatientappointmentsGetallGetApiResponse,
        ApiServicesAppPatientappointmentsGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientAppointments/GetAll`,
          params: {
            Filter: queryArg.filter,
            TitleFilter: queryArg.titleFilter,
            MaxDurationFilter: queryArg.maxDurationFilter,
            MinDurationFilter: queryArg.minDurationFilter,
            MaxStartTimeFilter: queryArg.maxStartTimeFilter,
            MinStartTimeFilter: queryArg.minStartTimeFilter,
            IsRepeatFilter: queryArg.isRepeatFilter,
            NotesFilter: queryArg.notesFilter,
            StatusFilter: queryArg.statusFilter,
            TypeFilter: queryArg.typeFilter,
            PatientPatientCodeFilter: queryArg.patientPatientCodeFilter,
            PatientReferralReferringHospitalFilter:
              queryArg.patientReferralReferringHospitalFilter,
            StaffMemberStaffCodeFilter: queryArg.staffMemberStaffCodeFilter,
            OrganizationUnitDisplayNameFilter:
              queryArg.organizationUnitDisplayNameFilter,
            OrganizationUnitDisplayName2Filter:
              queryArg.organizationUnitDisplayName2Filter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['PatientAppointments'],
      }),
      apiServicesAppPatientappointmentsGetpatientappointmentforeditGet:
        build.query<
          ApiServicesAppPatientappointmentsGetpatientappointmentforeditGetApiResponse,
          ApiServicesAppPatientappointmentsGetpatientappointmentforeditGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientAppointments/GetPatientAppointmentForEdit`,
            params: {Id: queryArg.id},
          }),
          providesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientappointmentsGetconsultingroomsGet: build.query<
        ApiServicesAppPatientappointmentsGetconsultingroomsGetApiResponse,
        ApiServicesAppPatientappointmentsGetconsultingroomsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientAppointments/GetConsultingRooms`,
        }),
        providesTags: ['PatientAppointments'],
      }),
      apiServicesAppPatientappointmentsGetallpatientforlookuptableGet:
        build.query<
          ApiServicesAppPatientappointmentsGetallpatientforlookuptableGetApiResponse,
          ApiServicesAppPatientappointmentsGetallpatientforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientAppointments/GetAllPatientForLookupTable`,
            params: {
              Filter: queryArg.filter,
              OutPatientListingType: queryArg.outPatientListingType,
              Status: queryArg.status,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGet:
        build.query<
          ApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetApiResponse,
          ApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientAppointments/GetAllPatientReferralForLookupTable`,
            params: {
              Filter: queryArg.filter,
              OutPatientListingType: queryArg.outPatientListingType,
              Status: queryArg.status,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGet:
        build.query<
          ApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetApiResponse,
          ApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientAppointments/GetAllStaffMemberForLookupTable`,
            params: {
              Filter: queryArg.filter,
              OutPatientListingType: queryArg.outPatientListingType,
              Status: queryArg.status,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGet:
        build.query<
          ApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetApiResponse,
          ApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientAppointments/GetAllOrganizationUnitForLookupTable`,
            params: {
              Filter: queryArg.filter,
              OutPatientListingType: queryArg.outPatientListingType,
              Status: queryArg.status,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientappointmentsUpdateappointmentstatusPut:
        build.mutation<
          ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiResponse,
          ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientAppointments/UpdateAppointmentStatus`,
            method: 'PUT',
            body: queryArg.editAppointmentStatusDto,
          }),
          invalidatesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientappointmentsGetappointmentsbypatientidGet:
        build.query<
          ApiServicesAppPatientappointmentsGetappointmentsbypatientidGetApiResponse,
          ApiServicesAppPatientappointmentsGetappointmentsbypatientidGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientAppointments/GetAppointmentsByPatientId`,
            params: {
              PatientId: queryArg.patientId,
              StartDate: queryArg.startDate,
              EndDate: queryArg.endDate,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['PatientAppointments'],
        }),
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
          invalidatesTags: ['PatientAppointments'],
        }),
      apiServicesAppPatientcodetemplatesGetpatientcodetemplateforeditGet:
        build.query<
          ApiServicesAppPatientcodetemplatesGetpatientcodetemplateforeditGetApiResponse,
          ApiServicesAppPatientcodetemplatesGetpatientcodetemplateforeditGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientCodeTemplates/GetPatientCodeTemplateForEdit`,
            params: {Id: queryArg.id},
          }),
          providesTags: ['PatientCodeTemplates'],
        }),
      apiServicesAppPatientcodetemplatesGetfacilitypatientcodetemplatebyfacilityidGet:
        build.query<
          ApiServicesAppPatientcodetemplatesGetfacilitypatientcodetemplatebyfacilityidGetApiResponse,
          ApiServicesAppPatientcodetemplatesGetfacilitypatientcodetemplatebyfacilityidGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientCodeTemplates/GetFacilityPatientCodeTemplateByFacilityId`,
            params: {facilityId: queryArg.facilityId},
          }),
          providesTags: ['PatientCodeTemplates'],
        }),
      apiServicesAppPatientcodetemplatesCreateoreditPost: build.mutation<
        ApiServicesAppPatientcodetemplatesCreateoreditPostApiResponse,
        ApiServicesAppPatientcodetemplatesCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientCodeTemplates/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditPatientCodeTemplateDto,
        }),
        invalidatesTags: ['PatientCodeTemplates'],
      }),
      apiServicesAppPatientcodetemplatesDeleteDelete: build.mutation<
        ApiServicesAppPatientcodetemplatesDeleteDeleteApiResponse,
        ApiServicesAppPatientcodetemplatesDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientCodeTemplates/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['PatientCodeTemplates'],
      }),
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
      apiServicesAppPatientinsurersGetallGet: build.query<
        ApiServicesAppPatientinsurersGetallGetApiResponse,
        ApiServicesAppPatientinsurersGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientInsurers/GetAll`,
          params: {
            Filter: queryArg.filter,
            InsuranceProviderNameFilter: queryArg.insuranceProviderNameFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['PatientInsurers'],
      }),
      apiServicesAppPatientinsurersGetpatientinsurerforeditGet: build.query<
        ApiServicesAppPatientinsurersGetpatientinsurerforeditGetApiResponse,
        ApiServicesAppPatientinsurersGetpatientinsurerforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientInsurers/GetPatientInsurerForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['PatientInsurers'],
      }),
      apiServicesAppPatientinsurersCreateoreditPost: build.mutation<
        ApiServicesAppPatientinsurersCreateoreditPostApiResponse,
        ApiServicesAppPatientinsurersCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientInsurers/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditPatientInsurerDto,
        }),
        invalidatesTags: ['PatientInsurers'],
      }),
      apiServicesAppPatientinsurersDeleteDelete: build.mutation<
        ApiServicesAppPatientinsurersDeleteDeleteApiResponse,
        ApiServicesAppPatientinsurersDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientInsurers/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['PatientInsurers'],
      }),
      apiServicesAppPatientinsurersGetallinsuranceproviderforlookuptableGet:
        build.query<
          ApiServicesAppPatientinsurersGetallinsuranceproviderforlookuptableGetApiResponse,
          ApiServicesAppPatientinsurersGetallinsuranceproviderforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientInsurers/GetAllInsuranceProviderForLookupTable`,
            params: {
              Filter: queryArg.filter,
              OutPatientListingType: queryArg.outPatientListingType,
              Status: queryArg.status,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['PatientInsurers'],
        }),
      apiServicesAppPatientoccupationsGetallGet: build.query<
        ApiServicesAppPatientoccupationsGetallGetApiResponse,
        ApiServicesAppPatientoccupationsGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientOccupations/GetAll`,
          params: {
            Filter: queryArg.filter,
            NameFilter: queryArg.nameFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['PatientOccupations'],
      }),
      apiServicesAppPatientoccupationsGetpatientoccupationforeditGet:
        build.query<
          ApiServicesAppPatientoccupationsGetpatientoccupationforeditGetApiResponse,
          ApiServicesAppPatientoccupationsGetpatientoccupationforeditGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientOccupations/GetPatientOccupationForEdit`,
            params: {Id: queryArg.id},
          }),
          providesTags: ['PatientOccupations'],
        }),
      apiServicesAppPatientoccupationsCreateoreditPost: build.mutation<
        ApiServicesAppPatientoccupationsCreateoreditPostApiResponse,
        ApiServicesAppPatientoccupationsCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientOccupations/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditPatientOccupationDto,
        }),
        invalidatesTags: ['PatientOccupations'],
      }),
      apiServicesAppPatientoccupationsDeleteDelete: build.mutation<
        ApiServicesAppPatientoccupationsDeleteDeleteApiResponse,
        ApiServicesAppPatientoccupationsDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientOccupations/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['PatientOccupations'],
      }),
      apiServicesAppPatientprofileDeletepatientallergyDelete: build.mutation<
        ApiServicesAppPatientprofileDeletepatientallergyDeleteApiResponse,
        ApiServicesAppPatientprofileDeletepatientallergyDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/DeletePatientAllergy`,
          method: 'DELETE',
          params: {id: queryArg.id},
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileEditpatientallergyPost: build.mutation<
        ApiServicesAppPatientprofileEditpatientallergyPostApiResponse,
        ApiServicesAppPatientprofileEditpatientallergyPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/EditPatientAllergy`,
          method: 'POST',
          body: queryArg.editPatientAllergyCommandRequest,
        }),
        invalidatesTags: ['PatientProfile'],
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
      apiServicesAppPatientprofileGetpatientmenstrualflowGet: build.query<
        ApiServicesAppPatientprofileGetpatientmenstrualflowGetApiResponse,
        ApiServicesAppPatientprofileGetpatientmenstrualflowGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientMenstrualFlow`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientmenstrualfrequencyGet: build.query<
        ApiServicesAppPatientprofileGetpatientmenstrualfrequencyGetApiResponse,
        ApiServicesAppPatientprofileGetpatientmenstrualfrequencyGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientMenstrualFrequency`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGettreatmentplansGet: build.query<
        ApiServicesAppPatientprofileGettreatmentplansGetApiResponse,
        ApiServicesAppPatientprofileGettreatmentplansGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetTreatmentPlans`,
          params: {PatientId: queryArg.patientId, Filter: queryArg.filter},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletemenstrualfrequencyDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletemenstrualfrequencyDeleteApiResponse,
          ApiServicesAppPatientprofileDeletemenstrualfrequencyDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeleteMenstrualFrequency`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileSavepatientfamilyhistoryPost: build.mutation<
        ApiServicesAppPatientprofileSavepatientfamilyhistoryPostApiResponse,
        ApiServicesAppPatientprofileSavepatientfamilyhistoryPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/SavePatientFamilyHistory`,
          method: 'POST',
          body: queryArg.patientFamilyHistoryDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientfamilyhistoryGet: build.query<
        ApiServicesAppPatientprofileGetpatientfamilyhistoryGetApiResponse,
        ApiServicesAppPatientprofileGetpatientfamilyhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientFamilyHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletepatientfamilymemberDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletepatientfamilymemberDeleteApiResponse,
          ApiServicesAppPatientprofileDeletepatientfamilymemberDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeletePatientFamilyMember`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileUpdatepatienfamilymemberdetailsPut:
        build.mutation<
          ApiServicesAppPatientprofileUpdatepatienfamilymemberdetailsPutApiResponse,
          ApiServicesAppPatientprofileUpdatepatienfamilymemberdetailsPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/UpdatePatienFamilyMemberDetails`,
            method: 'PUT',
            body: queryArg.updateFamilyMembersDto,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileUpdatepatientfamilyhistoryPut: build.mutation<
        ApiServicesAppPatientprofileUpdatepatientfamilyhistoryPutApiResponse,
        ApiServicesAppPatientprofileUpdatepatientfamilyhistoryPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/UpdatePatientFamilyHistory`,
          method: 'PUT',
          body: queryArg.patientFamilyHistoryDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletemenstrualflowDelete: build.mutation<
        ApiServicesAppPatientprofileDeletemenstrualflowDeleteApiResponse,
        ApiServicesAppPatientprofileDeletemenstrualflowDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/DeleteMenstrualFlow`,
          method: 'DELETE',
          params: {id: queryArg.id},
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileSavemenstruationandfrequencyPost:
        build.mutation<
          ApiServicesAppPatientprofileSavemenstruationandfrequencyPostApiResponse,
          ApiServicesAppPatientprofileSavemenstruationandfrequencyPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/SaveMenstruationAndFrequency`,
            method: 'POST',
            body: queryArg.saveMenstruationAndFrequencyCommand,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileCreatepatientallergyPost: build.mutation<
        ApiServicesAppPatientprofileCreatepatientallergyPostApiResponse,
        ApiServicesAppPatientprofileCreatepatientallergyPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/CreatePatientAllergy`,
          method: 'POST',
          body: queryArg.createPatientAllergyCommandRequest,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGet:
        build.query<
          ApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetApiResponse,
          ApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PatientProfile/GetPatientGynaecologicProcedureSuggestion`,
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetpatientallergiesGet: build.query<
        ApiServicesAppPatientprofileGetpatientallergiesGetApiResponse,
        ApiServicesAppPatientprofileGetpatientallergiesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientAllergies`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileSavemenstrualbloodflowPost: build.mutation<
        ApiServicesAppPatientprofileSavemenstrualbloodflowPostApiResponse,
        ApiServicesAppPatientprofileSavemenstrualbloodflowPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/SaveMenstrualBloodFlow`,
          method: 'POST',
          body: queryArg.saveMenstrualBloodFlowCommandRequest,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientgynaecologicalillnesssuggestionGet:
        build.query<
          ApiServicesAppPatientprofileGetpatientgynaecologicalillnesssuggestionGetApiResponse,
          ApiServicesAppPatientprofileGetpatientgynaecologicalillnesssuggestionGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PatientProfile/GetPatientGynaecologicalIllnessSuggestion`,
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileSavepatientpastmedicalhistoryPost:
        build.mutation<
          ApiServicesAppPatientprofileSavepatientpastmedicalhistoryPostApiResponse,
          ApiServicesAppPatientprofileSavepatientpastmedicalhistoryPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/SavePatientPastMedicalHistory`,
            method: 'POST',
            body: queryArg.patientPastMedicalConditionCommandRequest,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetpatientpastmedicalhistoryGet: build.query<
        ApiServicesAppPatientprofileGetpatientpastmedicalhistoryGetApiResponse,
        ApiServicesAppPatientprofileGetpatientpastmedicalhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientPastMedicalHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileCreatepatientphysicalexercisePost:
        build.mutation<
          ApiServicesAppPatientprofileCreatepatientphysicalexercisePostApiResponse,
          ApiServicesAppPatientprofileCreatepatientphysicalexercisePostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/CreatePatientPhysicalExercise`,
            method: 'POST',
            body: queryArg.createPhysicalExerciseCommandRequest,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetpatientphysicalexerciseGet: build.query<
        ApiServicesAppPatientprofileGetpatientphysicalexerciseGetApiResponse,
        ApiServicesAppPatientprofileGetpatientphysicalexerciseGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientPhysicalExercise`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileSavepatienttravelhistoryPost: build.mutation<
        ApiServicesAppPatientprofileSavepatienttravelhistoryPostApiResponse,
        ApiServicesAppPatientprofileSavepatienttravelhistoryPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/SavePatientTravelHistory`,
          method: 'POST',
          body: queryArg.body,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatienttravelhistoryGet: build.query<
        ApiServicesAppPatientprofileGetpatienttravelhistoryGetApiResponse,
        ApiServicesAppPatientprofileGetpatienttravelhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientTravelHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletepatienttravelhistoryDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletepatienttravelhistoryDeleteApiResponse,
          ApiServicesAppPatientprofileDeletepatienttravelhistoryDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeletePatientTravelHistory`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetchronicdiseasesuggestionGet: build.query<
        ApiServicesAppPatientprofileGetchronicdiseasesuggestionGetApiResponse,
        ApiServicesAppPatientprofileGetchronicdiseasesuggestionGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetChronicDiseaseSuggestion`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletepatientchronicconditionsDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletepatientchronicconditionsDeleteApiResponse,
          ApiServicesAppPatientprofileDeletepatientchronicconditionsDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeletePatientChronicConditions`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPost:
        build.mutation<
          ApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostApiResponse,
          ApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/SavePatientGenotypeAndBloodGroup`,
            method: 'POST',
            body: queryArg.updatePatientGenotypeAndBloodGroupCommandRequest,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetpatientmajorinjuryGet: build.query<
        ApiServicesAppPatientprofileGetpatientmajorinjuryGetApiResponse,
        ApiServicesAppPatientprofileGetpatientmajorinjuryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientMajorInjury`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileSavepatientmajorinjuryPost: build.mutation<
        ApiServicesAppPatientprofileSavepatientmajorinjuryPostApiResponse,
        ApiServicesAppPatientprofileSavepatientmajorinjuryPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/SavePatientMajorInjury`,
          method: 'POST',
          body: queryArg.createPatientMajorInjuryRequest,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletepatientmajorinjuryDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletepatientmajorinjuryDeleteApiResponse,
          ApiServicesAppPatientprofileDeletepatientmajorinjuryDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeletePatientMajorInjury`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetpostmenopausalsymptomsGet: build.query<
        ApiServicesAppPatientprofileGetpostmenopausalsymptomsGetApiResponse,
        ApiServicesAppPatientprofileGetpostmenopausalsymptomsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetPostmenopausalSymptoms`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetallergytypesuggestionGet: build.query<
        ApiServicesAppPatientprofileGetallergytypesuggestionGetApiResponse,
        ApiServicesAppPatientprofileGetallergytypesuggestionGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetAllergyTypeSuggestion`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetcontraceptionsuggestionGet: build.query<
        ApiServicesAppPatientprofileGetcontraceptionsuggestionGetApiResponse,
        ApiServicesAppPatientprofileGetcontraceptionsuggestionGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetContraceptionSuggestion`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetallergyexperiencedsuggestionGet:
        build.query<
          ApiServicesAppPatientprofileGetallergyexperiencedsuggestionGetApiResponse,
          ApiServicesAppPatientprofileGetallergyexperiencedsuggestionGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PatientProfile/GetAllergyExperiencedSuggestion`,
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetimplantsuggestionsGet: build.query<
        ApiServicesAppPatientprofileGetimplantsuggestionsGetApiResponse,
        ApiServicesAppPatientprofileGetimplantsuggestionsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetImplantSuggestions`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileUpdatepatientimplantPut: build.mutation<
        ApiServicesAppPatientprofileUpdatepatientimplantPutApiResponse,
        ApiServicesAppPatientprofileUpdatepatientimplantPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/UpdatePatientImplant`,
          method: 'PUT',
          body: queryArg.createPatientImplantCommandRequestDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletepatientimplantDelete: build.mutation<
        ApiServicesAppPatientprofileDeletepatientimplantDeleteApiResponse,
        ApiServicesAppPatientprofileDeletepatientimplantDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/DeletePatientImplant`,
          method: 'DELETE',
          params: {id: queryArg.id},
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileCreatepatientimplantPost: build.mutation<
        ApiServicesAppPatientprofileCreatepatientimplantPostApiResponse,
        ApiServicesAppPatientprofileCreatepatientimplantPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/CreatePatientImplant`,
          method: 'POST',
          body: queryArg.createPatientImplantCommandRequestDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetreviewofsystemssuggestionsGet: build.query<
        ApiServicesAppPatientprofileGetreviewofsystemssuggestionsGetApiResponse,
        ApiServicesAppPatientprofileGetreviewofsystemssuggestionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetReviewOfSystemsSuggestions`,
          params: {category: queryArg.category},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetdiagnosissuggestionsGet: build.query<
        ApiServicesAppPatientprofileGetdiagnosissuggestionsGetApiResponse,
        ApiServicesAppPatientprofileGetdiagnosissuggestionsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetDiagnosisSuggestions`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetproceduresuggestionsGet: build.query<
        ApiServicesAppPatientprofileGetproceduresuggestionsGetApiResponse,
        ApiServicesAppPatientprofileGetproceduresuggestionsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetProcedureSuggestions`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientimplantsGet: build.query<
        ApiServicesAppPatientprofileGetpatientimplantsGetApiResponse,
        ApiServicesAppPatientprofileGetpatientimplantsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientImplants`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileAddbloodtransfusionhistoryPost:
        build.mutation<
          ApiServicesAppPatientprofileAddbloodtransfusionhistoryPostApiResponse,
          ApiServicesAppPatientprofileAddbloodtransfusionhistoryPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/AddBloodTransfusionHistory`,
            method: 'POST',
            body: queryArg.createBloodTransfusionHistoryRequestDto,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileAddsurgicalhistoryPost: build.mutation<
        ApiServicesAppPatientprofileAddsurgicalhistoryPostApiResponse,
        ApiServicesAppPatientprofileAddsurgicalhistoryPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/AddSurgicalHistory`,
          method: 'POST',
          body: queryArg.createSurgicalHistoryRequestDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientsurgicalhistoryGet: build.query<
        ApiServicesAppPatientprofileGetpatientsurgicalhistoryGetApiResponse,
        ApiServicesAppPatientprofileGetpatientsurgicalhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientSurgicalHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientbloodtransfusionhistoryGet:
        build.query<
          ApiServicesAppPatientprofileGetpatientbloodtransfusionhistoryGetApiResponse,
          ApiServicesAppPatientprofileGetpatientbloodtransfusionhistoryGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/GetPatientBloodTransfusionHistory`,
            params: {patientId: queryArg.patientId},
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileDeletebloodtransfusionhistoryDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletebloodtransfusionhistoryDeleteApiResponse,
          ApiServicesAppPatientprofileDeletebloodtransfusionhistoryDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeleteBloodTransfusionHistory`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileDeletesurgicalhistoryDelete: build.mutation<
        ApiServicesAppPatientprofileDeletesurgicalhistoryDeleteApiResponse,
        ApiServicesAppPatientprofileDeletesurgicalhistoryDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/DeleteSurgicalHistory`,
          method: 'DELETE',
          params: {id: queryArg.id},
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileUpdatesurgicalhistoryPut: build.mutation<
        ApiServicesAppPatientprofileUpdatesurgicalhistoryPutApiResponse,
        ApiServicesAppPatientprofileUpdatesurgicalhistoryPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/UpdateSurgicalHistory`,
          method: 'PUT',
          body: queryArg.createSurgicalHistoryRequestDto,
          params: {id: queryArg.id},
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileUpdatebloodtransfusionhistoryPut:
        build.mutation<
          ApiServicesAppPatientprofileUpdatebloodtransfusionhistoryPutApiResponse,
          ApiServicesAppPatientprofileUpdatebloodtransfusionhistoryPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/UpdateBloodTransfusionHistory`,
            method: 'PUT',
            body: queryArg.createBloodTransfusionHistoryRequestDto,
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileCreatealcoholhistoryPost: build.mutation<
        ApiServicesAppPatientprofileCreatealcoholhistoryPostApiResponse,
        ApiServicesAppPatientprofileCreatealcoholhistoryPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/CreateAlcoholHistory`,
          method: 'POST',
          body: queryArg.createAlcoholHistoryRequestDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileCreaterecreationaldrughistoryPost:
        build.mutation<
          ApiServicesAppPatientprofileCreaterecreationaldrughistoryPostApiResponse,
          ApiServicesAppPatientprofileCreaterecreationaldrughistoryPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/CreateRecreationalDrugHistory`,
            method: 'POST',
            body: queryArg.createRecreationalDrugsHistoryRequestDto,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileCreatecigeretteandtobaccohistoryPost:
        build.mutation<
          ApiServicesAppPatientprofileCreatecigeretteandtobaccohistoryPostApiResponse,
          ApiServicesAppPatientprofileCreatecigeretteandtobaccohistoryPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/CreateCigeretteAndTobaccoHistory`,
            method: 'POST',
            body: queryArg.createCigaretteHistoryRequestDto,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileUpdatealcoholhistoryPut: build.mutation<
        ApiServicesAppPatientprofileUpdatealcoholhistoryPutApiResponse,
        ApiServicesAppPatientprofileUpdatealcoholhistoryPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/UpdateAlcoholHistory`,
          method: 'PUT',
          body: queryArg.createAlcoholHistoryRequestDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileUpdatecigarettehistoryPut: build.mutation<
        ApiServicesAppPatientprofileUpdatecigarettehistoryPutApiResponse,
        ApiServicesAppPatientprofileUpdatecigarettehistoryPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/UpdateCigaretteHistory`,
          method: 'PUT',
          body: queryArg.createCigaretteHistoryRequestDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileUpdaterecreationaldrughistoryPut:
        build.mutation<
          ApiServicesAppPatientprofileUpdaterecreationaldrughistoryPutApiResponse,
          ApiServicesAppPatientprofileUpdaterecreationaldrughistoryPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/UpdateRecreationalDrugHistory`,
            method: 'PUT',
            body: queryArg.createRecreationalDrugsHistoryRequestDto,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetalcoholhistoryGet: build.query<
        ApiServicesAppPatientprofileGetalcoholhistoryGetApiResponse,
        ApiServicesAppPatientprofileGetalcoholhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetAlcoholHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetrecreationaldrughistoryGet: build.query<
        ApiServicesAppPatientprofileGetrecreationaldrughistoryGetApiResponse,
        ApiServicesAppPatientprofileGetrecreationaldrughistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetRecreationalDrugHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetcigaretteandtobaccohistoryGet: build.query<
        ApiServicesAppPatientprofileGetcigaretteandtobaccohistoryGetApiResponse,
        ApiServicesAppPatientprofileGetcigaretteandtobaccohistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetCigaretteAndTobaccoHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletealcoholhistoryDelete: build.mutation<
        ApiServicesAppPatientprofileDeletealcoholhistoryDeleteApiResponse,
        ApiServicesAppPatientprofileDeletealcoholhistoryDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/DeleteAlcoholHistory`,
          method: 'DELETE',
          params: {historyId: queryArg.historyId},
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletecigaretteandtobaccohistoryDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletecigaretteandtobaccohistoryDeleteApiResponse,
          ApiServicesAppPatientprofileDeletecigaretteandtobaccohistoryDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeleteCigaretteAndTobaccoHistory`,
            method: 'DELETE',
            params: {hisoryId: queryArg.hisoryId},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileDeleterecreationaldrughistoryDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeleterecreationaldrughistoryDeleteApiResponse,
          ApiServicesAppPatientprofileDeleterecreationaldrughistoryDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeleteRecreationalDrugHistory`,
            method: 'DELETE',
            params: {historyId: queryArg.historyId},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetalcoholtypessuggestionGet: build.query<
        ApiServicesAppPatientprofileGetalcoholtypessuggestionGetApiResponse,
        ApiServicesAppPatientprofileGetalcoholtypessuggestionGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetAlcoholTypesSuggestion`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetcigeretteandtobaccosuggestionGet:
        build.query<
          ApiServicesAppPatientprofileGetcigeretteandtobaccosuggestionGetApiResponse,
          ApiServicesAppPatientprofileGetcigeretteandtobaccosuggestionGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PatientProfile/GetCigeretteAndTobaccoSuggestion`,
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetrecreationaldrugsuggestionsGet:
        build.query<
          ApiServicesAppPatientprofileGetrecreationaldrugsuggestionsGetApiResponse,
          ApiServicesAppPatientprofileGetrecreationaldrugsuggestionsGetApiArg
        >({
          query: () => ({
            url: `/api/services/app/PatientProfile/GetRecreationalDrugSuggestions`,
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileCreatedrughistoryPost: build.mutation<
        ApiServicesAppPatientprofileCreatedrughistoryPostApiResponse,
        ApiServicesAppPatientprofileCreatedrughistoryPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/CreateDrugHistory`,
          method: 'POST',
          body: queryArg.createDrugHistoryRequestDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileUpdatedrughistoryPut: build.mutation<
        ApiServicesAppPatientprofileUpdatedrughistoryPutApiResponse,
        ApiServicesAppPatientprofileUpdatedrughistoryPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/UpdateDrugHistory`,
          method: 'PUT',
          body: queryArg.createDrugHistoryRequestDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetdrughistoryGet: build.query<
        ApiServicesAppPatientprofileGetdrughistoryGetApiResponse,
        ApiServicesAppPatientprofileGetdrughistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetDrugHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletedrughistoryDelete: build.mutation<
        ApiServicesAppPatientprofileDeletedrughistoryDeleteApiResponse,
        ApiServicesAppPatientprofileDeletedrughistoryDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/DeleteDrugHistory`,
          method: 'DELETE',
          params: {id: queryArg.id},
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGet:
        build.query<
          ApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetApiResponse,
          ApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/GetPatientBloodGroupAndGenotype`,
            params: {patientId: queryArg.patientId},
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileUpdatevaccinationhistoryPut: build.mutation<
        ApiServicesAppPatientprofileUpdatevaccinationhistoryPutApiResponse,
        ApiServicesAppPatientprofileUpdatevaccinationhistoryPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/UpdateVaccinationHistory`,
          method: 'PUT',
          body: queryArg.createVaccinationHistoryDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletevaccinationhistoryDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletevaccinationhistoryDeleteApiResponse,
          ApiServicesAppPatientprofileDeletevaccinationhistoryDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeleteVaccinationHistory`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetvaccinationsuggestionsGet: build.query<
        ApiServicesAppPatientprofileGetvaccinationsuggestionsGetApiResponse,
        ApiServicesAppPatientprofileGetvaccinationsuggestionsGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/PatientProfile/GetVaccinationSuggestions`,
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileCreatereviewofsystemsdataPost: build.mutation<
        ApiServicesAppPatientprofileCreatereviewofsystemsdataPostApiResponse,
        ApiServicesAppPatientprofileCreatereviewofsystemsdataPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/CreateReviewOfSystemsData`,
          method: 'POST',
          body: queryArg.reviewOfSystemsInputDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientreviewofsystemsdataGet: build.query<
        ApiServicesAppPatientprofileGetpatientreviewofsystemsdataGetApiResponse,
        ApiServicesAppPatientprofileGetpatientreviewofsystemsdataGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientReviewOfSystemsData`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileUpdatepatientreviewofsystemsdataPut:
        build.mutation<
          ApiServicesAppPatientprofileUpdatepatientreviewofsystemsdataPutApiResponse,
          ApiServicesAppPatientprofileUpdatepatientreviewofsystemsdataPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/UpdatePatientReviewOfSystemsData`,
            method: 'PUT',
            body: queryArg.createReviewOfSystemsRequestDto,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileDeletereviewofsystemsdataDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletereviewofsystemsdataDeleteApiResponse,
          ApiServicesAppPatientprofileDeletereviewofsystemsdataDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeleteReviewOfSystemsData`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileSaveoccupationhistoryPost: build.mutation<
        ApiServicesAppPatientprofileSaveoccupationhistoryPostApiResponse,
        ApiServicesAppPatientprofileSaveoccupationhistoryPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/SaveOccupationHistory`,
          method: 'POST',
          body: queryArg.createOccupationalHistoryDto,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileGetpatientoccupationalhistoryGet: build.query<
        ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiResponse,
        ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/GetPatientOccupationalHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileDeletepatientoccupationDelete: build.mutation<
        ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiResponse,
        ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/DeletePatientOccupation`,
          method: 'DELETE',
          params: {id: queryArg.id},
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientprofileUpdatepatientoccupationhistoryPut:
        build.mutation<
          ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiResponse,
          ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/UpdatePatientOccupationHistory`,
            method: 'PUT',
            body: queryArg.createOccupationalHistoryDto,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileGetreviewdetailshistorystateforpatientGet:
        build.query<
          ApiServicesAppPatientprofileGetreviewdetailshistorystateforpatientGetApiResponse,
          ApiServicesAppPatientprofileGetreviewdetailshistorystateforpatientGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/GetReviewDetailsHistoryStateForPatient`,
            params: {patientId: queryArg.patientId},
          }),
          providesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileUpdatereviewdetailshistorystatesPut:
        build.mutation<
          ApiServicesAppPatientprofileUpdatereviewdetailshistorystatesPutApiResponse,
          ApiServicesAppPatientprofileUpdatereviewdetailshistorystatesPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/UpdateReviewDetailsHistoryStates`,
            method: 'PUT',
            body: queryArg.reviewDetailsHistoryStateDto,
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileDeletepastmedicalhistoryDelete:
        build.mutation<
          ApiServicesAppPatientprofileDeletepastmedicalhistoryDeleteApiResponse,
          ApiServicesAppPatientprofileDeletepastmedicalhistoryDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientProfile/DeletePastMedicalHistory`,
            method: 'DELETE',
            params: {id: queryArg.id},
          }),
          invalidatesTags: ['PatientProfile'],
        }),
      apiServicesAppPatientprofileUpdatepastmedicalhistoryPut: build.mutation<
        ApiServicesAppPatientprofileUpdatepastmedicalhistoryPutApiResponse,
        ApiServicesAppPatientprofileUpdatepastmedicalhistoryPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientProfile/UpdatePastMedicalHistory`,
          method: 'PUT',
          body: queryArg.patientPastMedicalConditionCommandRequest,
        }),
        invalidatesTags: ['PatientProfile'],
      }),
      apiServicesAppPatientreferraldocumentsGetallGet: build.query<
        ApiServicesAppPatientreferraldocumentsGetallGetApiResponse,
        ApiServicesAppPatientreferraldocumentsGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientReferralDocuments/GetAll`,
          params: {
            Filter: queryArg.filter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['PatientReferralDocuments'],
      }),
      apiServicesAppPatientreferraldocumentsGetpatientreferraldocumentforeditGet:
        build.query<
          ApiServicesAppPatientreferraldocumentsGetpatientreferraldocumentforeditGetApiResponse,
          ApiServicesAppPatientreferraldocumentsGetpatientreferraldocumentforeditGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientReferralDocuments/GetPatientReferralDocumentForEdit`,
            params: {Id: queryArg.id},
          }),
          providesTags: ['PatientReferralDocuments'],
        }),
      apiServicesAppPatientreferraldocumentsCreateoreditPost: build.mutation<
        ApiServicesAppPatientreferraldocumentsCreateoreditPostApiResponse,
        ApiServicesAppPatientreferraldocumentsCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientReferralDocuments/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditPatientReferralDocumentDto,
        }),
        invalidatesTags: ['PatientReferralDocuments'],
      }),
      apiServicesAppPatientreferraldocumentsDeleteDelete: build.mutation<
        ApiServicesAppPatientreferraldocumentsDeleteDeleteApiResponse,
        ApiServicesAppPatientreferraldocumentsDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientReferralDocuments/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['PatientReferralDocuments'],
      }),
      apiServicesAppPatientreferraldocumentsRemovereferraldocumentfileDelete:
        build.mutation<
          ApiServicesAppPatientreferraldocumentsRemovereferraldocumentfileDeleteApiResponse,
          ApiServicesAppPatientreferraldocumentsRemovereferraldocumentfileDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientReferralDocuments/RemoveReferralDocumentFile`,
            method: 'DELETE',
            params: {Id: queryArg.id},
          }),
          invalidatesTags: ['PatientReferralDocuments'],
        }),
      apiServicesAppPatientreferraldocumentsGetpatientreferralletterGet:
        build.query<
          ApiServicesAppPatientreferraldocumentsGetpatientreferralletterGetApiResponse,
          ApiServicesAppPatientreferraldocumentsGetpatientreferralletterGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientReferralDocuments/GetPatientReferralLetter`,
            params: {documentId: queryArg.documentId},
          }),
          providesTags: ['PatientReferralDocuments'],
        }),
      apiServicesAppPatientrelationsGetallGet: build.query<
        ApiServicesAppPatientrelationsGetallGetApiResponse,
        ApiServicesAppPatientrelationsGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientRelations/GetAll`,
          params: {
            Filter: queryArg.filter,
            RelationshipFilter: queryArg.relationshipFilter,
            FirstNameFilter: queryArg.firstNameFilter,
            MiddleNameFilter: queryArg.middleNameFilter,
            LastNameFilter: queryArg.lastNameFilter,
            PatientPatientCodeFilter: queryArg.patientPatientCodeFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['PatientRelations'],
      }),
      apiServicesAppPatientrelationsGetallnextofkinGet: build.query<
        ApiServicesAppPatientrelationsGetallnextofkinGetApiResponse,
        ApiServicesAppPatientrelationsGetallnextofkinGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientRelations/GetAllNextOfKin`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['PatientRelations'],
      }),
      apiServicesAppPatientrelationsDeleteDelete: build.mutation<
        ApiServicesAppPatientrelationsDeleteDeleteApiResponse,
        ApiServicesAppPatientrelationsDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientRelations/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['PatientRelations'],
      }),
      apiServicesAppPatientrelationsGetallpatientforlookuptableGet: build.query<
        ApiServicesAppPatientrelationsGetallpatientforlookuptableGetApiResponse,
        ApiServicesAppPatientrelationsGetallpatientforlookuptableGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientRelations/GetAllPatientForLookupTable`,
          params: {
            Filter: queryArg.filter,
            OutPatientListingType: queryArg.outPatientListingType,
            Status: queryArg.status,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['PatientRelations'],
      }),
      apiServicesAppPatientsGetallGet: build.query<
        ApiServicesAppPatientsGetallGetApiResponse,
        ApiServicesAppPatientsGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetAll`,
          params: {
            Filter: queryArg.filter,
            PatientCodeFilter: queryArg.patientCodeFilter,
            CountryNameFilter: queryArg.countryNameFilter,
            PatientOccupationNameFilter: queryArg.patientOccupationNameFilter,
            PatientOccupationCategoryNameFilter:
              queryArg.patientOccupationCategoryNameFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetpatientforeditGet: build.query<
        ApiServicesAppPatientsGetpatientforeditGetApiResponse,
        ApiServicesAppPatientsGetpatientforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetPatientForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsCheckpatientexistPost: build.mutation<
        ApiServicesAppPatientsCheckpatientexistPostApiResponse,
        ApiServicesAppPatientsCheckpatientexistPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/CheckPatientExist`,
          method: 'POST',
          body: queryArg.checkPatientExistInput,
        }),
        invalidatesTags: ['Patients'],
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
        invalidatesTags: ['Patients'],
      }),
      apiServicesAppPatientsDeleteDelete: build.mutation<
        ApiServicesAppPatientsDeleteDeleteApiResponse,
        ApiServicesAppPatientsDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetallpatientoccupationforlookuptableGet:
        build.query<
          ApiServicesAppPatientsGetallpatientoccupationforlookuptableGetApiResponse,
          ApiServicesAppPatientsGetallpatientoccupationforlookuptableGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Patients/GetAllPatientOccupationForLookupTable`,
            params: {
              Filter: queryArg.filter,
              OutPatientListingType: queryArg.outPatientListingType,
              Status: queryArg.status,
              Sorting: queryArg.sorting,
              SkipCount: queryArg.skipCount,
              MaxResultCount: queryArg.maxResultCount,
            },
          }),
          providesTags: ['Patients'],
        }),
      apiServicesAppPatientsGetoutpatientlandinglistGet: build.query<
        ApiServicesAppPatientsGetoutpatientlandinglistGetApiResponse,
        ApiServicesAppPatientsGetoutpatientlandinglistGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetOutPatientLandingList`,
          params: {
            Filter: queryArg.filter,
            OutPatientListingType: queryArg.outPatientListingType,
            Status: queryArg.status,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetinpatientlandinglistGet: build.query<
        ApiServicesAppPatientsGetinpatientlandinglistGetApiResponse,
        ApiServicesAppPatientsGetinpatientlandinglistGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetInpatientLandingList`,
          params: {
            WardId: queryArg.wardId,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetaccidentandemergencylandinglistGet: build.query<
        ApiServicesAppPatientsGetaccidentandemergencylandinglistGetApiResponse,
        ApiServicesAppPatientsGetaccidentandemergencylandinglistGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetAccidentAndEmergencyLandingList`,
          params: {
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPut:
        build.mutation<
          ApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutApiResponse,
          ApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Patients/UpdatedAppointmentStatusFromAwaitingVitals`,
            method: 'PUT',
            params: {encounterId: queryArg.encounterId},
          }),
          invalidatesTags: ['Patients'],
        }),
      apiServicesAppPatientsGetpatientdetailsGet: build.query<
        ApiServicesAppPatientsGetpatientdetailsGetApiResponse,
        ApiServicesAppPatientsGetpatientdetailsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetPatientDetails`,
          params: {
            PatientId: queryArg.patientId,
            EncounterId: queryArg.encounterId,
          },
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetnewpatientcodeGet: build.query<
        ApiServicesAppPatientsGetnewpatientcodeGetApiResponse,
        ApiServicesAppPatientsGetnewpatientcodeGetApiArg
      >({
        query: () => ({url: `/api/services/app/Patients/GetNewPatientCode`}),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsSearchpatientGet: build.query<
        ApiServicesAppPatientsSearchpatientGetApiResponse,
        ApiServicesAppPatientsSearchpatientGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/SearchPatient`,
          params: {searchText: queryArg.searchText},
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetpatienthistoryGet: build.query<
        ApiServicesAppPatientsGetpatienthistoryGetApiResponse,
        ApiServicesAppPatientsGetpatienthistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetPatientHistory`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetpatientwardroundandclinicnotesGet: build.query<
        ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiResponse,
        ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetPatientWardRoundAndClinicNotes`,
          params: {
            PatientId: queryArg.patientId,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetintensityunitsGet: build.query<
        ApiServicesAppPatientsGetintensityunitsGetApiResponse,
        ApiServicesAppPatientsGetintensityunitsGetApiArg
      >({
        query: () => ({url: `/api/services/app/Patients/GetIntensityUnits`}),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetallpatientinclinicfortodayGet: build.query<
        ApiServicesAppPatientsGetallpatientinclinicfortodayGetApiResponse,
        ApiServicesAppPatientsGetallpatientinclinicfortodayGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetAllPatientInClinicForToday`,
          params: {
            SearchText: queryArg.searchText,
            SortFilter: queryArg.sortFilter,
          },
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetpatientmedicationsGet: build.query<
        ApiServicesAppPatientsGetpatientmedicationsGetApiResponse,
        ApiServicesAppPatientsGetpatientmedicationsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetPatientMedications`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsCreatepatientstabilitystatusPost: build.mutation<
        ApiServicesAppPatientsCreatepatientstabilitystatusPostApiResponse,
        ApiServicesAppPatientsCreatepatientstabilitystatusPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/CreatePatientStabilityStatus`,
          method: 'POST',
          body: queryArg.patientStabilityRequestDto,
        }),
        invalidatesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetpatientstabilitystatusGet: build.query<
        ApiServicesAppPatientsGetpatientstabilitystatusGetApiResponse,
        ApiServicesAppPatientsGetpatientstabilitystatusGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Patients/GetPatientStabilityStatus`,
          params: {
            patientId: queryArg.patientId,
            encounterId: queryArg.encounterId,
          },
        }),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientsGetstabilitystatusGet: build.query<
        ApiServicesAppPatientsGetstabilitystatusGetApiResponse,
        ApiServicesAppPatientsGetstabilitystatusGetApiArg
      >({
        query: () => ({url: `/api/services/app/Patients/GetStabilityStatus`}),
        providesTags: ['Patients'],
      }),
      apiServicesAppPatientwalletGetallrefundrequestGet: build.query<
        ApiServicesAppPatientwalletGetallrefundrequestGetApiResponse,
        ApiServicesAppPatientwalletGetallrefundrequestGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientWallet/GetAllRefundRequest`,
          params: {
            InvoiceSource: queryArg.invoiceSource,
            DateFilter: queryArg.dateFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['PatientWallet'],
      }),
      apiServicesAppPatientwalletGetinvoicesforrefundGet: build.query<
        ApiServicesAppPatientwalletGetinvoicesforrefundGetApiResponse,
        ApiServicesAppPatientwalletGetinvoicesforrefundGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientWallet/GetInvoicesForRefund`,
          params: {
            Filter: queryArg.filter,
            CustomDate: queryArg.customDate,
            PatientId: queryArg.patientId,
          },
        }),
        providesTags: ['PatientWallet'],
      }),
      apiServicesAppPatientwalletCreatewalletrefundrequestPost: build.mutation<
        ApiServicesAppPatientwalletCreatewalletrefundrequestPostApiResponse,
        ApiServicesAppPatientwalletCreatewalletrefundrequestPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientWallet/CreateWalletRefundRequest`,
          method: 'POST',
          body: queryArg.invoiceWalletRefundRequest,
        }),
        invalidatesTags: ['PatientWallet'],
      }),
      apiServicesAppPatientwalletGetwalletfundingrequestsGet: build.query<
        ApiServicesAppPatientwalletGetwalletfundingrequestsGetApiResponse,
        ApiServicesAppPatientwalletGetwalletfundingrequestsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientWallet/GetWalletFundingRequests`,
          params: {PatientId: queryArg.patientId},
        }),
        providesTags: ['PatientWallet'],
      }),
      apiServicesAppPatientwalletApprovewalletfundingrequestsPost:
        build.mutation<
          ApiServicesAppPatientwalletApprovewalletfundingrequestsPostApiResponse,
          ApiServicesAppPatientwalletApprovewalletfundingrequestsPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientWallet/ApproveWalletFundingRequests`,
            method: 'POST',
            body: queryArg.walletFundingRequestDto,
          }),
          invalidatesTags: ['PatientWallet'],
        }),
      apiServicesAppPatientwalletGetlistofinvoiceitemsforrefundGet: build.query<
        ApiServicesAppPatientwalletGetlistofinvoiceitemsforrefundGetApiResponse,
        ApiServicesAppPatientwalletGetlistofinvoiceitemsforrefundGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientWallet/GetListOfInvoiceItemsForRefund`,
          params: {
            InvoiceIds: queryArg.invoiceIds,
            PatientId: queryArg.patientId,
            DateFilter: queryArg.dateFilter,
            CustomDate: queryArg.customDate,
          },
        }),
        providesTags: ['PatientWallet'],
      }),
      apiServicesAppPatientwalletGetrefundrequestitemsforapprovalGet:
        build.query<
          ApiServicesAppPatientwalletGetrefundrequestitemsforapprovalGetApiResponse,
          ApiServicesAppPatientwalletGetrefundrequestitemsforapprovalGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PatientWallet/GetRefundRequestItemsForApproval`,
            params: {patientId: queryArg.patientId},
          }),
          providesTags: ['PatientWallet'],
        }),
      apiServicesAppPatientwalletProcessrefundrequestPost: build.mutation<
        ApiServicesAppPatientwalletProcessrefundrequestPostApiResponse,
        ApiServicesAppPatientwalletProcessrefundrequestPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PatientWallet/ProcessRefundRequest`,
          method: 'POST',
          body: queryArg.processRefundRequestCommand,
        }),
        invalidatesTags: ['PatientWallet'],
      }),
      apiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPost:
        build.mutation<
          ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostApiResponse,
          ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/CreatePatientPhysicalExamination`,
            method: 'POST',
            body: queryArg.createPatientPhysicalExaminationDto,
          }),
          invalidatesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPost:
        build.mutation<
          ApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostApiResponse,
          ApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/UploadPatientPhysicalExamImages`,
            method: 'POST',
            body: queryArg.body,
          }),
          invalidatesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGet:
        build.query<
          ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiResponse,
          ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/GetPatientPhysicalExaminationSummary`,
            params: {
              patientId: queryArg.patientId,
              procedureId: queryArg.procedureId,
            },
          }),
          providesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDelete:
        build.mutation<
          ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiResponse,
          ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/DeletePatientPhysicalExamination`,
            method: 'DELETE',
            params: {
              patientPhysicalExaminationId:
                queryArg.patientPhysicalExaminationId,
            },
          }),
          invalidatesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGet:
        build.query<
          ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiResponse,
          ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/GetPatientPhysicalExaminationUploadedImages`,
            params: {
              patientPhysicalExaminationId:
                queryArg.patientPhysicalExaminationId,
            },
          }),
          providesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDelete:
        build.mutation<
          ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiResponse,
          ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/PhysicalExaminations/DeletePatientPhysicalExaminationImage`,
            method: 'DELETE',
            params: {
              patientPhysicalExaminationImageFileId:
                queryArg.patientPhysicalExaminationImageFileId,
            },
          }),
          invalidatesTags: ['PhysicalExaminations'],
        }),
      apiServicesAppPlanitemsGetpatientplanitemsGet: build.query<
        ApiServicesAppPlanitemsGetpatientplanitemsGetApiResponse,
        ApiServicesAppPlanitemsGetpatientplanitemsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/PlanItems/GetPatientPlanItems`,
          params: {
            PatientId: queryArg.patientId,
            ProcedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['PlanItems'],
      }),
      apiServicesAppProcedureGetpatientproceduresGet: build.query<
        ApiServicesAppProcedureGetpatientproceduresGetApiResponse,
        ApiServicesAppProcedureGetpatientproceduresGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetPatientProcedures`,
          params: {
            patientId: queryArg.patientId,
            procedureType: queryArg.procedureType,
            parentProcedureId: queryArg.parentProcedureId,
          },
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPost:
        build.mutation<
          ApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostApiResponse,
          ApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Procedure/CreateStatementOfPatientOrNextOfKinOrGuardian`,
            method: 'POST',
            body: queryArg.createStatementOfPatientOrNextOfKinOrGuardianDto,
          }),
          invalidatesTags: ['Procedure'],
        }),
      apiServicesAppProcedureGetstatementofpatientornextofkinorguardianGet:
        build.query<
          ApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetApiResponse,
          ApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/Procedure/GetStatementOfPatientOrNextOfKinOrGuardian`,
            params: {procedureId: queryArg.procedureId},
          }),
          providesTags: ['Procedure'],
        }),
      apiServicesAppProcedureGetpatientinterventionsGet: build.query<
        ApiServicesAppProcedureGetpatientinterventionsGetApiResponse,
        ApiServicesAppProcedureGetpatientinterventionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Procedure/GetPatientInterventions`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Procedure'],
      }),
      apiServicesAppReviewdetailedhistoryGetpatientreviewdetailedhistoryGet:
        build.query<
          ApiServicesAppReviewdetailedhistoryGetpatientreviewdetailedhistoryGetApiResponse,
          ApiServicesAppReviewdetailedhistoryGetpatientreviewdetailedhistoryGetApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/ReviewDetailedHistory/GetPatientReviewDetailedHistory`,
            params: {patientId: queryArg.patientId},
          }),
          providesTags: ['ReviewDetailedHistory'],
        }),
      apiServicesAppSymptomGetpatientsummaryGet: build.query<
        ApiServicesAppSymptomGetpatientsummaryGetApiResponse,
        ApiServicesAppSymptomGetpatientsummaryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Symptom/GetPatientSummary`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Symptom'],
      }),
      apiServicesAppVaccineGetpatientvaccinationGet: build.query<
        ApiServicesAppVaccineGetpatientvaccinationGetApiResponse,
        ApiServicesAppVaccineGetpatientvaccinationGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Vaccine/GetPatientVaccination`,
          params: {Id: queryArg.id, procedureId: queryArg.procedureId},
        }),
        providesTags: ['Vaccine'],
      }),
      apiServicesAppVaccineGetpatientvaccinationhistoryGet: build.query<
        ApiServicesAppVaccineGetpatientvaccinationhistoryGetApiResponse,
        ApiServicesAppVaccineGetpatientvaccinationhistoryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Vaccine/GetPatientVaccinationHistory`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['Vaccine'],
      }),
      apiServicesAppVitalsignsCreatepatientvitalPost: build.mutation<
        ApiServicesAppVitalsignsCreatepatientvitalPostApiResponse,
        ApiServicesAppVitalsignsCreatepatientvitalPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/CreatePatientVital`,
          method: 'POST',
          body: queryArg.createMultiplePatientVitalDto,
        }),
        invalidatesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsGetpatientvitalssummaryGet: build.query<
        ApiServicesAppVitalsignsGetpatientvitalssummaryGetApiResponse,
        ApiServicesAppVitalsignsGetpatientvitalssummaryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/GetPatientVitalsSummary`,
          params: {
            patientId: queryArg.patientId,
            procedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsGetpatientvitalsGet: build.query<
        ApiServicesAppVitalsignsGetpatientvitalsGetApiResponse,
        ApiServicesAppVitalsignsGetpatientvitalsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/GetPatientVitals`,
          params: {
            patientId: queryArg.patientId,
            procedureId: queryArg.procedureId,
          },
        }),
        providesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsRecheckpatientvitalPost: build.mutation<
        ApiServicesAppVitalsignsRecheckpatientvitalPostApiResponse,
        ApiServicesAppVitalsignsRecheckpatientvitalPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/RecheckPatientVital`,
          method: 'POST',
          body: queryArg.recheckPatientVitalDto,
        }),
        invalidatesTags: ['VitalSigns'],
      }),
      apiServicesAppVitalsignsDeletepatientvitalDelete: build.mutation<
        ApiServicesAppVitalsignsDeletepatientvitalDeleteApiResponse,
        ApiServicesAppVitalsignsDeletepatientvitalDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/VitalSigns/DeletePatientVital`,
          method: 'DELETE',
          params: {patientVitalIds: queryArg.patientVitalIds},
        }),
        invalidatesTags: ['VitalSigns'],
      }),
      apiServicesAppWardemergenciesCreatepatientinterventionPost:
        build.mutation<
          ApiServicesAppWardemergenciesCreatepatientinterventionPostApiResponse,
          ApiServicesAppWardemergenciesCreatepatientinterventionPostApiArg
        >({
          query: queryArg => ({
            url: `/api/services/app/WardEmergencies/CreatePatientIntervention`,
            method: 'POST',
            body: queryArg.createPatientInterventionRequest,
          }),
          invalidatesTags: ['WardEmergencies'],
        }),
      apiServicesAppWardemergenciesGetpatientinterventionsGet: build.query<
        ApiServicesAppWardemergenciesGetpatientinterventionsGetApiResponse,
        ApiServicesAppWardemergenciesGetpatientinterventionsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/WardEmergencies/GetPatientInterventions`,
          params: {PatientId: queryArg.patientId},
        }),
        providesTags: ['WardEmergencies'],
      }),
      apiServicesAppWounddressingGetpatientwounddressingGet: build.query<
        ApiServicesAppWounddressingGetpatientwounddressingGetApiResponse,
        ApiServicesAppWounddressingGetpatientwounddressingGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/WoundDressing/GetPatientWoundDressing`,
          params: {PatientId: queryArg.patientId},
        }),
        providesTags: ['WoundDressing'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as patientApi};
export type ApiServicesAppAdmissionsAdmitpatientPostApiResponse = unknown;
export type ApiServicesAppAdmissionsAdmitpatientPostApiArg = {
  admitPatientRequest: AdmitPatientRequest;
};
export type ApiServicesAppAdmissionsTransferpatientPostApiResponse = unknown;
export type ApiServicesAppAdmissionsTransferpatientPostApiArg = {
  transferPatientRequest: TransferPatientRequest;
};
export type ApiServicesAppAdmissionsCompletetransferpatientPostApiResponse =
  unknown;
export type ApiServicesAppAdmissionsCompletetransferpatientPostApiArg = {
  encounterId?: number;
};
export type ApiServicesAppAppointmentGetmostrecentappointmentforpatientGetApiResponse =
  /** status 200 Success */ AppointmentListResponse;
export type ApiServicesAppAppointmentGetmostrecentappointmentforpatientGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppBedmakingGetpatientsummaryGetApiResponse =
  /** status 200 Success */ PatientBedMakingSummaryForReturnDto[];
export type ApiServicesAppBedmakingGetpatientsummaryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppDiagnosisGetpatientdiagnosisGetApiResponse =
  /** status 200 Success */ PatientDiagnosisReturnDto[];
export type ApiServicesAppDiagnosisGetpatientdiagnosisGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppDischargeGetpatientdischargeGetApiResponse =
  /** status 200 Success */ DischargeDto[];
export type ApiServicesAppDischargeGetpatientdischargeGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppFacilitygroupsGetfacilitygrouppatientcodetemplatedetailsGetApiResponse =
  /** status 200 Success */ GetFacilityGroupPatientDetailsForEditOutput;
export type ApiServicesAppFacilitygroupsGetfacilitygrouppatientcodetemplatedetailsGetApiArg =
  void;
export type ApiServicesAppFacilitygroupsCreateoreditpatientcodetemplatedetailsPostApiResponse =
  unknown;
export type ApiServicesAppFacilitygroupsCreateoreditpatientcodetemplatedetailsPostApiArg =
  {
    createOrEditFacilityGroupPatientCodeTemplateDto: CreateOrEditFacilityGroupPatientCodeTemplateDto;
  };
export type ApiServicesAppFeedingGetpatientfeedingGetApiResponse =
  /** status 200 Success */ FeedingSummaryForReturnDto[];
export type ApiServicesAppFeedingGetpatientfeedingGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppInputnotesGetpatientinputnotesGetApiResponse =
  /** status 200 Success */ InputNotesSummaryForReturnDto[];
export type ApiServicesAppInputnotesGetpatientinputnotesGetApiArg = {
  patientId?: number;
  encounterId?: number;
  entryType?: ProcedureEntryType;
  procedureId?: number;
};
export type ApiServicesAppInvestigationInvestigationrequestforpatientPostApiResponse =
  /** status 200 Success */ {
    [key: string]: GetInvestigationForPatientResponse;
  };
export type ApiServicesAppInvestigationInvestigationrequestforpatientPostApiArg =
  {
    getPatientInvestigationRequest: GetPatientInvestigationRequest;
  };
export type ApiServicesAppInvoicesGetallpatientforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfInvoicePatientLookupTableDto;
export type ApiServicesAppInvoicesGetallpatientforlookuptableGetApiArg = {
  filter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfInvoicePatientAppointmentLookupTableDto;
export type ApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetApiArg =
  {
    filter?: string;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppInvoicesGetpaymentbillsbypatientidGetApiResponse =
  /** status 200 Success */ InvoiceReceiptQueryResponse;
export type ApiServicesAppInvoicesGetpaymentbillsbypatientidGetApiArg = {
  patientId: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInvoicesGetpatientswithinvoiceitemsGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientsWithInvoiceItemsResponse;
export type ApiServicesAppInvoicesGetpatientswithinvoiceitemsGetApiArg = {
  startDate?: string;
  endDate?: string;
  filter?: string;
  patientSeenFilter?: PatientSeenFilter;
  invoiceSource?: InvoiceSource;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInvoicesGetpatienttotalsummaryheaderGetApiResponse =
  /** status 200 Success */ GetPatientTotalSummaryQueryResponse;
export type ApiServicesAppInvoicesGetpatienttotalsummaryheaderGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppInvoicesGetpatientinvoicesandwallettransactionsGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientInvoicesAndWalletTransactionsResponse;
export type ApiServicesAppInvoicesGetpatientinvoicesandwallettransactionsGetApiArg =
  {
    patientId?: number;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppInvoicesGetallproformainvoicebypatientidGetApiResponse =
  /** status 200 Success */ GetAllProformaInvoiceQueryResponse;
export type ApiServicesAppInvoicesGetallproformainvoicebypatientidGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppMealsGetpatientmealsGetApiResponse =
  /** status 200 Success */ MealsSummaryForReturnDto[];
export type ApiServicesAppMealsGetpatientmealsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppMedicationGetpatientprescriptionsGetApiResponse =
  /** status 200 Success */ PatientMedicationForReturnDto[];
export type ApiServicesAppMedicationGetpatientprescriptionsGetApiArg = {
  patientId?: number;
  procedureId?: number;
};
export type ApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostApiResponse =
  unknown;
export type ApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostApiArg =
  {
    count?: number;
    staffMemberOrAttendingPhysicianId?: number;
    orgUnitOrAttendingClinicId?: number;
  };
export type ApiServicesAppNextappointmentGetpatientnextappointmentsGetApiResponse =
  /** status 200 Success */ NextAppointmentReturnDto[];
export type ApiServicesAppNextappointmentGetpatientnextappointmentsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetApiResponse =
  /** status 200 Success */ NextAppointmentReturnDto[];
export type ApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppNursedischargeGetpatientdischargewithencounteridGetApiResponse =
  /** status 200 Success */ DischargeDto;
export type ApiServicesAppNursedischargeGetpatientdischargewithencounteridGetApiArg =
  {
    encounterId?: number;
  };
export type ApiServicesAppNursedischargeGetpatientdischargeGetApiResponse =
  /** status 200 Success */ DischargeDto;
export type ApiServicesAppNursedischargeGetpatientdischargeGetApiArg = {
  dischargeId?: number;
};
export type ApiServicesAppPatientappointmentsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientAppointmentForViewDto;
export type ApiServicesAppPatientappointmentsGetallGetApiArg = {
  filter?: string;
  titleFilter?: string;
  maxDurationFilter?: number;
  minDurationFilter?: number;
  maxStartTimeFilter?: string;
  minStartTimeFilter?: string;
  isRepeatFilter?: number;
  notesFilter?: string;
  statusFilter?: number;
  typeFilter?: number;
  patientPatientCodeFilter?: string;
  patientReferralReferringHospitalFilter?: string;
  staffMemberStaffCodeFilter?: string;
  organizationUnitDisplayNameFilter?: string;
  organizationUnitDisplayName2Filter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientappointmentsGetpatientappointmentforeditGetApiResponse =
  /** status 200 Success */ GetPatientAppointmentForEditOutput;
export type ApiServicesAppPatientappointmentsGetpatientappointmentforeditGetApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientappointmentsGetconsultingroomsGetApiResponse =
  /** status 200 Success */ GetPatientConsultingRooms;
export type ApiServicesAppPatientappointmentsGetconsultingroomsGetApiArg = void;
export type ApiServicesAppPatientappointmentsGetallpatientforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientAppointmentPatientLookupTableDto;
export type ApiServicesAppPatientappointmentsGetallpatientforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientAppointmentPatientReferralLookupTableDto;
export type ApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientAppointmentStaffMemberLookupTableDto;
export type ApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientAppointmentOrganizationUnitLookupTableDto;
export type ApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiResponse =
  unknown;
export type ApiServicesAppPatientappointmentsUpdateappointmentstatusPutApiArg =
  {
    editAppointmentStatusDto: EditAppointmentStatusDto;
  };
export type ApiServicesAppPatientappointmentsGetappointmentsbypatientidGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfAppointmentListResponse;
export type ApiServicesAppPatientappointmentsGetappointmentsbypatientidGetApiArg =
  {
    patientId?: number;
    startDate?: string;
    endDate?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiResponse =
  /** status 200 Success */ string;
export type ApiServicesAppPatientappointmentsReassignepatientappointmentPostApiArg =
  {
    reassignPatientAppointmentDto: ReassignPatientAppointmentDto;
  };
export type ApiServicesAppPatientcodetemplatesGetpatientcodetemplateforeditGetApiResponse =
  /** status 200 Success */ GetPatientCodeTemplateForEditOutput;
export type ApiServicesAppPatientcodetemplatesGetpatientcodetemplateforeditGetApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientcodetemplatesGetfacilitypatientcodetemplatebyfacilityidGetApiResponse =
  /** status 200 Success */ PatientCodeTemplateDto;
export type ApiServicesAppPatientcodetemplatesGetfacilitypatientcodetemplatebyfacilityidGetApiArg =
  {
    facilityId?: number;
  };
export type ApiServicesAppPatientcodetemplatesCreateoreditPostApiResponse =
  unknown;
export type ApiServicesAppPatientcodetemplatesCreateoreditPostApiArg = {
  createOrEditPatientCodeTemplateDto: CreateOrEditPatientCodeTemplateDto;
};
export type ApiServicesAppPatientcodetemplatesDeleteDeleteApiResponse = unknown;
export type ApiServicesAppPatientcodetemplatesDeleteDeleteApiArg = {
  id?: number;
};
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
export type ApiServicesAppPatientinsurersGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientInsurerForViewDto;
export type ApiServicesAppPatientinsurersGetallGetApiArg = {
  filter?: string;
  insuranceProviderNameFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientinsurersGetpatientinsurerforeditGetApiResponse =
  /** status 200 Success */ GetPatientInsurerForEditOutput;
export type ApiServicesAppPatientinsurersGetpatientinsurerforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppPatientinsurersCreateoreditPostApiResponse = unknown;
export type ApiServicesAppPatientinsurersCreateoreditPostApiArg = {
  createOrEditPatientInsurerDto: CreateOrEditPatientInsurerDto;
};
export type ApiServicesAppPatientinsurersDeleteDeleteApiResponse = unknown;
export type ApiServicesAppPatientinsurersDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientinsurersGetallinsuranceproviderforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientInsurerInsuranceProviderLookupTableDto;
export type ApiServicesAppPatientinsurersGetallinsuranceproviderforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientoccupationsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientOccupationForViewDto;
export type ApiServicesAppPatientoccupationsGetallGetApiArg = {
  filter?: string;
  nameFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientoccupationsGetpatientoccupationforeditGetApiResponse =
  /** status 200 Success */ GetPatientOccupationForEditOutput;
export type ApiServicesAppPatientoccupationsGetpatientoccupationforeditGetApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientoccupationsCreateoreditPostApiResponse =
  unknown;
export type ApiServicesAppPatientoccupationsCreateoreditPostApiArg = {
  createOrEditPatientOccupationDto: CreateOrEditPatientOccupationDto;
};
export type ApiServicesAppPatientoccupationsDeleteDeleteApiResponse = unknown;
export type ApiServicesAppPatientoccupationsDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileDeletepatientallergyDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletepatientallergyDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileEditpatientallergyPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileEditpatientallergyPostApiArg = {
  editPatientAllergyCommandRequest: EditPatientAllergyCommandRequest;
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
export type ApiServicesAppPatientprofileGetpatientmenstrualflowGetApiResponse =
  /** status 200 Success */ GetPatientMenstrualFlowResponse[];
export type ApiServicesAppPatientprofileGetpatientmenstrualflowGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileGetpatientmenstrualfrequencyGetApiResponse =
  /** status 200 Success */ GetPatientMenstrualFrequencyResponse[];
export type ApiServicesAppPatientprofileGetpatientmenstrualfrequencyGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientprofileGettreatmentplansGetApiResponse =
  /** status 200 Success */ GetTreatmentPlansQueryResponse[];
export type ApiServicesAppPatientprofileGettreatmentplansGetApiArg = {
  patientId: number;
  filter?: TreatmentPlanTimeFilter;
};
export type ApiServicesAppPatientprofileDeletemenstrualfrequencyDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletemenstrualfrequencyDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileSavepatientfamilyhistoryPostApiResponse =
  /** status 200 Success */ PatientFamilyHistoryDto;
export type ApiServicesAppPatientprofileSavepatientfamilyhistoryPostApiArg = {
  patientFamilyHistoryDto: PatientFamilyHistoryDto;
};
export type ApiServicesAppPatientprofileGetpatientfamilyhistoryGetApiResponse =
  /** status 200 Success */ PatientFamilyHistoryDto;
export type ApiServicesAppPatientprofileGetpatientfamilyhistoryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileDeletepatientfamilymemberDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletepatientfamilymemberDeleteApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientprofileUpdatepatienfamilymemberdetailsPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatepatienfamilymemberdetailsPutApiArg =
  {
    updateFamilyMembersDto: UpdateFamilyMembersDto;
  };
export type ApiServicesAppPatientprofileUpdatepatientfamilyhistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatepatientfamilyhistoryPutApiArg = {
  patientFamilyHistoryDto: PatientFamilyHistoryDto;
};
export type ApiServicesAppPatientprofileDeletemenstrualflowDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletemenstrualflowDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileSavemenstruationandfrequencyPostApiResponse =
  /** status 200 Success */ SaveMenstruationAndFrequencyCommand;
export type ApiServicesAppPatientprofileSavemenstruationandfrequencyPostApiArg =
  {
    saveMenstruationAndFrequencyCommand: SaveMenstruationAndFrequencyCommand;
  };
export type ApiServicesAppPatientprofileCreatepatientallergyPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileCreatepatientallergyPostApiArg = {
  createPatientAllergyCommandRequest: CreatePatientAllergyCommandRequest;
};
export type ApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetApiResponse =
  /** status 200 Success */ PatientGynaecologicProcedureSuggestionResponse[];
export type ApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetApiArg =
  void;
export type ApiServicesAppPatientprofileGetpatientallergiesGetApiResponse =
  /** status 200 Success */ GetPatientAllergyResponseDto[];
export type ApiServicesAppPatientprofileGetpatientallergiesGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileSavemenstrualbloodflowPostApiResponse =
  /** status 200 Success */ SaveMenstrualBloodFlowCommandRequest;
export type ApiServicesAppPatientprofileSavemenstrualbloodflowPostApiArg = {
  saveMenstrualBloodFlowCommandRequest: SaveMenstrualBloodFlowCommandRequest;
};
export type ApiServicesAppPatientprofileGetpatientgynaecologicalillnesssuggestionGetApiResponse =
  /** status 200 Success */ GetPatientGynaecologicalIllnessSuggestionQueryResponse[];
export type ApiServicesAppPatientprofileGetpatientgynaecologicalillnesssuggestionGetApiArg =
  void;
export type ApiServicesAppPatientprofileSavepatientpastmedicalhistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileSavepatientpastmedicalhistoryPostApiArg =
  {
    patientPastMedicalConditionCommandRequest: PatientPastMedicalConditionCommandRequest;
  };
export type ApiServicesAppPatientprofileGetpatientpastmedicalhistoryGetApiResponse =
  /** status 200 Success */ GetPatientPastMedicalConditionQueryResponse;
export type ApiServicesAppPatientprofileGetpatientpastmedicalhistoryGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientprofileCreatepatientphysicalexercisePostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileCreatepatientphysicalexercisePostApiArg =
  {
    createPhysicalExerciseCommandRequest: CreatePhysicalExerciseCommandRequest;
  };
export type ApiServicesAppPatientprofileGetpatientphysicalexerciseGetApiResponse =
  /** status 200 Success */ GetPatientPhysicalExerciseQueryResponse;
export type ApiServicesAppPatientprofileGetpatientphysicalexerciseGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileSavepatienttravelhistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileSavepatienttravelhistoryPostApiArg = {
  body: CreatePatientTravelHistoryCommand[];
};
export type ApiServicesAppPatientprofileGetpatienttravelhistoryGetApiResponse =
  /** status 200 Success */ GetPatientTravelHistoryQueryResponse;
export type ApiServicesAppPatientprofileGetpatienttravelhistoryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileDeletepatienttravelhistoryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletepatienttravelhistoryDeleteApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientprofileGetchronicdiseasesuggestionGetApiResponse =
  /** status 200 Success */ GetChronicDiseaseSuggestionQueryResponse[];
export type ApiServicesAppPatientprofileGetchronicdiseasesuggestionGetApiArg =
  void;
export type ApiServicesAppPatientprofileDeletepatientchronicconditionsDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletepatientchronicconditionsDeleteApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostApiArg =
  {
    updatePatientGenotypeAndBloodGroupCommandRequest: UpdatePatientGenotypeAndBloodGroupCommandRequest;
  };
export type ApiServicesAppPatientprofileGetpatientmajorinjuryGetApiResponse =
  /** status 200 Success */ GetPatientMajorInjuryResponse[];
export type ApiServicesAppPatientprofileGetpatientmajorinjuryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileSavepatientmajorinjuryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileSavepatientmajorinjuryPostApiArg = {
  createPatientMajorInjuryRequest: CreatePatientMajorInjuryRequest;
};
export type ApiServicesAppPatientprofileDeletepatientmajorinjuryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletepatientmajorinjuryDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileGetpostmenopausalsymptomsGetApiResponse =
  /** status 200 Success */ PostmenopausalSymptomSuggestionResponse[];
export type ApiServicesAppPatientprofileGetpostmenopausalsymptomsGetApiArg =
  void;
export type ApiServicesAppPatientprofileGetallergytypesuggestionGetApiResponse =
  /** status 200 Success */ GetAllergyTypeSuggestionQueryResponse[];
export type ApiServicesAppPatientprofileGetallergytypesuggestionGetApiArg =
  void;
export type ApiServicesAppPatientprofileGetcontraceptionsuggestionGetApiResponse =
  /** status 200 Success */ GetContraceptionSuggestionQueryResponse[];
export type ApiServicesAppPatientprofileGetcontraceptionsuggestionGetApiArg =
  void;
export type ApiServicesAppPatientprofileGetallergyexperiencedsuggestionGetApiResponse =
  /** status 200 Success */ GetAllergyExperiencedSuggestionQueryResponse[];
export type ApiServicesAppPatientprofileGetallergyexperiencedsuggestionGetApiArg =
  void;
export type ApiServicesAppPatientprofileGetimplantsuggestionsGetApiResponse =
  /** status 200 Success */ GetImplantSuggestionResponse[];
export type ApiServicesAppPatientprofileGetimplantsuggestionsGetApiArg = void;
export type ApiServicesAppPatientprofileUpdatepatientimplantPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatepatientimplantPutApiArg = {
  createPatientImplantCommandRequestDto: CreatePatientImplantCommandRequestDto;
};
export type ApiServicesAppPatientprofileDeletepatientimplantDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletepatientimplantDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileCreatepatientimplantPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileCreatepatientimplantPostApiArg = {
  createPatientImplantCommandRequestDto: CreatePatientImplantCommandRequestDto;
};
export type ApiServicesAppPatientprofileGetreviewofsystemssuggestionsGetApiResponse =
  /** status 200 Success */ ReviewOfSystemsSuggestionResponseDto[];
export type ApiServicesAppPatientprofileGetreviewofsystemssuggestionsGetApiArg =
  {
    category:
      | 'Systemic'
      | 'Cardiovascular'
      | 'Respiratory'
      | 'Gastrointestinal'
      | 'Genitourinary'
      | 'Musculoskeletal'
      | 'Dermatological'
      | 'Neurological';
  };
export type ApiServicesAppPatientprofileGetdiagnosissuggestionsGetApiResponse =
  /** status 200 Success */ GetDiagnosisSuggestionResponseDto[];
export type ApiServicesAppPatientprofileGetdiagnosissuggestionsGetApiArg = void;
export type ApiServicesAppPatientprofileGetproceduresuggestionsGetApiResponse =
  /** status 200 Success */ GetProcedureSuggestionResponseDto[];
export type ApiServicesAppPatientprofileGetproceduresuggestionsGetApiArg = void;
export type ApiServicesAppPatientprofileGetpatientimplantsGetApiResponse =
  /** status 200 Success */ GetPatientImplantResponseDto[];
export type ApiServicesAppPatientprofileGetpatientimplantsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileAddbloodtransfusionhistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileAddbloodtransfusionhistoryPostApiArg = {
  createBloodTransfusionHistoryRequestDto: CreateBloodTransfusionHistoryRequestDto;
};
export type ApiServicesAppPatientprofileAddsurgicalhistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileAddsurgicalhistoryPostApiArg = {
  createSurgicalHistoryRequestDto: CreateSurgicalHistoryRequestDto;
};
export type ApiServicesAppPatientprofileGetpatientsurgicalhistoryGetApiResponse =
  /** status 200 Success */ GetSurgicalHistoryResponseDto[];
export type ApiServicesAppPatientprofileGetpatientsurgicalhistoryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileGetpatientbloodtransfusionhistoryGetApiResponse =
  /** status 200 Success */ GetPatientBloodTransfusionHistoryResponseDto[];
export type ApiServicesAppPatientprofileGetpatientbloodtransfusionhistoryGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientprofileDeletebloodtransfusionhistoryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletebloodtransfusionhistoryDeleteApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientprofileDeletesurgicalhistoryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletesurgicalhistoryDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileUpdatesurgicalhistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatesurgicalhistoryPutApiArg = {
  id?: number;
  createSurgicalHistoryRequestDto: CreateSurgicalHistoryRequestDto;
};
export type ApiServicesAppPatientprofileUpdatebloodtransfusionhistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatebloodtransfusionhistoryPutApiArg =
  {
    id?: number;
    createBloodTransfusionHistoryRequestDto: CreateBloodTransfusionHistoryRequestDto;
  };
export type ApiServicesAppPatientprofileCreatealcoholhistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileCreatealcoholhistoryPostApiArg = {
  createAlcoholHistoryRequestDto: CreateAlcoholHistoryRequestDto;
};
export type ApiServicesAppPatientprofileCreaterecreationaldrughistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileCreaterecreationaldrughistoryPostApiArg =
  {
    createRecreationalDrugsHistoryRequestDto: CreateRecreationalDrugsHistoryRequestDto;
  };
export type ApiServicesAppPatientprofileCreatecigeretteandtobaccohistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileCreatecigeretteandtobaccohistoryPostApiArg =
  {
    createCigaretteHistoryRequestDto: CreateCigaretteHistoryRequestDto;
  };
export type ApiServicesAppPatientprofileUpdatealcoholhistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatealcoholhistoryPutApiArg = {
  createAlcoholHistoryRequestDto: CreateAlcoholHistoryRequestDto;
};
export type ApiServicesAppPatientprofileUpdatecigarettehistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatecigarettehistoryPutApiArg = {
  createCigaretteHistoryRequestDto: CreateCigaretteHistoryRequestDto;
};
export type ApiServicesAppPatientprofileUpdaterecreationaldrughistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdaterecreationaldrughistoryPutApiArg =
  {
    createRecreationalDrugsHistoryRequestDto: CreateRecreationalDrugsHistoryRequestDto;
  };
export type ApiServicesAppPatientprofileGetalcoholhistoryGetApiResponse =
  /** status 200 Success */ GetAlcoholHistoryResponseDto[];
export type ApiServicesAppPatientprofileGetalcoholhistoryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileGetrecreationaldrughistoryGetApiResponse =
  /** status 200 Success */ GetRecreationalDrugHistoryResponseDto[];
export type ApiServicesAppPatientprofileGetrecreationaldrughistoryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileGetcigaretteandtobaccohistoryGetApiResponse =
  /** status 200 Success */ GetCigaretteHistoryResponseDto[];
export type ApiServicesAppPatientprofileGetcigaretteandtobaccohistoryGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientprofileDeletealcoholhistoryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletealcoholhistoryDeleteApiArg = {
  historyId?: number;
};
export type ApiServicesAppPatientprofileDeletecigaretteandtobaccohistoryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletecigaretteandtobaccohistoryDeleteApiArg =
  {
    hisoryId?: number;
  };
export type ApiServicesAppPatientprofileDeleterecreationaldrughistoryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeleterecreationaldrughistoryDeleteApiArg =
  {
    historyId?: number;
  };
export type ApiServicesAppPatientprofileGetalcoholtypessuggestionGetApiResponse =
  /** status 200 Success */ GetAlcoholTypesResponseDto[];
export type ApiServicesAppPatientprofileGetalcoholtypessuggestionGetApiArg =
  void;
export type ApiServicesAppPatientprofileGetcigeretteandtobaccosuggestionGetApiResponse =
  /** status 200 Success */ GetTobaccoSuggestionResponseDto[];
export type ApiServicesAppPatientprofileGetcigeretteandtobaccosuggestionGetApiArg =
  void;
export type ApiServicesAppPatientprofileGetrecreationaldrugsuggestionsGetApiResponse =
  /** status 200 Success */ GetRecreationalDrugsSuggesionResponseDto[];
export type ApiServicesAppPatientprofileGetrecreationaldrugsuggestionsGetApiArg =
  void;
export type ApiServicesAppPatientprofileCreatedrughistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileCreatedrughistoryPostApiArg = {
  createDrugHistoryRequestDto: CreateDrugHistoryRequestDto;
};
export type ApiServicesAppPatientprofileUpdatedrughistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatedrughistoryPutApiArg = {
  createDrugHistoryRequestDto: CreateDrugHistoryRequestDto;
};
export type ApiServicesAppPatientprofileGetdrughistoryGetApiResponse =
  /** status 200 Success */ GetDrugHistoryResponseDto[];
export type ApiServicesAppPatientprofileGetdrughistoryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientprofileDeletedrughistoryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletedrughistoryDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetApiResponse =
  /** status 200 Success */ GetPatientBloodGroupAndGenotypeResponseDto;
export type ApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientprofileUpdatevaccinationhistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatevaccinationhistoryPutApiArg = {
  createVaccinationHistoryDto: CreateVaccinationHistoryDto;
};
export type ApiServicesAppPatientprofileDeletevaccinationhistoryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletevaccinationhistoryDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileGetvaccinationsuggestionsGetApiResponse =
  /** status 200 Success */ VaccinationSuggestionResponseDto[];
export type ApiServicesAppPatientprofileGetvaccinationsuggestionsGetApiArg =
  void;
export type ApiServicesAppPatientprofileCreatereviewofsystemsdataPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileCreatereviewofsystemsdataPostApiArg = {
  reviewOfSystemsInputDto: ReviewOfSystemsInputDto;
};
export type ApiServicesAppPatientprofileGetpatientreviewofsystemsdataGetApiResponse =
  /** status 200 Success */ GetPatientReviewOfSystemsDataResponseDto[];
export type ApiServicesAppPatientprofileGetpatientreviewofsystemsdataGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientprofileUpdatepatientreviewofsystemsdataPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatepatientreviewofsystemsdataPutApiArg =
  {
    createReviewOfSystemsRequestDto: CreateReviewOfSystemsRequestDto;
  };
export type ApiServicesAppPatientprofileDeletereviewofsystemsdataDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletereviewofsystemsdataDeleteApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientprofileSaveoccupationhistoryPostApiResponse =
  unknown;
export type ApiServicesAppPatientprofileSaveoccupationhistoryPostApiArg = {
  createOccupationalHistoryDto: CreateOccupationalHistoryDto;
};
export type ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiResponse =
  /** status 200 Success */ CreateOccupationalHistoryDto[];
export type ApiServicesAppPatientprofileGetpatientoccupationalhistoryGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletepatientoccupationDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutApiArg =
  {
    createOccupationalHistoryDto: CreateOccupationalHistoryDto;
  };
export type ApiServicesAppPatientprofileGetreviewdetailshistorystateforpatientGetApiResponse =
  /** status 200 Success */ ReviewDetailsHistoryStateDto;
export type ApiServicesAppPatientprofileGetreviewdetailshistorystateforpatientGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientprofileUpdatereviewdetailshistorystatesPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatereviewdetailshistorystatesPutApiArg =
  {
    reviewDetailsHistoryStateDto: ReviewDetailsHistoryStateDto;
  };
export type ApiServicesAppPatientprofileDeletepastmedicalhistoryDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientprofileDeletepastmedicalhistoryDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientprofileUpdatepastmedicalhistoryPutApiResponse =
  unknown;
export type ApiServicesAppPatientprofileUpdatepastmedicalhistoryPutApiArg = {
  patientPastMedicalConditionCommandRequest: PatientPastMedicalConditionCommandRequest;
};
export type ApiServicesAppPatientreferraldocumentsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientReferralDocumentForViewDto;
export type ApiServicesAppPatientreferraldocumentsGetallGetApiArg = {
  filter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientreferraldocumentsGetpatientreferraldocumentforeditGetApiResponse =
  /** status 200 Success */ GetPatientReferralDocumentForEditOutput;
export type ApiServicesAppPatientreferraldocumentsGetpatientreferraldocumentforeditGetApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientreferraldocumentsCreateoreditPostApiResponse =
  unknown;
export type ApiServicesAppPatientreferraldocumentsCreateoreditPostApiArg = {
  createOrEditPatientReferralDocumentDto: CreateOrEditPatientReferralDocumentDto;
};
export type ApiServicesAppPatientreferraldocumentsDeleteDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientreferraldocumentsDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientreferraldocumentsRemovereferraldocumentfileDeleteApiResponse =
  unknown;
export type ApiServicesAppPatientreferraldocumentsRemovereferraldocumentfileDeleteApiArg =
  {
    id?: number;
  };
export type ApiServicesAppPatientreferraldocumentsGetpatientreferralletterGetApiResponse =
  /** status 200 Success */ GetPatientReferralDocumentForEditOutput;
export type ApiServicesAppPatientreferraldocumentsGetpatientreferralletterGetApiArg =
  {
    documentId?: string;
  };
export type ApiServicesAppPatientrelationsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientRelationForViewDto;
export type ApiServicesAppPatientrelationsGetallGetApiArg = {
  filter?: string;
  relationshipFilter?: number;
  firstNameFilter?: string;
  middleNameFilter?: string;
  lastNameFilter?: string;
  patientPatientCodeFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientrelationsGetallnextofkinGetApiResponse =
  /** status 200 Success */ NextOfKinDto[];
export type ApiServicesAppPatientrelationsGetallnextofkinGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientrelationsDeleteDeleteApiResponse = unknown;
export type ApiServicesAppPatientrelationsDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientrelationsGetallpatientforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientRelationPatientLookupTableDto;
export type ApiServicesAppPatientrelationsGetallpatientforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientForViewDto;
export type ApiServicesAppPatientsGetallGetApiArg = {
  filter?: string;
  patientCodeFilter?: string;
  countryNameFilter?: string;
  patientOccupationNameFilter?: string;
  patientOccupationCategoryNameFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientsGetpatientforeditGetApiResponse =
  /** status 200 Success */ CreateOrEditPatientDto;
export type ApiServicesAppPatientsGetpatientforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppPatientsCheckpatientexistPostApiResponse =
  /** status 200 Success */ CheckPatientExistOutput[];
export type ApiServicesAppPatientsCheckpatientexistPostApiArg = {
  checkPatientExistInput: CheckPatientExistInput;
};
export type ApiServicesAppPatientsCreateoreditPostApiResponse =
  /** status 200 Success */ CreateOrEditPatientDto;
export type ApiServicesAppPatientsCreateoreditPostApiArg = {
  createOrEditPatientDto: CreateOrEditPatientDto;
};
export type ApiServicesAppPatientsDeleteDeleteApiResponse = unknown;
export type ApiServicesAppPatientsDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppPatientsGetallpatientoccupationforlookuptableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfPatientPatientOccupationLookupTableDto;
export type ApiServicesAppPatientsGetallpatientoccupationforlookuptableGetApiArg =
  {
    filter?: string;
    outPatientListingType?: OutPatientListingType;
    status?: AppointmentStatusType;
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientsGetoutpatientlandinglistGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientLandingListOuptDto;
export type ApiServicesAppPatientsGetoutpatientlandinglistGetApiArg = {
  filter?: string;
  outPatientListingType?: OutPatientListingType;
  status?: AppointmentStatusType;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientsGetinpatientlandinglistGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetInpatientLandingListResponse;
export type ApiServicesAppPatientsGetinpatientlandinglistGetApiArg = {
  wardId: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientsGetaccidentandemergencylandinglistGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetAccidentAndEmergencyLandingListResponse;
export type ApiServicesAppPatientsGetaccidentandemergencylandinglistGetApiArg =
  {
    sorting?: string;
    skipCount?: number;
    maxResultCount?: number;
  };
export type ApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutApiResponse =
  /** status 200 Success */ string;
export type ApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutApiArg =
  {
    encounterId?: number;
  };
export type ApiServicesAppPatientsGetpatientdetailsGetApiResponse =
  /** status 200 Success */ GetPatientDetailsOutDto;
export type ApiServicesAppPatientsGetpatientdetailsGetApiArg = {
  patientId?: number;
  encounterId?: number;
};
export type ApiServicesAppPatientsGetnewpatientcodeGetApiResponse =
  /** status 200 Success */ string;
export type ApiServicesAppPatientsGetnewpatientcodeGetApiArg = void;
export type ApiServicesAppPatientsSearchpatientGetApiResponse =
  /** status 200 Success */ SearchPatientOutput[];
export type ApiServicesAppPatientsSearchpatientGetApiArg = {
  searchText?: string;
};
export type ApiServicesAppPatientsGetpatienthistoryGetApiResponse =
  /** status 200 Success */ PatientDetailsQueryResponse;
export type ApiServicesAppPatientsGetpatienthistoryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPatientWardRoundAndClinicNotesResponse;
export type ApiServicesAppPatientsGetpatientwardroundandclinicnotesGetApiArg = {
  patientId?: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientsGetintensityunitsGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppPatientsGetintensityunitsGetApiArg = void;
export type ApiServicesAppPatientsGetallpatientinclinicfortodayGetApiResponse =
  /** status 200 Success */ AllPatientInClinicResponse[];
export type ApiServicesAppPatientsGetallpatientinclinicfortodayGetApiArg = {
  searchText?: string;
  sortFilter?: ViewAllPatientInClinicSortFilter;
};
export type ApiServicesAppPatientsGetpatientmedicationsGetApiResponse =
  /** status 200 Success */ GetPatientsMedicationsResponse;
export type ApiServicesAppPatientsGetpatientmedicationsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientsCreatepatientstabilitystatusPostApiResponse =
  unknown;
export type ApiServicesAppPatientsCreatepatientstabilitystatusPostApiArg = {
  patientStabilityRequestDto: PatientStabilityRequestDto;
};
export type ApiServicesAppPatientsGetpatientstabilitystatusGetApiResponse =
  /** status 200 Success */ PatientStabilityResponseDto[];
export type ApiServicesAppPatientsGetpatientstabilitystatusGetApiArg = {
  patientId?: number;
  encounterId?: number;
};
export type ApiServicesAppPatientsGetstabilitystatusGetApiResponse =
  /** status 200 Success */ string[];
export type ApiServicesAppPatientsGetstabilitystatusGetApiArg = void;
export type ApiServicesAppPatientwalletGetallrefundrequestGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfRefundRequestListQueryResponse;
export type ApiServicesAppPatientwalletGetallrefundrequestGetApiArg = {
  invoiceSource?: InvoiceSource;
  dateFilter: PatientSeenFilter;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppPatientwalletGetinvoicesforrefundGetApiResponse =
  /** status 200 Success */ GetInvoicesForRefundQueryResponse[];
export type ApiServicesAppPatientwalletGetinvoicesforrefundGetApiArg = {
  filter?: WalletRefundFilter;
  customDate?: string;
  patientId: number;
};
export type ApiServicesAppPatientwalletCreatewalletrefundrequestPostApiResponse =
  unknown;
export type ApiServicesAppPatientwalletCreatewalletrefundrequestPostApiArg = {
  invoiceWalletRefundRequest: InvoiceWalletRefundRequest;
};
export type ApiServicesAppPatientwalletGetwalletfundingrequestsGetApiResponse =
  /** status 200 Success */ WalletFundingResponseDto;
export type ApiServicesAppPatientwalletGetwalletfundingrequestsGetApiArg = {
  patientId: number;
};
export type ApiServicesAppPatientwalletApprovewalletfundingrequestsPostApiResponse =
  unknown;
export type ApiServicesAppPatientwalletApprovewalletfundingrequestsPostApiArg =
  {
    walletFundingRequestDto: WalletFundingRequestDto;
  };
export type ApiServicesAppPatientwalletGetlistofinvoiceitemsforrefundGetApiResponse =
  /** status 200 Success */ RefundInvoiceQueryResponse[];
export type ApiServicesAppPatientwalletGetlistofinvoiceitemsforrefundGetApiArg =
  {
    invoiceIds: number[];
    patientId: number;
    dateFilter?: WalletRefundFilter;
    customDate?: string;
  };
export type ApiServicesAppPatientwalletGetrefundrequestitemsforapprovalGetApiResponse =
  /** status 200 Success */ RefundInvoiceQueryResponse[];
export type ApiServicesAppPatientwalletGetrefundrequestitemsforapprovalGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppPatientwalletProcessrefundrequestPostApiResponse =
  unknown;
export type ApiServicesAppPatientwalletProcessrefundrequestPostApiArg = {
  processRefundRequestCommand: ProcessRefundRequestCommand;
};
export type ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostApiResponse =
  /** status 200 Success */ number;
export type ApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostApiArg =
  {
    createPatientPhysicalExaminationDto: CreatePatientPhysicalExaminationDto;
  };
export type ApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostApiResponse =
  unknown;
export type ApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostApiArg =
  {
    body: {
      PatientPhysicalExaminationId: number;
      ImageFiles: Blob[];
    };
  };
export type ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiResponse =
  /** status 200 Success */ PatientPhysicalExaminationResponseDto[];
export type ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetApiArg =
  {
    patientId: number;
    procedureId?: number;
  };
export type ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiResponse =
  unknown;
export type ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteApiArg =
  {
    patientPhysicalExaminationId: number;
  };
export type ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiResponse =
  /** status 200 Success */ PatientPhysicalExaminationImageFileResponseDto[];
export type ApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetApiArg =
  {
    patientPhysicalExaminationId: number;
  };
export type ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiResponse =
  unknown;
export type ApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteApiArg =
  {
    patientPhysicalExaminationImageFileId: number;
  };
export type ApiServicesAppPlanitemsGetpatientplanitemsGetApiResponse =
  /** status 200 Success */ PlanItemsSummaryForReturnDto[];
export type ApiServicesAppPlanitemsGetpatientplanitemsGetApiArg = {
  patientId?: number;
  procedureId?: number;
};
export type ApiServicesAppProcedureGetpatientproceduresGetApiResponse =
  /** status 200 Success */ PatientProcedureResponseDto[];
export type ApiServicesAppProcedureGetpatientproceduresGetApiArg = {
  patientId?: number;
  procedureType?: string;
  parentProcedureId?: number;
};
export type ApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostApiResponse =
  unknown;
export type ApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostApiArg =
  {
    createStatementOfPatientOrNextOfKinOrGuardianDto: CreateStatementOfPatientOrNextOfKinOrGuardianDto;
  };
export type ApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetApiResponse =
  /** status 200 Success */ StatementOfPatientOrNextOfKinOrGuardianResponseDto;
export type ApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetApiArg =
  {
    procedureId?: number;
  };
export type ApiServicesAppProcedureGetpatientinterventionsGetApiResponse =
  /** status 200 Success */ GetPatientInterventionsResponseDto;
export type ApiServicesAppProcedureGetpatientinterventionsGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppReviewdetailedhistoryGetpatientreviewdetailedhistoryGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfReviewDetailedHistoryReturnDto;
export type ApiServicesAppReviewdetailedhistoryGetpatientreviewdetailedhistoryGetApiArg =
  {
    patientId?: number;
  };
export type ApiServicesAppSymptomGetpatientsummaryGetApiResponse =
  /** status 200 Success */ PatientSymptomSummaryForReturnDto[];
export type ApiServicesAppSymptomGetpatientsummaryGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppVaccineGetpatientvaccinationGetApiResponse =
  /** status 200 Success */ VaccinationResponseDto[];
export type ApiServicesAppVaccineGetpatientvaccinationGetApiArg = {
  id?: number;
  procedureId?: number;
};
export type ApiServicesAppVaccineGetpatientvaccinationhistoryGetApiResponse =
  /** status 200 Success */ VaccinationHistoryResponseDto[];
export type ApiServicesAppVaccineGetpatientvaccinationhistoryGetApiArg = {
  id?: number;
};
export type ApiServicesAppVitalsignsCreatepatientvitalPostApiResponse = unknown;
export type ApiServicesAppVitalsignsCreatepatientvitalPostApiArg = {
  createMultiplePatientVitalDto: CreateMultiplePatientVitalDto;
};
export type ApiServicesAppVitalsignsGetpatientvitalssummaryGetApiResponse =
  /** status 200 Success */ PatientVitalsSummaryResponseDto[];
export type ApiServicesAppVitalsignsGetpatientvitalssummaryGetApiArg = {
  patientId?: number;
  procedureId?: number;
};
export type ApiServicesAppVitalsignsGetpatientvitalsGetApiResponse =
  /** status 200 Success */ PatientVitalResponseDto[];
export type ApiServicesAppVitalsignsGetpatientvitalsGetApiArg = {
  patientId?: number;
  procedureId?: number;
};
export type ApiServicesAppVitalsignsRecheckpatientvitalPostApiResponse =
  unknown;
export type ApiServicesAppVitalsignsRecheckpatientvitalPostApiArg = {
  recheckPatientVitalDto: RecheckPatientVitalDto;
};
export type ApiServicesAppVitalsignsDeletepatientvitalDeleteApiResponse =
  unknown;
export type ApiServicesAppVitalsignsDeletepatientvitalDeleteApiArg = {
  patientVitalIds?: number[];
};
export type ApiServicesAppWardemergenciesCreatepatientinterventionPostApiResponse =
  unknown;
export type ApiServicesAppWardemergenciesCreatepatientinterventionPostApiArg = {
  createPatientInterventionRequest: CreatePatientInterventionRequest;
};
export type ApiServicesAppWardemergenciesGetpatientinterventionsGetApiResponse =
  /** status 200 Success */ GetPatientInterventionsResponse[];
export type ApiServicesAppWardemergenciesGetpatientinterventionsGetApiArg = {
  patientId: number;
};
export type ApiServicesAppWounddressingGetpatientwounddressingGetApiResponse =
  /** status 200 Success */ WoundDressingSummaryForReturnDto[];
export type ApiServicesAppWounddressingGetpatientwounddressingGetApiArg = {
  patientId?: number;
};
export type ServiceCentreType =
  | 'OutPatient'
  | 'InPatient'
  | 'AccidentAndEmergency'
  | 'Pharmacy'
  | 'Laboratory'
  | 'Others';
export type DaysOfTheWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';
export type OrganizationUnitTimeDto = {
  dayOfTheWeek?: DaysOfTheWeek;
  openingTime?: string | null;
  closingTime?: string | null;
  isActive?: boolean;
  organizationUnitExtendedId?: number | null;
  id?: number | null;
};
export type OrganizationUnitDto = {
  parentId?: number | null;
  code?: string | null;
  displayName?: string | null;
  shortName?: string | null;
  isActive?: boolean | null;
  isStatic?: boolean;
  type?: string | null;
  serviceCentre?: ServiceCentreType;
  facilityId?: number | null;
  memberCount?: number;
  roleCount?: number;
  operatingTimes?: OrganizationUnitTimeDto[] | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type WardBedDto = {
  bedNumber?: string | null;
  isActive?: boolean;
  bedTypeId?: number;
  wardId?: number;
  bedTypeName?: string | null;
  id?: number;
};
export type WardDto = {
  name?: string | null;
  description?: string | null;
  isActive?: boolean;
  facilityId?: number;
  wardBeds?: WardBedDto[] | null;
  id?: number;
};
export type TitleType =
  | 'Mr'
  | 'Mrs'
  | 'Miss'
  | 'Ms'
  | 'Dr'
  | 'Prof'
  | 'Hon'
  | 'Rev'
  | 'Pr'
  | 'Fr'
  | 'Other'
  | 'CM'
  | 'DNS'
  | 'ADNS'
  | 'CNO'
  | 'ACNO'
  | 'PNO'
  | 'SNO'
  | 'NO'
  | 'Pharm'
  | 'Pharm Tech';
export type GenderType = 'Male' | 'Female' | 'Other';
export type IdentificationType =
  | 'State_Id_Card'
  | 'State_Driver_License'
  | 'Military_Id_Card'
  | 'Social_Security_Card'
  | 'Birth_Certificate'
  | 'Voter_Registration_Card';
export type StaffMemberDto = {
  staffCode?: string | null;
  contractStartDate?: string | null;
  contractEndDate?: string | null;
  jobTitleId?: number | null;
  jobLevelId?: number | null;
  departmentId?: number | null;
  unitId?: number | null;
  facilityId?: number | null;
  id?: number | null;
  title: TitleType;
  name: string;
  middleName?: string | null;
  surname: string;
  userName: string;
  displayName?: string | null;
  fullName?: string | null;
  gender?: GenderType;
  dateOfBirth?: string | null;
  identificationCode?: string | null;
  identificationType?: IdentificationType;
  streetAddress?: string | null;
  city?: string | null;
  district?: string | null;
  state?: string | null;
  postCode?: string | null;
  countryId?: number | null;
  emailAddress: string;
  altEmailAddress?: string | null;
  phoneNumber?: string | null;
  password?: string | null;
  isActive?: boolean;
  shouldChangePasswordOnNextLogin?: boolean;
  isTwoFactorEnabled?: boolean;
  isLockoutEnabled?: boolean;
};
export type AdmitPatientRequest = {
  patientId?: number;
  facilityId?: number;
  unitId?: number | null;
  unit?: OrganizationUnitDto;
  wardId?: number | null;
  ward?: WardDto;
  wardBedId?: number | null;
  wardBed?: WardBedDto;
  attendingPhysicianId?: number | null;
  attendingPhysician?: StaffMemberDto;
  serviceCentre?: ServiceCentreType;
  encounterId?: number | null;
};
export type PatientStabilityStatus =
  | 'Patient is Stable'
  | 'Patient is critically Ill';
export type TransferPatientRequest = {
  encounterId?: number;
  patientId?: number;
  wardId?: number;
  wardBedId?: number | null;
  status?: PatientStabilityStatus;
};
export type AppointmentRepeatType =
  | 'Daily'
  | 'Weekly'
  | 'Weekends'
  | 'Weekdays'
  | 'Monthly'
  | 'Annually'
  | 'Custom';
export type AppointmentStatusType =
  | 'Pending'
  | 'Executed'
  | 'Missed'
  | 'Rescheduled'
  | 'Not arrived'
  | 'Arrived'
  | 'Processing'
  | 'Awaiting vitals'
  | 'Awaiting clinician'
  | 'Awaiting doctor'
  | 'Seen doctor'
  | 'Seen clinician'
  | 'Admitted to ward'
  | 'Tranferred'
  | 'Awaiting admission';
export type ScanningStatusType =
  | 'No scanned record'
  | 'Scanning in progress'
  | 'Scanned record available';
export type AppointmentType =
  | 'Walk-in'
  | 'Referral'
  | 'Consultation'
  | 'Follow-up'
  | 'Medical-exam';
export type AppointmentPatientDto = {
  id?: number;
  fullName?: string | null;
  patientCode?: string | null;
  dateOfBirth?: string;
  genderType?: GenderType;
  pictureUrl?: string | null;
  isNewToHospital?: boolean;
};
export type ReferralDocumentDto = {
  id?: number;
  referringHealthCareProvider?: string | null;
  diagnosisSummary?: string | null;
  referralDocument?: string | null;
};
export type AttendingPhysicianDto = {
  id?: number;
  staffCode?: string | null;
  fullName?: string | null;
};
export type AttendingClinicDto = {
  id?: number;
  displayName?: string | null;
};
export type ScannedDocumentDto = {
  id?: number;
  isApproved?: boolean | null;
  reviewerId?: number | null;
};
export type AppointmentListResponse = {
  title?: string | null;
  duration?: number;
  startTime?: string;
  isRepeat?: boolean;
  notes?: string | null;
  repeatType?: AppointmentRepeatType;
  status?: AppointmentStatusType;
  scanningStatus?: ScanningStatusType;
  type?: AppointmentType;
  appointmentPatient?: AppointmentPatientDto;
  referralDocument?: ReferralDocumentDto;
  attendingPhysician?: AttendingPhysicianDto;
  referringClinic?: string | null;
  attendingClinic?: AttendingClinicDto;
  appointmentCount?: number;
  scannedDocument?: ScannedDocumentDto;
  id?: number;
};
export type PatientBedMakingSummaryForReturnDto = {
  id?: number;
  note?: string | null;
  bedMakingSnowmedIds?: string[] | null;
  creationTime?: string;
  deletionTime?: string | null;
};
export type PatientDiagnosisReturnDto = {
  id?: number;
  tenantId?: number;
  patientId?: number;
  sctid?: number;
  description?: string | null;
  notes?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type DischargeEntryType = 1 | 2 | 3 | 4;
export type DischargeStatus = 1 | 2 | 3;
export type PatientCauseOfDeathDto = {
  causesOfDeath?: string | null;
};
export type DischargeNoteDto = {
  note?: string | null;
};
export type PatientMedicationForReturnDto = {
  id?: number;
  patientId?: number;
  productId?: number;
  productName?: string | null;
  productSource?: string | null;
  doseUnit?: string | null;
  frequency?: string | null;
  duration?: string | null;
  direction?: string | null;
  note?: string | null;
  procedureId?: number | null;
  procedureEntryType?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type DischargePlanItemDto = {
  planItemId?: number;
  patientId?: number;
  dischargeId?: number;
  description?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
};
export type DischargeDto = {
  id?: number;
  patientId?: number;
  isFinalized?: boolean;
  dischargeType?: DischargeEntryType;
  dischargeTypeStr?: string | null;
  status?: DischargeStatus;
  statusStr?: string | null;
  isBroughtInDead?: boolean;
  dateOfDeath?: string | null;
  timeOfDeath?: string | null;
  timeCPRCommenced?: string | null;
  timeCPREnded?: string | null;
  causesOfDeath?: PatientCauseOfDeathDto[] | null;
  note?: DischargeNoteDto[] | null;
  appointmentId?: number | null;
  encounterId?: number | null;
  prescriptions?: PatientMedicationForReturnDto[] | null;
  planItems?: DischargePlanItemDto[] | null;
  patientAssessment?: string | null;
  activitiesOfDailyLiving?: string | null;
  drugs?: string | null;
  createdAt?: string;
  modifieddAt?: string | null;
};
export type CreateOrEditPatientCodeTemplateDto = {
  prefix?: string | null;
  length?: number;
  suffix?: string | null;
  startingIndex?: number;
  isActive?: boolean;
  facilityId?: number;
  id?: number | null;
};
export type CreateOrEditFacilityPatientCodeTemplateDto = {
  name: string;
  hasPharmacy?: boolean | null;
  hasLaboratory?: boolean | null;
  patientCodeTemplate?: CreateOrEditPatientCodeTemplateDto;
  groupId?: number;
  id?: number | null;
};
export type CreateOrEditFacilityGroupPatientCodeTemplateDto = {
  name: string;
  childFacilities: CreateOrEditFacilityPatientCodeTemplateDto[];
  id?: number | null;
};
export type GetFacilityGroupPatientDetailsForEditOutput = {
  facilityGroup?: CreateOrEditFacilityGroupPatientCodeTemplateDto;
};
export type FeedingSummaryForReturnDto = {
  id?: number;
  volume?: number;
  description?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
};
export type ProcedureEntryType = 'Preop' | 'Intraop' | 'Postop';
export type InputNotesSummaryForReturnDto = {
  id?: number;
  description?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  entryType?: ProcedureEntryType;
  procedureId?: number | null;
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
export type InvoicePatientLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfInvoicePatientLookupTableDto = {
  totalCount?: number;
  items?: InvoicePatientLookupTableDto[] | null;
};
export type InvoicePatientAppointmentLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfInvoicePatientAppointmentLookupTableDto = {
  totalCount?: number;
  items?: InvoicePatientAppointmentLookupTableDto[] | null;
};
export type MoneyDto = {
  amount: number;
  currency: string;
};
export type MostRecentBillItems = {
  name?: string | null;
  quantity?: number;
  subTotal?: MoneyDto;
  amountPaid?: MoneyDto;
  outstandingAmount?: MoneyDto;
  notes?: string | null;
};
export type GetMostRecentBillResponse = {
  paymentStatus?: string | null;
  totalAmount?: MoneyDto;
  issuedBy?: string | null;
  issuedOn?: string;
  notes?: string | null;
  invoiceNo?: string | null;
  items?: MostRecentBillItems[] | null;
  id?: number;
};
export type InvoiceReceiptQueryResponse = {
  invoiceItems?: GetMostRecentBillResponse[] | null;
  receiptItems?: GetMostRecentBillResponse[] | null;
};
export type InvoiceItemSummary = {
  id?: number;
  name?: string | null;
  status?: string | null;
  subTotal?: MoneyDto;
};
export type PatientsWithInvoiceItemsResponse = {
  patientId?: number;
  firstName?: string | null;
  lastName?: string | null;
  patientCode?: string | null;
  dateOfBirth?: string;
  genderType?: GenderType;
  walletBalance?: MoneyDto;
  totalOutstanding?: MoneyDto;
  lastPaymentDate?: string | null;
  hasPendingWalletFundingRequest?: boolean;
  appointmentStatus?: string | null;
  invoiceItems?: InvoiceItemSummary[] | null;
};
export type PagedResultDtoOfPatientsWithInvoiceItemsResponse = {
  totalCount?: number;
  items?: PatientsWithInvoiceItemsResponse[] | null;
};
export type PatientSeenFilter = 'Today' | 'ThisWeek' | 'ThisMonth' | 'ThisYear';
export type InvoiceSource =
  | 'AccidentAndEmergency'
  | 'OutPatient'
  | 'InPatient'
  | 'Pharmacy'
  | 'Lab'
  | 'Others';
export type GetPatientTotalSummaryQueryResponse = {
  itemsCounts?: number;
  totalTopUp?: MoneyDto;
  totalAmount?: MoneyDto;
  toTalPaid?: MoneyDto;
  totalOutstanding?: MoneyDto;
  isDiscountApplied?: boolean;
  isReliefApplied?: boolean;
};
export type PatientInvoicesAndWalletTransactionsResponse = {
  invoiceId?: number | null;
  invoiceNo?: string | null;
  createdAt?: string | null;
  invoiceItemName?: string | null;
  invoiceItemStatus?: string | null;
  generalStatus?: string | null;
  isProformaInvoice?: boolean;
  topUpAmount?: MoneyDto;
  invoiceAmount?: MoneyDto;
  editedAmount?: MoneyDto;
  modifiedAt?: string | null;
  modifiedBy?: string | null;
  type?: string | null;
};
export type PagedResultDtoOfPatientInvoicesAndWalletTransactionsResponse = {
  totalCount?: number;
  items?: PatientInvoicesAndWalletTransactionsResponse[] | null;
};
export type InvoiceItemResponse = {
  name?: string | null;
  quantity?: number;
  unitPrice?: MoneyDto;
  discountAmount?: MoneyDto;
  discountPercentage?: number | null;
  subTotal?: MoneyDto;
  notes?: string | null;
  id?: number;
};
export type GetAllProformaInvoiceQueryResponse = {
  createdDate?: string;
  invoiceNo?: string | null;
  patientId?: number;
  paymentType?: string | null;
  totalAmount?: MoneyDto;
  invoiceItems?: InvoiceItemResponse[] | null;
  id?: number;
};
export type MealsSummaryForReturnDto = {
  id?: number;
  description?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
};
export type DateTypes = 'Day' | 'Week' | 'Month' | 'Date';
export type NextAppointmentReturnDto = {
  id?: number;
  patientId: number;
  userId: number;
  staffId: number;
  unitId: number;
  dateType: DateTypes;
  seenIn?: number | null;
  isToSeeSameDoctor?: boolean | null;
  dayOfTheWeek?: DaysOfTheWeek;
  appointmentDate?: string | null;
  title?: string | null;
  duration?: number;
};
export type PatientAppointmentDto = {
  title?: string | null;
  duration?: number;
  startTime?: string;
  isRepeat?: boolean;
  notes?: string | null;
  repeatType?: AppointmentRepeatType;
  status?: AppointmentStatusType;
  type?: AppointmentType;
  patientId?: number;
  patientReferralId?: number | null;
  attendingPhysician?: number | null;
  referringClinic?: number | null;
  attendingClinic?: number | null;
  id?: number;
};
export type GetPatientAppointmentForViewDto = {
  patientAppointment?: PatientAppointmentDto;
  patientPatientCode?: string | null;
  patientReferralReferringHospital?: string | null;
  staffMemberStaffCode?: string | null;
  organizationUnitDisplayName?: string | null;
  organizationUnitDisplayName2?: string | null;
};
export type PagedResultDtoOfGetPatientAppointmentForViewDto = {
  totalCount?: number;
  items?: GetPatientAppointmentForViewDto[] | null;
};
export type CreateOrEditPatientAppointmentDto = {
  title?: string | null;
  duration?: number;
  startTime?: string;
  isRepeat?: boolean;
  notes?: string | null;
  repeatType?: AppointmentRepeatType;
  status?: AppointmentStatusType;
  type?: AppointmentType;
  patientId?: number;
  patientReferralId?: number | null;
  attendingPhysicianId?: number | null;
  referringClinicId?: number | null;
  attendingClinicId?: number | null;
  transferredClinic?: string | null;
  diagnosisSummary?: string | null;
  id?: number | null;
};
export type GetPatientAppointmentForEditOutput = {
  patientAppointment?: CreateOrEditPatientAppointmentDto;
  patientPatientCode?: string | null;
  patientReferralReferringHospital?: string | null;
  staffMemberStaffCode?: string | null;
  organizationUnitDisplayName?: string | null;
  organizationUnitDisplayName2?: string | null;
};
export type GetPatientConsultingRooms = {
  rooms?: string[] | null;
};
export type PatientAppointmentPatientLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentPatientLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentPatientLookupTableDto[] | null;
};
export type OutPatientListingType = 'AttendingPhysician' | 'AttendingClinic';
export type PatientAppointmentPatientReferralLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentPatientReferralLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentPatientReferralLookupTableDto[] | null;
};
export type PatientAppointmentStaffMemberLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentStaffMemberLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentStaffMemberLookupTableDto[] | null;
};
export type PatientAppointmentOrganizationUnitLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientAppointmentOrganizationUnitLookupTableDto = {
  totalCount?: number;
  items?: PatientAppointmentOrganizationUnitLookupTableDto[] | null;
};
export type EditAppointmentStatusDto = {
  id?: number;
  status?: AppointmentStatusType;
};
export type PagedResultDtoOfAppointmentListResponse = {
  totalCount?: number;
  items?: AppointmentListResponse[] | null;
};
export type ReassignPatientAppointmentDto = {
  encounterId?: number;
  newAttendingPhysicianId?: number;
};
export type GetPatientCodeTemplateForEditOutput = {
  patientCodeTemplate?: CreateOrEditPatientCodeTemplateDto;
};
export type PatientCodeTemplateDto = {
  prefix?: string | null;
  length?: number;
  suffix?: string | null;
  startingIndex?: number;
  id?: number;
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
export type PatientInsurerDto = {
  insuranceProviderId?: number;
  id?: number;
};
export type GetPatientInsurerForViewDto = {
  patientInsurer?: PatientInsurerDto;
  insuranceProviderName?: string | null;
};
export type PagedResultDtoOfGetPatientInsurerForViewDto = {
  totalCount?: number;
  items?: GetPatientInsurerForViewDto[] | null;
};
export type InsuranceProviderType = 'National' | 'State' | 'Private';
export type InsuranceBenefiaryType = 'Primary' | 'Dependent';
export type CreateOrEditPatientInsurerDto = {
  type?: InsuranceProviderType;
  benefiaryType?: InsuranceBenefiaryType;
  coverage?: string | null;
  startDate?: string;
  endDate?: string;
  insuranceCode?: string | null;
  insuranceProviderId?: number;
  id?: number | null;
};
export type GetPatientInsurerForEditOutput = {
  patientInsurer?: CreateOrEditPatientInsurerDto;
  insuranceProviderName?: string | null;
};
export type PatientInsurerInsuranceProviderLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientInsurerInsuranceProviderLookupTableDto = {
  totalCount?: number;
  items?: PatientInsurerInsuranceProviderLookupTableDto[] | null;
};
export type PatientOccupationDto = {
  occupationId?: number;
  startDate?: string | null;
  endDate?: string | null;
  isCurrent?: boolean;
  location?: string | null;
  notes?: string | null;
  id?: number;
};
export type GetPatientOccupationForViewDto = {
  patientOccupation?: PatientOccupationDto;
  patientOccupationCategoryName?: string | null;
};
export type PagedResultDtoOfGetPatientOccupationForViewDto = {
  totalCount?: number;
  items?: GetPatientOccupationForViewDto[] | null;
};
export type CreateOrEditPatientOccupationDto = {
  name: string;
  patientOccupationCategoryId?: number;
  isCurrent?: boolean;
  id?: number | null;
};
export type GetPatientOccupationForEditOutput = {
  patientOccupation?: CreateOrEditPatientOccupationDto;
  patientOccupationCategoryName?: string | null;
};
export type Severity = 'Mild' | 'Moderate' | 'Severe';
export type EditPatientAllergyCommandRequest = {
  allergyType?: string | null;
  allergySnomedId?: number | null;
  reaction?: string | null;
  reactionSnomedId?: number | null;
  notes?: string | null;
  severity?: Severity;
  interval?: string | null;
  id?: number;
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
export type MenstrualFlowType = 'Regular' | 'Heavy';
export type GetPatientMenstrualFlowResponse = {
  isPeriodHeavierThanUsual?: boolean;
  isBloodClotLargerThanRegular?: boolean;
  sanitaryPadUsedPerDay?: number;
  isHeavyPeriodImpactDayToDayLife?: boolean;
  isFlowFloodThroughSanitaryTowel?: boolean;
  flowType?: MenstrualFlowType;
  patientId?: number;
  id?: number;
};
export type UnitOfTime = 'Day' | 'Week' | 'Month' | 'Year';
export type GetPatientMenstrualFrequencyResponse = {
  lastDayOfPeriod?: string;
  averagePeriodDuration?: number;
  isPeriodPredictable?: boolean;
  averageCycleLength?: number;
  averageCycleLengthUnit?: UnitOfTime;
  requestedTest?: string | null;
  notes?: string | null;
  patientId?: number;
  id?: number;
};
export type TreatmentMedicationDetails = {
  status?: string | null;
  dosageAndUnit?: string | null;
  doseAdministered?: string | null;
  notes?: string | null;
};
export type TreatmentMedication = {
  date?: string;
  medication?: string | null;
  dosageAndUnit?: string | null;
  frequency?: string | null;
  duration?: string | null;
  doseAdministered?: string | null;
  details?: TreatmentMedicationDetails[] | null;
};
export type TreatmentVaccinationDetails = {
  nextDueDate?: string | null;
  doses?: number;
  brand?: string | null;
  batchNo?: string | null;
  dateAdministered?: string | null;
  hasComplication?: boolean;
  notes?: string | null;
};
export type TreatmentVaccination = {
  date?: string;
  vaccination?: string | null;
  dosesAdministered?: string | null;
  dateAdministered?: string | null;
  nextDueDate?: string | null;
  details?: TreatmentVaccinationDetails[] | null;
};
export type TreatmentProcedure = {
  name?: string | null;
  dateTime?: string;
  note?: string | null;
};
export type TreatmentOtherPlanItems = {
  description?: string | null;
  dateTime?: string;
  note?: string | null;
};
export type GetTreatmentPlansQueryResponse = {
  diagnosis?: string | null;
  diagnosisDate?: string;
  treatmentMedication?: TreatmentMedication;
  treatmentVaccination?: TreatmentVaccination;
  treatmentProcedures?: TreatmentProcedure[] | null;
  treatmentOtherPlanItems?: TreatmentOtherPlanItems[] | null;
};
export type TreatmentPlanTimeFilter =
  | 'Today'
  | 'ThisWeek'
  | 'ThisMonth'
  | 'ThisYear';
export type Relationship =
  | 'Husband'
  | 'Wife'
  | 'Father'
  | 'Mother'
  | 'Step-Father'
  | 'Step-Mother'
  | 'Son'
  | 'Daughter'
  | 'Step-Son'
  | 'Step-Daughter'
  | 'Brother'
  | 'Sister'
  | 'GrandParent'
  | 'GrandFather'
  | 'GrandMother'
  | 'GrandSon'
  | 'GrandDaughter'
  | 'Uncle'
  | 'A+'
  | 'Cousin'
  | 'Nephew'
  | 'Niece'
  | 'Father-In-Law'
  | 'Mother-In-Law'
  | 'Brother-In-Law'
  | 'Sister-In-Law'
  | 'Son-In-Law'
  | 'Daughter-In-Law'
  | 'Friend'
  | 'BoyFriend'
  | 'GirlFriend';
export type PatientFamilyMembersDto = {
  relationship?: Relationship;
  isAlive?: boolean;
  ageAtDeath?: number;
  causesOfDeath?: string | null;
  seriousIllnesses?: string | null;
  ageAtDiagnosis?: number;
  id?: number | null;
};
export type PatientFamilyHistoryDto = {
  patientId: number;
  isFamilyHistoryKnown?: boolean;
  totalNumberOfSiblings?: number;
  totalNumberOfMaleSiblings?: number;
  totalNumberOfFemaleSiblings?: number;
  totalNumberOfChildren?: number;
  totalNumberOfMaleChildren?: number;
  totalNumberOfFemaleChildren?: number;
  familyMembers?: PatientFamilyMembersDto[] | null;
  id?: number | null;
};
export type UpdateFamilyMembersDto = {
  id?: number;
  relationship?: Relationship;
  isAlive?: boolean;
  ageAtDeath?: number;
  causesOfDeath?: string | null;
  ageAtDiagnosis?: number;
};
export type SaveMenstruationAndFrequencyCommand = {
  lastDayOfPeriod?: string;
  averagePeriodDuration?: number;
  isPeriodPredictable?: boolean;
  averageCycleLength?: number;
  averageCycleLengthUnit?: UnitOfTime;
  requestedTest?: string | null;
  notes?: string | null;
  patientId: number;
  id?: number | null;
};
export type CreatePatientAllergyCommandRequest = {
  allergyType?: string | null;
  allergySnomedId?: number | null;
  reaction?: string | null;
  reactionSnomedId?: number | null;
  notes?: string | null;
  severity?: Severity;
  patientId: number;
  interval?: string | null;
};
export type PatientGynaecologicProcedureSuggestionResponse = {
  name?: string | null;
  snomedId?: number | null;
  id?: number;
};
export type GetPatientAllergyResponseDto = {
  id?: number;
  creatorUserId?: number;
  creationTime?: string;
  allergyType?: string | null;
  allergySnomedId?: number | null;
  reaction?: string | null;
  reactionSnomedId?: number | null;
  notes?: string | null;
  severity?: Severity;
  patientId: number;
  interval?: string | null;
};
export type SaveMenstrualBloodFlowCommandRequest = {
  isPeriodHeavierThanUsual?: boolean;
  isBloodClotLargerThanRegular?: boolean;
  sanitaryPadUsedPerDay?: number;
  isHeavyPeriodImpactDayToDayLife?: boolean;
  isFlowFloodThroughSanitaryTowel?: boolean;
  flowType?: MenstrualFlowType;
  patientId: number;
  id?: number | null;
};
export type GetPatientGynaecologicalIllnessSuggestionQueryResponse = {
  name?: string | null;
  snomedId?: number | null;
  id?: number;
};
export type ConditionControl = 'Well Controlled' | 'Poorly Controlled';
export type PatientPastMedicalConditionMedicationRequest = {
  medicationType?: string | null;
  medicationDose?: string | null;
  prescriptionFrequency?: number;
  frequencyUnit?: string | null;
  isCompliantWithMedication?: boolean;
  medicationUsageFrequency?: number;
  medicationUsageFrequencyUnit?: string | null;
  id?: number | null;
};
export type PatientPastMedicalConditionCommandRequest = {
  chronicCondition?: string | null;
  snomedId?: number;
  diagnosisPeriod?: number;
  periodUnit?: UnitOfTime;
  control?: ConditionControl;
  isOnMedication?: boolean;
  notes?: string | null;
  numberOfPreviousInfarctions?: number;
  isHistoryOfAngina?: boolean;
  isPreviousHistoryOfAngina?: boolean;
  isPreviousOfAngiogram?: boolean;
  isPreviousOfStenting?: boolean;
  isPreviousOfMultipleInfarction?: boolean;
  isStillIll?: boolean;
  isPrimaryTemplate?: boolean;
  patientId: number;
  medications?: PatientPastMedicalConditionMedicationRequest[] | null;
  id?: number | null;
};
export type PatientPastMedicalConditionMedicationResponse = {
  medicationType?: string | null;
  medicationDose?: string | null;
  prescriptionFrequency?: string | null;
  frequencyUnit?: string | null;
  isCompliantWithMedication?: boolean;
  medicationUsageFrequency?: string | null;
  medicationUsageFrequencyUnit?: string | null;
  id?: number;
};
export type GetPatientPastMedicalCondition = {
  id?: number;
  chronicCondition?: string | null;
  snomedId?: number;
  diagnosisPeriod?: string | null;
  periodUnit?: string | null;
  control?: string | null;
  isOnMedication?: boolean;
  notes?: string | null;
  numberOfPreviousInfarctions?: number;
  isHistoryOfAngina?: boolean;
  isPreviousHistoryOfAngina?: boolean;
  isPreviousOfAngiogram?: boolean;
  isPreviousOfStenting?: boolean;
  isPreviousOfMultipleInfarction?: boolean;
  isStillIll?: boolean;
  patientId?: number;
  isPrimaryTemplate?: boolean;
  lastEnteredByDate?: string;
  lastEnteredBy?: string | null;
  medications?: PatientPastMedicalConditionMedicationResponse[] | null;
};
export type GetPatientPastMedicalConditionQueryResponse = {
  lastEnteredByDate?: string | null;
  lastEnteredBy?: string | null;
  pastMedicalConditions?: GetPatientPastMedicalCondition[] | null;
};
export type Intensity = 0 | 1 | 2;
export type CreatePhysicalExerciseCommandRequest = {
  frequencyPerWeek?: number;
  durationPerMinute?: number;
  intensity?: Intensity;
  patientId: number;
};
export type GetPatientPhysicalExerciseQueryResponse = {
  frequencyPerWeek?: number;
  durationPerMinute?: number;
  intensity?: Intensity;
  patientId?: number;
  lastModifiedDate?: string | null;
  lastModifiedBy?: string | null;
};
export type CreatePatientTravelHistoryCommand = {
  countryId: number;
  city?: string | null;
  date: string;
  duration: number;
  patientId: number;
  interval?: UnitOfTime;
};
export type PatientTravelHistoryResponse = {
  country?: string | null;
  countryId?: number;
  city?: string | null;
  duration?: string | null;
  date?: string;
  createdBy?: string | null;
  dateCreated?: string;
  id?: number;
};
export type GetPatientTravelHistoryQueryResponse = {
  lastCreatedBy?: string | null;
  lastDateCreated?: string | null;
  patientTravelHistory?: PatientTravelHistoryResponse[] | null;
  id?: number;
};
export type GetChronicDiseaseSuggestionQueryResponse = {
  suggestion?: string | null;
  synonym?: string | null;
  snomedId?: number;
  synonymSnomedId?: number | null;
  isPrimaryFormat?: boolean;
};
export type BloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'O+'
  | 'O-'
  | 'AB+'
  | 'AB-';
export type BloodGenotype = 'AA' | 'AS' | 'AC' | 'SS' | 'SC';
export type BloodGroupAndGenotypeSource =
  | 'ClinicalInvestigation'
  | 'SelfReport';
export type UpdatePatientGenotypeAndBloodGroupCommandRequest = {
  bloodGroup: BloodGroup;
  bloodGenotype: BloodGenotype;
  bloodGroupSource: BloodGroupAndGenotypeSource;
  genotypeSource: BloodGroupAndGenotypeSource;
  patientId: number;
};
export type GetPatientMajorInjuryResponse = {
  id?: number;
  diagnosis?: string | null;
  periodOfInjury?: string | null;
  isOngoing?: boolean;
  isComplicationPresent?: boolean;
  notes?: string | null;
};
export type CreatePatientMajorInjuryRequest = {
  diagnosis?: string | null;
  periodOfInjury?: number;
  periodOfInjuryUnit?: UnitOfTime;
  isOngoing?: boolean;
  notes?: string | null;
  isComplicationPresent?: boolean;
  patientId: number;
};
export type PostmenopausalSymptomSuggestionResponse = {
  name?: string | null;
  snomedId?: number | null;
  id?: number;
};
export type GetAllergyTypeSuggestionQueryResponse = {
  id?: number;
  name?: string | null;
  snomedId?: number | null;
};
export type GetContraceptionSuggestionQueryResponse = {
  name?: string | null;
  snomedId?: number | null;
  id?: number;
};
export type GetAllergyExperiencedSuggestionQueryResponse = {
  id?: number;
  name?: string | null;
  snomedId?: number | null;
};
export type GetImplantSuggestionResponse = {
  name?: string | null;
  snomedId?: number | null;
  id?: number;
};
export type CreatePatientImplantCommandRequestDto = {
  patientId: number;
  name?: string | null;
  snomedId?: number | null;
  isIntact?: boolean;
  hasComplications?: boolean;
  note?: string | null;
  dateInserted?: string;
  dateRemoved?: string;
  id?: number | null;
};
export type ReviewOfSystemsSuggestionResponseDto = {
  name?: string | null;
  snomedId?: number;
  id?: number;
};
export type GetDiagnosisSuggestionResponseDto = {
  name?: string | null;
  snomedId?: number | null;
  id?: number;
};
export type GetProcedureSuggestionResponseDto = {
  name?: string | null;
  snomedId?: number;
  id?: number;
};
export type GetPatientImplantResponseDto = {
  patientId?: number;
  name?: string | null;
  snomedId?: number | null;
  isIntact?: boolean;
  hasComplications?: boolean;
  note?: string | null;
  dateInserted?: string;
  dateRemoved?: string;
  creatorUserId?: number;
  id?: number;
};
export type CreateBloodTransfusionHistoryRequestDto = {
  patientId: number;
  periodSinceLastTransfusion?: number;
  interval?: UnitOfTime;
  numberOfPints: number;
  noComplications?: boolean;
  note?: string | null;
};
export type CreateSurgicalHistoryRequestDto = {
  patientId: number;
  diagnosis?: string | null;
  diagnosisSnomedId?: number | null;
  procedure?: string | null;
  procedureSnomedId?: number | null;
  interval?: UnitOfTime;
  periodSinceSurgery?: number;
  noComplicationsPresent?: boolean;
  note?: string | null;
};
export type GetSurgicalHistoryResponseDto = {
  patientId?: number;
  diagnosis?: string | null;
  diagnosisSnomedId?: number | null;
  procedure?: string | null;
  procedureSnomedId?: number | null;
  interval?: UnitOfTime;
  periodSinceSurgery?: number;
  noComplicationsPresent?: boolean;
  note?: string | null;
  id?: number;
};
export type GetPatientBloodTransfusionHistoryResponseDto = {
  patientId?: number;
  periodSinceLastTransfusion?: number;
  interval?: UnitOfTime;
  numberOfPints?: number;
  noComplications?: boolean;
  note?: string | null;
  id?: number;
};
export type CreateAlcoholHistoryRequestDto = {
  patientId: number;
  frequency?: number;
  interval?: UnitOfTime;
  typeOfAlcohol?: string | null;
  maximumAmountOfUnits?: number;
  maximumUnitTaken?: string | null;
  note?: string | null;
  detailsOfAlcoholIntakeNotKnown?: boolean;
  doesNotTakeAlcohol?: boolean;
  id?: number | null;
};
export type CreateRecreationalDrugsHistoryRequestDto = {
  patientId: number;
  patientDoesNotTakeRecreationalDrugs?: boolean;
  drugUsed?: string | null;
  route?: string | null;
  stillUsingDrugs?: boolean;
  from?: string;
  to?: string;
  note?: string | null;
  id?: number | null;
};
export type CreateCigaretteHistoryRequestDto = {
  patientId: number;
  patientDoesNotConsumeTobacco?: boolean;
  formOfTobacco?: string | null;
  route?: string | null;
  numberOfDaysPerWeek?: number;
  numberOfPacksOrUnitsPerDay?: number;
  stillTakesSubstance?: boolean;
  note?: string | null;
  beginningFrequency?: number;
  beginningInterval?: UnitOfTime;
  endFrequency?: number;
  endInterval?: UnitOfTime;
  id?: number | null;
};
export type GetAlcoholHistoryResponseDto = {
  patientId?: number;
  frequency?: number;
  interval?: UnitOfTime;
  typeOfAlcohol?: string | null;
  maximumUnitTaken?: string | null;
  maximumAmountOfUnits?: string | null;
  note?: string | null;
  detailsOfAlcoholIntakeNotKnown?: boolean;
  doesNotTakeAlcohol?: boolean;
  id?: number;
};
export type GetRecreationalDrugHistoryResponseDto = {
  patientId?: number;
  patientDoesNotTakeRecreationalDrugs?: boolean;
  drugUsed?: string | null;
  route?: string | null;
  stillUsingDrugs?: boolean;
  from?: string;
  to?: string;
  note?: string | null;
  id?: number;
};
export type GetCigaretteHistoryResponseDto = {
  patientId?: number;
  patientDoesNotConsumeTobacco?: boolean;
  formOfTobacco?: string | null;
  route?: string | null;
  numberOfDaysPerWeek?: number;
  numberOfPacksOrUnitsPerDay?: number;
  stillTakesSubstance?: boolean;
  note?: string | null;
  beginningFrequency?: number;
  beginningInterval?: UnitOfTime;
  endFrequency?: number;
  endInterval?: UnitOfTime;
  id?: number;
};
export type GetAlcoholTypesResponseDto = {
  type?: string | null;
  alcoholUnit?: number;
  id?: number;
};
export type GetTobaccoSuggestionResponseDto = {
  modeOfConsumption?: string | null;
  snomedId?: number;
  id?: number;
};
export type GetRecreationalDrugsSuggesionResponseDto = {
  name?: string | null;
  snomedId?: number;
  id?: number;
};
export type CreateDrugHistoryRequestDto = {
  patientOnMedication?: boolean;
  patientId: number;
  medicationName?: string | null;
  route?: string | null;
  dose?: number;
  doseUnit?: string | null;
  prescriptionFrequency?: number;
  prescriptionInterval?: string | null;
  compliantWithMedication?: boolean;
  usageFrequency?: number;
  usageInterval?: string | null;
  isMedicationStillBeingTaken?: boolean;
  whenMedicationStopped?: number;
  stopInterval?: string | null;
  note?: string | null;
  id?: number | null;
};
export type GetDrugHistoryResponseDto = {
  patientOnMedication?: boolean;
  patientId?: number;
  medicationName?: string | null;
  route?: string | null;
  dose?: number;
  doseUnit?: string | null;
  prescriptionFrequency?: number;
  prescriptionInterval?: string | null;
  compliantWithMedication?: boolean;
  usageFrequency?: number;
  usageInterval?: string | null;
  isMedicationStillBeingTaken?: boolean;
  whenMedicationStopped?: number;
  stopInterval?: string | null;
  note?: string | null;
  id?: number;
};
export type GetPatientBloodGroupAndGenotypeResponseDto = {
  patientId: number;
  bloodGroup?: string | null;
  genotype?: string | null;
  bloodGroupSource?: string | null;
  genotypeSource?: string | null;
};
export type CreateVaccinationHistoryDto = {
  patientId?: number;
  vaccineId?: number;
  hasComplication?: boolean;
  lastVaccineDuration?: string | null;
  note?: string | null;
  id?: number | null;
  numberOfDoses?: number;
};
export type VaccinationSuggestionResponseDto = {
  name?: string | null;
  snomedId?: number;
  id?: number;
};
export type SymptomsCategory =
  | 'Systemic'
  | 'Cardiovascular'
  | 'Respiratory'
  | 'Gastrointestinal'
  | 'Genitourinary'
  | 'Musculoskeletal'
  | 'Dermatological'
  | 'Neurological';
export type CreateReviewOfSystemsRequestDto = {
  name?: string | null;
  snomedId?: number;
  category?: SymptomsCategory;
  id?: number | null;
};
export type ReviewOfSystemsInputDto = {
  patientId?: number;
  reviewOfSystemsInputs?: CreateReviewOfSystemsRequestDto[] | null;
};
export type GetPatientReviewOfSystemsDataResponseDto = {
  name?: string | null;
  snomedId?: number;
  category?: string | null;
  patientId?: number;
  id?: number;
};
export type CreateOccupationalHistoryDto = {
  workLocation?: string | null;
  from?: string;
  to?: string;
  occupation?: string | null;
  note?: string | null;
  patientId: number;
  isCurrent?: boolean;
  id?: number | null;
};
export type ReviewDetailsHistoryStateDto = {
  patientId?: number;
  noFamilyHistory?: boolean;
  noPhysicalExerciseHistory?: boolean;
  noChronicIllness?: boolean;
  noMajorInjuries?: boolean;
  noTravelHistory?: boolean;
  noSurgicalHistory?: boolean;
  noBloodTransfusionHistory?: boolean;
  noVaccinationHistory?: boolean;
  noUseOfContraceptives?: boolean;
  noGynaecologicalIllness?: boolean;
  noGynaecologicalSurgery?: boolean;
  noHistoryOfCervicalScreening?: boolean;
  neverBeenPregnant?: boolean;
  noDeliveryDetails?: boolean;
  patientDoesNotTakeAlcohol?: boolean;
  patientDoesNotSmoke?: boolean;
  noUseOfRecreationalDrugs?: boolean;
  notCurrentlyOnMedication?: boolean;
  noAllergies?: boolean;
  noImplant?: boolean;
  id?: number | null;
  lastEditorName?: string | null;
};
export type PatientReferralDocumentDto = {
  id?: number;
};
export type GetPatientReferralDocumentForViewDto = {
  patientReferralDocument?: PatientReferralDocumentDto;
};
export type PagedResultDtoOfGetPatientReferralDocumentForViewDto = {
  totalCount?: number;
  items?: GetPatientReferralDocumentForViewDto[] | null;
};
export type CreateOrEditPatientReferralDocumentDto = {
  referringHospital?: string | null;
  diagnosisSummary?: string | null;
  referralDocument?: string | null;
  referralDocumentToken?: string | null;
  id?: number | null;
};
export type GetPatientReferralDocumentForEditOutput = {
  patientReferralDocument?: CreateOrEditPatientReferralDocumentDto;
  referralDocumentFileName?: string | null;
};
export type PatientRelationDto = {
  relationship?: Relationship;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  title?: TitleType;
  address?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  isGuardian?: boolean;
  patientId?: number;
  id?: number;
};
export type GetPatientRelationForViewDto = {
  patientRelation?: PatientRelationDto;
  patientPatientCode?: string | null;
};
export type PagedResultDtoOfGetPatientRelationForViewDto = {
  totalCount?: number;
  items?: GetPatientRelationForViewDto[] | null;
};
export type NextOfKinDto = {
  fullName?: string | null;
  relationship?: Relationship;
  phoneNumber?: string | null;
  id?: number;
};
export type PatientRelationPatientLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientRelationPatientLookupTableDto = {
  totalCount?: number;
  items?: PatientRelationPatientLookupTableDto[] | null;
};
export type Religion =
  | 'Christianity'
  | 'Islam'
  | 'African Traditional Religion'
  | 'Agnosticism'
  | 'Atheism'
  | 'Babism'
  | 'Bahai Faith'
  | 'Buddhism'
  | 'Caodaism'
  | 'Cheondogyo'
  | 'Confucianism'
  | 'Daejongism'
  | 'Druze'
  | 'Hinduism'
  | 'Jainism'
  | 'Judaism'
  | 'Mandaeism'
  | 'Rastafarianism'
  | 'Ryukuan Religion'
  | 'Shamanism'
  | 'Shintoism'
  | 'Shugendo'
  | 'Sikhism'
  | 'Taoism'
  | 'Yarsanism'
  | 'Yazdanism'
  | 'Zoroastrianism';
export type MaritalStatus =
  | 'Single'
  | 'Married'
  | 'Divorced'
  | 'Widowed'
  | 'Separated';
export type PatientDto = {
  patientCode?: string | null;
  address?: string | null;
  district?: string | null;
  ethnicity?: string | null;
  religion?: Religion;
  maritalStatus?: MaritalStatus;
  bloodGroup?: BloodGroup;
  bloodGenotype?: BloodGenotype;
  countryId?: number | null;
  patientOccupationId?: number | null;
  patientOccupationCategoryId?: number | null;
  walletBalance?: number;
  id?: number;
};
export type GetPatientForViewDto = {
  patient?: PatientDto;
  countryName?: string | null;
  patientOccupationName?: string | null;
  patientOccupationCategoryName?: string | null;
};
export type PagedResultDtoOfGetPatientForViewDto = {
  totalCount?: number;
  items?: GetPatientForViewDto[] | null;
};
export type CreateOrEditPatientRelationDiagnosisDto = {
  sctId?: string | null;
  name: string;
  isCauseOfDeath?: boolean;
  id?: number | null;
};
export type CreateOrEditPatientRelationDto = {
  relationship: Relationship;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  title?: TitleType;
  address?: string | null;
  phoneNumber: string;
  email?: string | null;
  isGuardian: boolean;
  identificationCode?: string | null;
  identificationType?: IdentificationType;
  isAlive?: boolean;
  ageAtDeath?: number;
  ageAtDiagnosis?: number;
  diagnoses?: CreateOrEditPatientRelationDiagnosisDto[] | null;
  id?: number | null;
};
export type CreateOrEditPatientDto = {
  genderType: GenderType;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  title?: TitleType;
  middleName?: string | null;
  emailAddress?: string | null;
  address?: string | null;
  isNewToHospital?: boolean;
  stateOfOriginId?: number | null;
  countryId?: number | null;
  districtId?: number | null;
  userId?: number | null;
  patientCode: string;
  ethnicity?: string | null;
  religion?: Religion;
  maritalStatus?: MaritalStatus;
  bloodGroup?: BloodGroup;
  bloodGenotype?: BloodGenotype;
  nuclearFamilySize?: number;
  numberOfSiblings?: number;
  positionInFamily?: string | null;
  numberOfChildren?: number;
  numberOfSpouses?: number;
  noOfMaleChildren?: number;
  noOfFemaleChildren?: number;
  noOfMaleSiblings?: number;
  profilePictureId?: string | null;
  profilePictureUrl?: string | null;
  noOfFemaleSiblings?: number;
  identificationCode?: string | null;
  referralDocument?: string | null;
  identificationType?: IdentificationType;
  patientOccupations?: PatientOccupationDto[] | null;
  relations?: CreateOrEditPatientRelationDto[] | null;
  id?: number | null;
};
export type CheckPatientExistOutput = {
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  emailAddress?: string | null;
  patientCode?: string | null;
  dateOfBirth?: string;
  id?: number;
};
export type CheckPatientExistInput = {
  genderType: GenderType;
  phoneNumber: string;
};
export type PatientPatientOccupationLookupTableDto = {
  id?: number;
  displayName?: string | null;
};
export type PagedResultDtoOfPatientPatientOccupationLookupTableDto = {
  totalCount?: number;
  items?: PatientPatientOccupationLookupTableDto[] | null;
};
export type PatientVitalsDto = {
  vitalSign?: string | null;
  reading?: string | null;
  measurement?: string | null;
};
export type GetPatientLandingListOuptDto = {
  id?: number;
  encounterId?: number;
  name?: string | null;
  dateOfBirth?: string;
  patientCode?: string | null;
  patientId?: number;
  clinic?: string | null;
  gender?: GenderType;
  status?: AppointmentStatusType;
  appointmentType?: AppointmentType;
  startTime?: string;
  attendingPhysicianStaffCode?: string | null;
  attendingPhysician?: string | null;
  patientVitals?: PatientVitalsDto[] | null;
  diagnosis?: string[] | null;
  paymentStatus?: string | null;
};
export type PagedResultDtoOfGetPatientLandingListOuptDto = {
  totalCount?: number;
  items?: GetPatientLandingListOuptDto[] | null;
};
export type EncounterStatusType =
  | 'In progress'
  | 'Transfer in pending'
  | 'Transfer out pending'
  | 'Transferred'
  | 'Discharge pending'
  | 'Discharged'
  | 'Admission'
  | 'Completed'
  | 'Deceased';
export type AttendingPhysician = {
  name?: string | null;
  unit?: string | null;
};
export type GetInpatientLandingListResponse = {
  patientId?: number;
  fullName?: string | null;
  encounterId?: number;
  gender?: GenderType;
  birthDate?: string;
  diagnosis?: string[] | null;
  status?: EncounterStatusType;
  patientVitals?: PatientVitalsDto[] | null;
  bedNumber?: string | null;
  imageUrl?: string | null;
  attendingPhysician?: AttendingPhysician;
  lastSeenBy?: string | null;
  lastSeenAt?: string | null;
};
export type PagedResultDtoOfGetInpatientLandingListResponse = {
  totalCount?: number;
  items?: GetInpatientLandingListResponse[] | null;
};
export type AandEPatientVitalsDto = {
  vitalSign?: string | null;
  reading?: string | null;
  measurement?: string | null;
};
export type AandEAttendingPhysician = {
  name?: string | null;
  unit?: string | null;
};
export type GetAccidentAndEmergencyLandingListResponse = {
  patientId?: number;
  fullName?: string | null;
  encounterId?: number;
  gender?: GenderType;
  birthDate?: string;
  diagnosis?: string[] | null;
  status?: EncounterStatusType;
  patientVitals?: AandEPatientVitalsDto[] | null;
  bedNumber?: string | null;
  imageUrl?: string | null;
  attendingPhysician?: AandEAttendingPhysician;
  lastSeenBy?: string | null;
  lastSeenAt?: string | null;
};
export type PagedResultDtoOfGetAccidentAndEmergencyLandingListResponse = {
  totalCount?: number;
  items?: GetAccidentAndEmergencyLandingListResponse[] | null;
};
export type GetPatientDetailsOutDto = {
  id?: number;
  fullName?: string | null;
  dateOfBirth?: string;
  gender?: GenderType;
  patientCode?: string | null;
  lengthOfStayDays?: number;
  bloodGroup?: BloodGroup;
  bloodGenotype?: BloodGenotype;
  lastSeenByDoctor?: string | null;
  lastSeenByDoctorName?: string | null;
  lastSeenByNurse?: string | null;
  lastSeenByNurseName?: string | null;
  dateAdmitted?: string | null;
  pictureUrl?: string | null;
  encounterStatus?: EncounterStatusType;
  daysPostOp?: number | null;
};
export type SearchPatientOutput = {
  fullname?: string | null;
  genderType?: GenderType;
  patientCode?: string | null;
  phoneNumber?: string | null;
  emailAddress?: string | null;
  dateOfBirth?: string | null;
  id?: number;
  uuid?: string;
  pictureUrl?: string | null;
};
export type PatientDetailsQueryResponse = {
  fullName?: string | null;
  dateOfBirth?: string;
  patientCode?: string | null;
  gender?: GenderType;
  maritalStatus?: MaritalStatus;
  emailAddress?: string | null;
  address?: string | null;
  phoneNumber?: string | null;
  nationality?: string | null;
  noOfMaleChildren?: number;
  noOfFemaleChildren?: number;
  noOfMaleSiblings?: number;
  noOfFemaleSiblings?: number;
  totalNoOfSiblings?: number;
  totalNoOfChildren?: number;
  pictureUrl?: string | null;
  id?: number;
};
export type GetPatientWardRoundAndClinicNotesResponse = {
  patientId?: number;
  clinic?: string | null;
  dateTime?: string;
  notes?: string | null;
  ward?: string | null;
};
export type PagedResultDtoOfGetPatientWardRoundAndClinicNotesResponse = {
  totalCount?: number;
  items?: GetPatientWardRoundAndClinicNotesResponse[] | null;
};
export type PaymentStatus = 'Unpaid' | 'Paid' | 'PartiallyPaid' | 'Proforma';
export type AllPatientInClinicResponse = {
  pictureUrl?: string | null;
  patientId?: number;
  fullName?: string | null;
  appointmentStatus?: AppointmentStatusType;
  paymentStatus?: PaymentStatus;
  assignedDoctor?: string | null;
  clinic?: string | null;
  appointmentId?: number;
  encounterId?: number;
};
export type ViewAllPatientInClinicSortFilter =
  | 'Patient'
  | 'AppointmentStatus'
  | 'PaymentStatus';
export type MedicationsListDto = {
  productName?: string | null;
  doseUnit?: string | null;
  frequency?: string | null;
  duration?: string | null;
  direction?: string | null;
};
export type GetPatientsMedicationsResponse = {
  patientId?: number;
  pictureUrl?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  gender?: string | null;
  age?: string | null;
  patientCode?: string | null;
  patientMedications?: MedicationsListDto[] | null;
};
export type PatientStabilityRequestDto = {
  patientId?: number;
  encounterId?: number;
  status?: PatientStabilityStatus;
};
export type PatientStabilityResponseDto = {
  id?: number;
  patientId?: number;
  creatorUserId?: number;
  status?: PatientStabilityStatus;
  creationTime?: string;
};
export type RefundRequestListQueryResponse = {
  patientName?: string | null;
  ward?: string | null;
  patientCode?: string | null;
  dob?: string;
  gender?: string | null;
  totalReceiptAmount?: MoneyDto;
  totalRefundAmount?: MoneyDto;
  isApprove?: boolean;
  isReject?: boolean;
  isPendingApproval?: boolean;
  invoiceSource?: InvoiceSource;
  creationDate?: string;
  id?: number;
};
export type PagedResultDtoOfRefundRequestListQueryResponse = {
  totalCount?: number;
  items?: RefundRequestListQueryResponse[] | null;
};
export type GetInvoicesForRefundQueryResponse = {
  id?: number;
  invoiceNo?: string | null;
};
export type WalletRefundFilter =
  | 'Today'
  | 'Yesterday'
  | 'ThisWeek'
  | 'LastWeek'
  | 'ThisMonth'
  | 'LastMonth'
  | 'ThisYear'
  | 'LastYear';
export type InvoiceWalletRefundRequest = {
  patientId: number;
  invoiceItemsIds?: number[] | null;
};
export type UnpaidInvoiceItemDto = {
  name?: string | null;
  isGlobal?: boolean;
  discountPercentage?: number;
  subTotal?: MoneyDto;
  id?: number;
};
export type UnpaidInvoiceDto = {
  invoiceNo?: string | null;
  totalAmount?: MoneyDto;
  issuedOn?: string;
  invoiceItems?: UnpaidInvoiceItemDto[] | null;
  id?: number;
};
export type WalletFundingResponseDto = {
  totalAmount?: MoneyDto;
  amountToBeFunded?: MoneyDto;
  invoices?: UnpaidInvoiceDto[] | null;
};
export type WalletFundingItem = {
  invoiceId: number;
  subTotal: MoneyDto;
  id?: number;
};
export type WalletFundingRequestDto = {
  patientId: number;
  totalAmount?: MoneyDto;
  amountToBeFunded?: MoneyDto;
  invoiceItems?: WalletFundingItem[] | null;
};
export type RefundInvoiceItemsQueryResponse = {
  id?: number;
  itemName?: string | null;
  subTotal?: MoneyDto;
};
export type RefundInvoiceQueryResponse = {
  id?: number;
  invoiceNo?: string | null;
  paymentDate?: string;
  percentageToBeDeducted?: number;
  invoiceItems?: RefundInvoiceItemsQueryResponse[] | null;
};
export type ProcessRefundRequestCommand = {
  patientId: number;
  totalAmountToRefund: MoneyDto;
  isApproved: boolean;
};
export type PatientPhysicalExamTypeNoteRequestDto = {
  type?: string | null;
  note?: string | null;
};
export type PatientPhysicalExamSuggestionQualifierDto = {
  qualifierId?: number | null;
  name?: string | null;
};
export type PatientPhysicalExamSuggestionAnswerDto = {
  snowmedId?: string | null;
  description?: string | null;
  isAbsent?: boolean;
  sites?: PatientPhysicalExamSuggestionQualifierDto[] | null;
  planes?: PatientPhysicalExamSuggestionQualifierDto[] | null;
  qualifiers?: PatientPhysicalExamSuggestionQualifierDto[] | null;
};
export type PatientPhysicalExamSuggestionQuestionDto = {
  headerName?: string | null;
  patientPhysicalExamSuggestionAnswers?:
    | PatientPhysicalExamSuggestionAnswerDto[]
    | null;
};
export type CreatePatientPhysicalExaminationDto = {
  physicalExaminationEntryType: string;
  physicalExaminationTypeId: number;
  patientId: number;
  typeNotes?: PatientPhysicalExamTypeNoteRequestDto[] | null;
  suggestions?: PatientPhysicalExamSuggestionQuestionDto[] | null;
  otherNote?: string | null;
  encounterId?: number;
  procedureId?: number | null;
  procedureEntryType?: ProcedureEntryType;
};
export type PhysicalExaminationEntryType = 0 | 1;
export type GetPhysicalExaminationTypeResponseDto = {
  id?: number;
  name?: string | null;
  type?: string | null;
};
export type PatientPhysicalExaminationResponseDto = {
  id?: number;
  physicalExaminationEntryType?: PhysicalExaminationEntryType;
  physicalExaminationEntryTypeName?: string | null;
  physicalExaminationTypeId?: number;
  physicalExaminationType?: GetPhysicalExaminationTypeResponseDto;
  patientId?: number;
  otherNote?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
  typeNotes?: PatientPhysicalExamTypeNoteRequestDto[] | null;
  suggestions?: PatientPhysicalExamSuggestionQuestionDto[] | null;
  procedureEntryType?: string | null;
  imageUploaded?: boolean;
  encounterId?: number;
  procedureId?: number | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type PatientPhysicalExaminationImageFileResponseDto = {
  id?: number;
  patientPhysicalExaminationId?: number;
  fileId?: string | null;
  fileName?: string | null;
  fileUrl?: string | null;
  creationTime?: string;
};
export type PlanItemsSummaryForReturnDto = {
  id?: number;
  description?: string | null;
  procedureId?: number | null;
  procedureEntryType?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type SelectedProcedureDto = {
  snowmedId?: number | null;
  procedureName: string;
};
export type SpecializedProcedureResponseDto = {
  id?: number;
  procedureId?: number;
  snowmedId?: number | null;
  procedureName?: string | null;
  requireAnaesthetist?: boolean;
  isProcedureInSameSession?: boolean;
  anaesthetistUserId?: number | null;
  roomId?: number | null;
  roomName?: string | null;
  duration?: string | null;
  proposedDate?: string | null;
  time?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
};
export type ScheduledProcedureResponseDto = {
  id?: number;
  procedureId?: number;
  snowmedId?: number | null;
  procedureName?: string | null;
  requireAnaesthetist?: boolean;
  isProcedureInSameSession?: boolean;
  anaesthetistUserId?: number | null;
  roomId?: number | null;
  roomName?: string | null;
  duration?: string | null;
  proposedDate?: string | null;
  time?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
};
export type ProcedureStatus = 0 | 1;
export type PatientProcedureResponseDto = {
  id?: number;
  snowmedId?: number | null;
  patientId?: number;
  selectedProcedures?: SelectedProcedureDto[] | null;
  note?: string | null;
  procedureType?: string | null;
  specializedProcedures?: SpecializedProcedureResponseDto[] | null;
  scheduledProcedures?: ScheduledProcedureResponseDto[] | null;
  creationTime?: string;
  procedureEntryType?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  procedureStatus?: ProcedureStatus;
};
export type AddtionalProcedure = {
  name?: string | null;
  requested?: boolean;
};
export type CreateStatementOfPatientOrNextOfKinOrGuardianDto = {
  procedureId?: number;
  patientId?: number;
  additionalProcedures?: AddtionalProcedure[] | null;
  usePatientAuthorizedNextOfKinOrGuardian?: boolean;
  signatureOfNextOfKinOrGuardian?: string | null;
  nextOfKinOrGuardianGovIssuedId?: IdentificationType;
  nextOfKinOrGuardianGovIssuedIdNumber?: string | null;
  signatureOfWitness?: string | null;
  signatureOfWitnessGovIssuedId?: IdentificationType;
  signatureOfWitnessGovIssuedIdNumber?: string | null;
  secondaryLanguageOfInterpretation?: string | null;
  interpretedByStaffUserId?: number | null;
  secondarySignatureOfNextOfKinOrGuardian?: string | null;
  secondaryNextOfKinOrGuardianGovIssuedId?: IdentificationType;
  secondaryNextOfKinOrGuardianGovIssuedIdNumber?: string | null;
  secondarySignatureOfWitness?: string | null;
  secondarySignatureOfWitnessGovIssuedId?: IdentificationType;
  secondarySignatureOfWitnessGovIssuedIdNumber?: string | null;
};
export type SimplePatientInfoResponseDto = {
  id?: number;
  genderType?: GenderType;
  firstName?: string | null;
  lastName?: string | null;
  title?: TitleType;
  middleName?: string | null;
  emailAddress?: string | null;
};
export type GetStaffMembersSimpleResponseDto = {
  id?: number;
  staffMemberId?: number | null;
  title?: TitleType;
  name?: string | null;
  middleName?: string | null;
  surname?: string | null;
  staffCode?: string | null;
};
export type StatementOfPatientOrNextOfKinOrGuardianResponseDto = {
  id?: number;
  patient?: SimplePatientInfoResponseDto;
  interpretedByStaffUser?: GetStaffMembersSimpleResponseDto;
  facilityName?: string | null;
  facilityLevel?: string | null;
  creationTime?: string;
  procedureId?: number;
  patientId?: number;
  additionalProcedures?: AddtionalProcedure[] | null;
  usePatientAuthorizedNextOfKinOrGuardian?: boolean;
  signatureOfNextOfKinOrGuardian?: string | null;
  nextOfKinOrGuardianGovIssuedId?: IdentificationType;
  nextOfKinOrGuardianGovIssuedIdNumber?: string | null;
  signatureOfWitness?: string | null;
  signatureOfWitnessGovIssuedId?: IdentificationType;
  signatureOfWitnessGovIssuedIdNumber?: string | null;
  secondaryLanguageOfInterpretation?: string | null;
  interpretedByStaffUserId?: number | null;
  secondarySignatureOfNextOfKinOrGuardian?: string | null;
  secondaryNextOfKinOrGuardianGovIssuedId?: IdentificationType;
  secondaryNextOfKinOrGuardianGovIssuedIdNumber?: string | null;
  secondarySignatureOfWitness?: string | null;
  secondarySignatureOfWitnessGovIssuedId?: IdentificationType;
  secondarySignatureOfWitnessGovIssuedIdNumber?: string | null;
};
export type SelectedProcedureListDto = {
  snowmedId?: number;
  procedureName?: string | null;
};
export type SelectedProceduresDto = {
  procedureId?: number;
  selectedProcedure?: SelectedProcedureListDto[] | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  status?: ProcedureStatus;
};
export type GetPatientInterventionsResponseDto = {
  patientId?: number;
  pictureUrl?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  gender?: string | null;
  age?: string | null;
  patientCode?: string | null;
  interventions?: SelectedProceduresDto[] | null;
  isDeleted?: boolean;
};
export type PresentingComplaintDto = {
  id?: number;
  note?: string | null;
  createdAt?: string;
};
export type UploadedImageDto = {
  id?: number;
  fileName?: string | null;
  fileUrl?: string | null;
};
export type PatientTypeNoteDto = {
  type?: string | null;
  note?: string | null;
  imageFiles?: UploadedImageDto[] | null;
  imageUploaded?: boolean;
};
export type PatientPhysicalExaminationDto = {
  header?: string | null;
  answer?: string | null;
  imageFiles?: UploadedImageDto[] | null;
  createdAt?: string;
  imageUploaded?: boolean;
};
export type GetSimpleVitalSignsResponse = {
  id?: number;
  sign?: string | null;
  leftRight?: boolean;
  decimalPlaces?: number;
  isPreset?: boolean;
  maxLength?: number;
};
export type MeasurementSiteDto = {
  id?: number;
  site?: string | null;
  default?: boolean;
};
export type MeasurementRangeDto = {
  id?: number;
  lower?: number | null;
  upper?: number | null;
  unit?: string | null;
  decimalPlaces?: number | null;
  maxLength?: number | null;
};
export type PatientVitalResponseDto = {
  id?: number;
  patientId?: number;
  painScale?: number;
  vitalSignId?: number;
  vitalSign?: GetSimpleVitalSignsResponse;
  measurementSiteId?: number | null;
  measurementSite?: MeasurementSiteDto;
  measurementRangeId?: number | null;
  measurementRange?: MeasurementRangeDto;
  vitalReading?: number;
  procedureId?: number | null;
  creationTime?: string;
  creatorUser?: GetStaffMembersSimpleResponseDto;
  lastModificationTime?: string | null;
  lastModifierUser?: GetStaffMembersSimpleResponseDto;
  patientVitalType?: string | null;
  overThreshold?: boolean;
  position?: string | null;
  procedureEntryType?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type PatientVitalsSummaryResponseDto = {
  date?: string;
  patientVitals?: PatientVitalResponseDto[] | null;
  time?: string;
  isDeleted?: boolean;
};
export type InvestigationResultDto = {
  id?: number;
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
export type VaccineScheduleDto = {
  id?: number;
  dosage?: string | null;
  doses?: number;
  routeOfAdministration?: string | null;
  ageMin?: number | null;
  ageMinUnit?: UnitOfTime;
  ageMax?: number | null;
  ageMaxUnit?: UnitOfTime;
  notes?: string | null;
};
export type GetVaccineResponse = {
  id?: number;
  name?: string | null;
  fullName?: string | null;
  schedules?: VaccineScheduleDto[] | null;
};
export type VaccinationResponseDto = {
  patientId?: number;
  vaccineId?: number;
  vaccine?: GetVaccineResponse;
  vaccineScheduleId?: number;
  vaccineSchedule?: VaccineScheduleDto;
  isAdministered?: boolean;
  dueDate?: string | null;
  dateAdministered?: string | null;
  hasComplication?: boolean;
  vaccineBrand?: string | null;
  vaccineBatchNo?: string | null;
  note?: string | null;
  procedureId?: number | null;
  procedureEntryType?: string | null;
  creationTime?: string;
  isDeleted?: boolean;
  deletedUser?: string | null;
  id?: number;
};
export type InputType = 0 | 1;
export type DiagnosisDto = {
  tenantId?: number;
  patientId?: number;
  sctid?: number;
  description?: string | null;
  notes?: string | null;
  status?: number | null;
  encounterId?: number | null;
  createdAt?: string;
  creatorUserId?: number;
};
export type ReferralReturnDto = {
  originatingUnit?: string | null;
  originatingConsultant?: string | null;
  patientName?: string | null;
  patientAge?: string | null;
  patientGender?: string | null;
  hospitalNumber?: string | null;
  issuingDoctorName?: string | null;
  patientID?: string | null;
  summaryNotes?: string[] | null;
  physicalExaminationNotes?: string | null;
  vitalSignNotes?: PatientVitalsSummaryResponseDto[] | null;
  diagnosis?: DiagnosisDto[] | null;
  receivingHospital?: string | null;
  receivingUnit?: string | null;
  receivingConsultant?: string | null;
};
export type ConsultReturnDto = {
  originatingUnit?: string | null;
  originatingConsultant?: string | null;
  patientName?: string | null;
  patientAge?: string | null;
  patientGender?: string | null;
  hospitalNumber?: string | null;
  issuingDoctorName?: string | null;
  patientID?: string | null;
  originatingUnitName?: string | null;
  originatingConsultantName?: string | null;
  summaryNotes?: string[] | null;
  physicalExaminationNotes?: string | null;
  vitalSignNotes?: PatientVitalsSummaryResponseDto[] | null;
  diagnosis?: DiagnosisDto[] | null;
  receivingUnit?: string | null;
  receivingConsultant?: string | null;
};
export type ReferralOrConsultReturnDto = {
  id?: number | null;
  receivingHospital?: string | null;
  receivingUnit?: string | null;
  receivingConsultant?: string | null;
  encounterId?: number;
  type?: InputType;
  otherNote?: string | null;
  referralLetter?: ReferralReturnDto;
  consultLetter?: ConsultReturnDto;
};
export type Plans = {
  investigationRequest?: GetInvestigationRequestsResponse[] | null;
  prescriptions?: PatientMedicationForReturnDto[] | null;
  procedures?: PatientProcedureResponseDto[] | null;
  planItems?: PlanItemsSummaryForReturnDto[] | null;
  vaccinations?: VaccinationResponseDto[] | null;
  referrals?: ReferralOrConsultReturnDto;
  consults?: ReferralOrConsultReturnDto;
  appointments?: NextAppointmentReturnDto[] | null;
  admission?: AdmitPatientRequest;
};
export type DoctorNoteDto = {
  title?: string | null;
  summary?: string | null;
  presentingComplaintResults?: PresentingComplaintDto[] | null;
  typeNoteResults?: PatientTypeNoteDto[] | null;
  generalPhysicalExaminationResults?: PatientPhysicalExaminationDto[] | null;
  vitalSignResults?: PatientVitalsSummaryResponseDto[] | null;
  investigationResults?: InvestigationResultDto[] | null;
  planResults?: Plans;
  diagnosisResults?: DiagnosisDto[] | null;
  dischargeResult?: DischargeDto;
};
export type DoctorSummaryDto = {
  doctorUserId?: number;
  summaryHeader?: string | null;
  doctorNote?: DoctorNoteDto;
};
export type EncounterSummaryDto = {
  doctorUserId?: number;
  title?: string | null;
  summary?: string[] | null;
  generalPhysicalExaminationResults?: PatientPhysicalExaminationDto[] | null;
  vitalSignResults?: PatientVitalsSummaryResponseDto[] | null;
  investigationResults?: InvestigationResultDto[] | null;
  diagnosisResults?: DiagnosisDto[] | null;
  dischargeResult?: DischargeDto;
};
export type NurseSummaryDto = {
  nurseUserId?: number;
  title?: string | null;
  nursingDiagnosisText?: string | null;
  nursingEvaluationText?: string | null;
  generalPhysicalExaminationResults?: PatientPhysicalExaminationDto[] | null;
  vitalSignResults?: PatientVitalsSummaryResponseDto[] | null;
  investigationResults?: InvestigationResultDto[] | null;
};
export type FirstVisitNoteDto = {
  patientId?: number;
  encounterId?: number;
  dateGenerated?: string;
  doctorSummary?: DoctorSummaryDto;
  encounterSummary?: EncounterSummaryDto;
  nurseSummary?: NurseSummaryDto;
};
export type ReviewDetailedHistoryReturnDto = {
  creationTime: string;
  title: string;
  shortDescription: string;
  firstVisitNote: FirstVisitNoteDto;
  isAutoSaved?: boolean | null;
  id?: number;
};
export type PagedResultDtoOfReviewDetailedHistoryReturnDto = {
  totalCount?: number;
  items?: ReviewDetailedHistoryReturnDto[] | null;
};
export type SymptomEntryType = 0 | 1;
export type SymptomTypeNoteRequestDto = {
  type?: string | null;
  note?: string | null;
};
export type PatientSymptomSummaryForReturnDto = {
  id?: number;
  symptomEntryTypeName?: string | null;
  symptomEntryType?: SymptomEntryType;
  description?: string | null;
  suggestionSummary?: string | null;
  typeNotes?: SymptomTypeNoteRequestDto[] | null;
  creatorUserId?: number;
  creationTime?: string;
  deletionTime?: string | null;
  isDeleted?: boolean;
  deletedUser?: string | null;
  encounterId?: number | null;
  appointmentId?: number | null;
};
export type VaccinationHistoryResponseDto = {
  id?: number;
  patientId?: number;
  vaccineId?: number;
  vaccine?: GetVaccineResponse;
  numberOfDoses?: number;
  hasComplication?: boolean;
  lastVaccineDuration?: string | null;
  note?: string | null;
};
export type CreatePatientVitalDto = {
  vitalSignId?: number;
  measurementSiteId?: number | null;
  measurementRangeId?: number | null;
  vitalReading?: number;
  position?: string | null;
};
export type CreateMultiplePatientVitalDto = {
  patientId?: number;
  procedureId?: number | null;
  procedureEntryType?: ProcedureEntryType;
  encounterId?: number;
  patientVitals?: CreatePatientVitalDto[] | null;
};
export type RecheckPatientVitalDto = {
  deleteMostRecentRecord?: boolean;
  patientId?: number;
  procedureId?: number | null;
  id?: number;
  vitalSignId?: number | null;
  measurementSiteId?: number | null;
  measurementRangeId?: number | null;
  vitalReading?: number;
  position?: string | null;
  encounterId?: number;
};
export type CreatePatientInterventionRequest = {
  patientId?: number;
  encounterId?: number;
  eventId?: number | null;
  interventionIds?: number[] | null;
  eventText?: string | null;
  interventionTexts?: string[] | null;
};
export type GetPatientInterventionsResponse = {
  id?: number;
  event?: string | null;
  interventions?: string[] | null;
  time?: string;
  isDeleted?: boolean;
  deletedUser?: string | null;
};
export type WoundDressingSummaryForReturnDto = {
  id?: number;
  description?: string | null;
  creationTime?: string;
  deletionTime?: string | null;
};
export const {
  useApiServicesAppAdmissionsAdmitpatientPostMutation,
  useApiServicesAppAdmissionsTransferpatientPostMutation,
  useApiServicesAppAdmissionsCompletetransferpatientPostMutation,
  useApiServicesAppAppointmentGetmostrecentappointmentforpatientGetQuery,
  useApiServicesAppBedmakingGetpatientsummaryGetQuery,
  useApiServicesAppDiagnosisGetpatientdiagnosisGetQuery,
  useApiServicesAppDischargeGetpatientdischargeGetQuery,
  useApiServicesAppFacilitygroupsGetfacilitygrouppatientcodetemplatedetailsGetQuery,
  useApiServicesAppFacilitygroupsCreateoreditpatientcodetemplatedetailsPostMutation,
  useApiServicesAppFeedingGetpatientfeedingGetQuery,
  useApiServicesAppInputnotesGetpatientinputnotesGetQuery,
  useApiServicesAppInvestigationInvestigationrequestforpatientPostMutation,
  useApiServicesAppInvoicesGetallpatientforlookuptableGetQuery,
  useApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetQuery,
  useApiServicesAppInvoicesGetpaymentbillsbypatientidGetQuery,
  useApiServicesAppInvoicesGetpatientswithinvoiceitemsGetQuery,
  useApiServicesAppInvoicesGetpatienttotalsummaryheaderGetQuery,
  useApiServicesAppInvoicesGetpatientinvoicesandwallettransactionsGetQuery,
  useApiServicesAppInvoicesGetallproformainvoicebypatientidGetQuery,
  useApiServicesAppMealsGetpatientmealsGetQuery,
  useApiServicesAppMedicationGetpatientprescriptionsGetQuery,
  useApiServicesAppMockdataCreatemockpatientandappointmentsfortodayPostMutation,
  useApiServicesAppNextappointmentGetpatientnextappointmentsGetQuery,
  useApiServicesAppNextappointmentGetdoctorpatientnextappointmentsGetQuery,
  useApiServicesAppNursedischargeGetpatientdischargewithencounteridGetQuery,
  useApiServicesAppNursedischargeGetpatientdischargeGetQuery,
  useApiServicesAppPatientappointmentsGetallGetQuery,
  useApiServicesAppPatientappointmentsGetpatientappointmentforeditGetQuery,
  useApiServicesAppPatientappointmentsGetconsultingroomsGetQuery,
  useApiServicesAppPatientappointmentsGetallpatientforlookuptableGetQuery,
  useApiServicesAppPatientappointmentsGetallpatientreferralforlookuptableGetQuery,
  useApiServicesAppPatientappointmentsGetallstaffmemberforlookuptableGetQuery,
  useApiServicesAppPatientappointmentsGetallorganizationunitforlookuptableGetQuery,
  useApiServicesAppPatientappointmentsUpdateappointmentstatusPutMutation,
  useApiServicesAppPatientappointmentsGetappointmentsbypatientidGetQuery,
  useApiServicesAppPatientappointmentsReassignepatientappointmentPostMutation,
  useApiServicesAppPatientcodetemplatesGetpatientcodetemplateforeditGetQuery,
  useApiServicesAppPatientcodetemplatesGetfacilitypatientcodetemplatebyfacilityidGetQuery,
  useApiServicesAppPatientcodetemplatesCreateoreditPostMutation,
  useApiServicesAppPatientcodetemplatesDeleteDeleteMutation,
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
  useApiServicesAppPatientinsurersGetallGetQuery,
  useApiServicesAppPatientinsurersGetpatientinsurerforeditGetQuery,
  useApiServicesAppPatientinsurersCreateoreditPostMutation,
  useApiServicesAppPatientinsurersDeleteDeleteMutation,
  useApiServicesAppPatientinsurersGetallinsuranceproviderforlookuptableGetQuery,
  useApiServicesAppPatientoccupationsGetallGetQuery,
  useApiServicesAppPatientoccupationsGetpatientoccupationforeditGetQuery,
  useApiServicesAppPatientoccupationsCreateoreditPostMutation,
  useApiServicesAppPatientoccupationsDeleteDeleteMutation,
  useApiServicesAppPatientprofileDeletepatientallergyDeleteMutation,
  useApiServicesAppPatientprofileEditpatientallergyPostMutation,
  useApiServicesAppPatientprofileGetclinicalinvestigationGetQuery,
  useApiServicesAppPatientprofileGetawaitingclinicalinvestigationresultGetQuery,
  useApiServicesAppPatientprofileGetpatientmenstrualflowGetQuery,
  useApiServicesAppPatientprofileGetpatientmenstrualfrequencyGetQuery,
  useApiServicesAppPatientprofileGettreatmentplansGetQuery,
  useApiServicesAppPatientprofileDeletemenstrualfrequencyDeleteMutation,
  useApiServicesAppPatientprofileSavepatientfamilyhistoryPostMutation,
  useApiServicesAppPatientprofileGetpatientfamilyhistoryGetQuery,
  useApiServicesAppPatientprofileDeletepatientfamilymemberDeleteMutation,
  useApiServicesAppPatientprofileUpdatepatienfamilymemberdetailsPutMutation,
  useApiServicesAppPatientprofileUpdatepatientfamilyhistoryPutMutation,
  useApiServicesAppPatientprofileDeletemenstrualflowDeleteMutation,
  useApiServicesAppPatientprofileSavemenstruationandfrequencyPostMutation,
  useApiServicesAppPatientprofileCreatepatientallergyPostMutation,
  useApiServicesAppPatientprofileGetpatientgynaecologicproceduresuggestionGetQuery,
  useApiServicesAppPatientprofileGetpatientallergiesGetQuery,
  useApiServicesAppPatientprofileSavemenstrualbloodflowPostMutation,
  useApiServicesAppPatientprofileGetpatientgynaecologicalillnesssuggestionGetQuery,
  useApiServicesAppPatientprofileSavepatientpastmedicalhistoryPostMutation,
  useApiServicesAppPatientprofileGetpatientpastmedicalhistoryGetQuery,
  useApiServicesAppPatientprofileCreatepatientphysicalexercisePostMutation,
  useApiServicesAppPatientprofileGetpatientphysicalexerciseGetQuery,
  useApiServicesAppPatientprofileSavepatienttravelhistoryPostMutation,
  useApiServicesAppPatientprofileGetpatienttravelhistoryGetQuery,
  useApiServicesAppPatientprofileDeletepatienttravelhistoryDeleteMutation,
  useApiServicesAppPatientprofileGetchronicdiseasesuggestionGetQuery,
  useApiServicesAppPatientprofileDeletepatientchronicconditionsDeleteMutation,
  useApiServicesAppPatientprofileSavepatientgenotypeandbloodgroupPostMutation,
  useApiServicesAppPatientprofileGetpatientmajorinjuryGetQuery,
  useApiServicesAppPatientprofileSavepatientmajorinjuryPostMutation,
  useApiServicesAppPatientprofileDeletepatientmajorinjuryDeleteMutation,
  useApiServicesAppPatientprofileGetpostmenopausalsymptomsGetQuery,
  useApiServicesAppPatientprofileGetallergytypesuggestionGetQuery,
  useApiServicesAppPatientprofileGetcontraceptionsuggestionGetQuery,
  useApiServicesAppPatientprofileGetallergyexperiencedsuggestionGetQuery,
  useApiServicesAppPatientprofileGetimplantsuggestionsGetQuery,
  useApiServicesAppPatientprofileUpdatepatientimplantPutMutation,
  useApiServicesAppPatientprofileDeletepatientimplantDeleteMutation,
  useApiServicesAppPatientprofileCreatepatientimplantPostMutation,
  useApiServicesAppPatientprofileGetreviewofsystemssuggestionsGetQuery,
  useApiServicesAppPatientprofileGetdiagnosissuggestionsGetQuery,
  useApiServicesAppPatientprofileGetproceduresuggestionsGetQuery,
  useApiServicesAppPatientprofileGetpatientimplantsGetQuery,
  useApiServicesAppPatientprofileAddbloodtransfusionhistoryPostMutation,
  useApiServicesAppPatientprofileAddsurgicalhistoryPostMutation,
  useApiServicesAppPatientprofileGetpatientsurgicalhistoryGetQuery,
  useApiServicesAppPatientprofileGetpatientbloodtransfusionhistoryGetQuery,
  useApiServicesAppPatientprofileDeletebloodtransfusionhistoryDeleteMutation,
  useApiServicesAppPatientprofileDeletesurgicalhistoryDeleteMutation,
  useApiServicesAppPatientprofileUpdatesurgicalhistoryPutMutation,
  useApiServicesAppPatientprofileUpdatebloodtransfusionhistoryPutMutation,
  useApiServicesAppPatientprofileCreatealcoholhistoryPostMutation,
  useApiServicesAppPatientprofileCreaterecreationaldrughistoryPostMutation,
  useApiServicesAppPatientprofileCreatecigeretteandtobaccohistoryPostMutation,
  useApiServicesAppPatientprofileUpdatealcoholhistoryPutMutation,
  useApiServicesAppPatientprofileUpdatecigarettehistoryPutMutation,
  useApiServicesAppPatientprofileUpdaterecreationaldrughistoryPutMutation,
  useApiServicesAppPatientprofileGetalcoholhistoryGetQuery,
  useApiServicesAppPatientprofileGetrecreationaldrughistoryGetQuery,
  useApiServicesAppPatientprofileGetcigaretteandtobaccohistoryGetQuery,
  useApiServicesAppPatientprofileDeletealcoholhistoryDeleteMutation,
  useApiServicesAppPatientprofileDeletecigaretteandtobaccohistoryDeleteMutation,
  useApiServicesAppPatientprofileDeleterecreationaldrughistoryDeleteMutation,
  useApiServicesAppPatientprofileGetalcoholtypessuggestionGetQuery,
  useApiServicesAppPatientprofileGetcigeretteandtobaccosuggestionGetQuery,
  useApiServicesAppPatientprofileGetrecreationaldrugsuggestionsGetQuery,
  useApiServicesAppPatientprofileCreatedrughistoryPostMutation,
  useApiServicesAppPatientprofileUpdatedrughistoryPutMutation,
  useApiServicesAppPatientprofileGetdrughistoryGetQuery,
  useApiServicesAppPatientprofileDeletedrughistoryDeleteMutation,
  useApiServicesAppPatientprofileGetpatientbloodgroupandgenotypeGetQuery,
  useApiServicesAppPatientprofileUpdatevaccinationhistoryPutMutation,
  useApiServicesAppPatientprofileDeletevaccinationhistoryDeleteMutation,
  useApiServicesAppPatientprofileGetvaccinationsuggestionsGetQuery,
  useApiServicesAppPatientprofileCreatereviewofsystemsdataPostMutation,
  useApiServicesAppPatientprofileGetpatientreviewofsystemsdataGetQuery,
  useApiServicesAppPatientprofileUpdatepatientreviewofsystemsdataPutMutation,
  useApiServicesAppPatientprofileDeletereviewofsystemsdataDeleteMutation,
  useApiServicesAppPatientprofileSaveoccupationhistoryPostMutation,
  useApiServicesAppPatientprofileGetpatientoccupationalhistoryGetQuery,
  useApiServicesAppPatientprofileDeletepatientoccupationDeleteMutation,
  useApiServicesAppPatientprofileUpdatepatientoccupationhistoryPutMutation,
  useApiServicesAppPatientprofileGetreviewdetailshistorystateforpatientGetQuery,
  useApiServicesAppPatientprofileUpdatereviewdetailshistorystatesPutMutation,
  useApiServicesAppPatientprofileDeletepastmedicalhistoryDeleteMutation,
  useApiServicesAppPatientprofileUpdatepastmedicalhistoryPutMutation,
  useApiServicesAppPatientreferraldocumentsGetallGetQuery,
  useApiServicesAppPatientreferraldocumentsGetpatientreferraldocumentforeditGetQuery,
  useApiServicesAppPatientreferraldocumentsCreateoreditPostMutation,
  useApiServicesAppPatientreferraldocumentsDeleteDeleteMutation,
  useApiServicesAppPatientreferraldocumentsRemovereferraldocumentfileDeleteMutation,
  useApiServicesAppPatientreferraldocumentsGetpatientreferralletterGetQuery,
  useApiServicesAppPatientrelationsGetallGetQuery,
  useApiServicesAppPatientrelationsGetallnextofkinGetQuery,
  useApiServicesAppPatientrelationsDeleteDeleteMutation,
  useApiServicesAppPatientrelationsGetallpatientforlookuptableGetQuery,
  useApiServicesAppPatientsGetallGetQuery,
  useApiServicesAppPatientsGetpatientforeditGetQuery,
  useApiServicesAppPatientsCheckpatientexistPostMutation,
  useApiServicesAppPatientsCreateoreditPostMutation,
  useApiServicesAppPatientsDeleteDeleteMutation,
  useApiServicesAppPatientsGetallpatientoccupationforlookuptableGetQuery,
  useApiServicesAppPatientsGetoutpatientlandinglistGetQuery,
  useApiServicesAppPatientsGetinpatientlandinglistGetQuery,
  useApiServicesAppPatientsGetaccidentandemergencylandinglistGetQuery,
  useApiServicesAppPatientsUpdatedappointmentstatusfromawaitingvitalsPutMutation,
  useApiServicesAppPatientsGetpatientdetailsGetQuery,
  useApiServicesAppPatientsGetnewpatientcodeGetQuery,
  useApiServicesAppPatientsSearchpatientGetQuery,
  useApiServicesAppPatientsGetpatienthistoryGetQuery,
  useApiServicesAppPatientsGetpatientwardroundandclinicnotesGetQuery,
  useApiServicesAppPatientsGetintensityunitsGetQuery,
  useApiServicesAppPatientsGetallpatientinclinicfortodayGetQuery,
  useApiServicesAppPatientsGetpatientmedicationsGetQuery,
  useApiServicesAppPatientsCreatepatientstabilitystatusPostMutation,
  useApiServicesAppPatientsGetpatientstabilitystatusGetQuery,
  useApiServicesAppPatientsGetstabilitystatusGetQuery,
  useApiServicesAppPatientwalletGetallrefundrequestGetQuery,
  useApiServicesAppPatientwalletGetinvoicesforrefundGetQuery,
  useApiServicesAppPatientwalletCreatewalletrefundrequestPostMutation,
  useApiServicesAppPatientwalletGetwalletfundingrequestsGetQuery,
  useApiServicesAppPatientwalletApprovewalletfundingrequestsPostMutation,
  useApiServicesAppPatientwalletGetlistofinvoiceitemsforrefundGetQuery,
  useApiServicesAppPatientwalletGetrefundrequestitemsforapprovalGetQuery,
  useApiServicesAppPatientwalletProcessrefundrequestPostMutation,
  useApiServicesAppPhysicalexaminationsCreatepatientphysicalexaminationPostMutation,
  useApiServicesAppPhysicalexaminationsUploadpatientphysicalexamimagesPostMutation,
  useApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationsummaryGetQuery,
  useApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationDeleteMutation,
  useApiServicesAppPhysicalexaminationsGetpatientphysicalexaminationuploadedimagesGetQuery,
  useApiServicesAppPhysicalexaminationsDeletepatientphysicalexaminationimageDeleteMutation,
  useApiServicesAppPlanitemsGetpatientplanitemsGetQuery,
  useApiServicesAppProcedureGetpatientproceduresGetQuery,
  useApiServicesAppProcedureCreatestatementofpatientornextofkinorguardianPostMutation,
  useApiServicesAppProcedureGetstatementofpatientornextofkinorguardianGetQuery,
  useApiServicesAppProcedureGetpatientinterventionsGetQuery,
  useApiServicesAppReviewdetailedhistoryGetpatientreviewdetailedhistoryGetQuery,
  useApiServicesAppSymptomGetpatientsummaryGetQuery,
  useApiServicesAppVaccineGetpatientvaccinationGetQuery,
  useApiServicesAppVaccineGetpatientvaccinationhistoryGetQuery,
  useApiServicesAppVitalsignsCreatepatientvitalPostMutation,
  useApiServicesAppVitalsignsGetpatientvitalssummaryGetQuery,
  useApiServicesAppVitalsignsGetpatientvitalsGetQuery,
  useApiServicesAppVitalsignsRecheckpatientvitalPostMutation,
  useApiServicesAppVitalsignsDeletepatientvitalDeleteMutation,
  useApiServicesAppWardemergenciesCreatepatientinterventionPostMutation,
  useApiServicesAppWardemergenciesGetpatientinterventionsGetQuery,
  useApiServicesAppWounddressingGetpatientwounddressingGetQuery,
} = injectedRtkApi;

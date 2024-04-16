import {baseApi as api} from './baseApi';
export const addTagTypes = [
  'Analytics',
  'InvoiceItems',
  'Invoices',
  'MockData',
  'PatientWallet',
  'TenantInvoice',
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: build => ({
      apiServicesAppAnalyticsGettotalactualinvoiceGet: build.query<
        ApiServicesAppAnalyticsGettotalactualinvoiceGetApiResponse,
        ApiServicesAppAnalyticsGettotalactualinvoiceGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Analytics/GetTotalActualInvoice`,
          params: {selectionMode: queryArg.selectionMode},
        }),
        providesTags: ['Analytics'],
      }),
      apiServicesAppAnalyticsGetanalyticsforcancelledinvoiceGet: build.query<
        ApiServicesAppAnalyticsGetanalyticsforcancelledinvoiceGetApiResponse,
        ApiServicesAppAnalyticsGetanalyticsforcancelledinvoiceGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Analytics/GetAnalyticsForCancelledInvoice`,
          params: {selectionMode: queryArg.selectionMode},
        }),
        providesTags: ['Analytics'],
      }),
      apiServicesAppAnalyticsGeteditedinvoiceanalyticsGet: build.query<
        ApiServicesAppAnalyticsGeteditedinvoiceanalyticsGetApiResponse,
        ApiServicesAppAnalyticsGeteditedinvoiceanalyticsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Analytics/GetEditedInvoiceAnalytics`,
          params: {selectionMode: queryArg.selectionMode},
        }),
        providesTags: ['Analytics'],
      }),
      apiServicesAppInvoiceitemsGetallGet: build.query<
        ApiServicesAppInvoiceitemsGetallGetApiResponse,
        ApiServicesAppInvoiceitemsGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InvoiceItems/GetAll`,
          params: {
            Filter: queryArg.filter,
            NameFilter: queryArg.nameFilter,
            MaxQuantityFilter: queryArg.maxQuantityFilter,
            MinQuantityFilter: queryArg.minQuantityFilter,
            MaxUnitPriceFilter: queryArg.maxUnitPriceFilter,
            MinUnitPriceFilter: queryArg.minUnitPriceFilter,
            NotesFilter: queryArg.notesFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['InvoiceItems'],
      }),
      apiServicesAppInvoiceitemsGetinvoiceitemforeditGet: build.query<
        ApiServicesAppInvoiceitemsGetinvoiceitemforeditGetApiResponse,
        ApiServicesAppInvoiceitemsGetinvoiceitemforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InvoiceItems/GetInvoiceItemForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['InvoiceItems'],
      }),
      apiServicesAppInvoiceitemsCreateoreditPost: build.mutation<
        ApiServicesAppInvoiceitemsCreateoreditPostApiResponse,
        ApiServicesAppInvoiceitemsCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InvoiceItems/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditInvoiceItemDto,
        }),
        invalidatesTags: ['InvoiceItems'],
      }),
      apiServicesAppInvoiceitemsDeleteDelete: build.mutation<
        ApiServicesAppInvoiceitemsDeleteDeleteApiResponse,
        ApiServicesAppInvoiceitemsDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/InvoiceItems/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['InvoiceItems'],
      }),
      apiServicesAppInvoicesGetallGet: build.query<
        ApiServicesAppInvoicesGetallGetApiResponse,
        ApiServicesAppInvoicesGetallGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetAll`,
          params: {
            Filter: queryArg.filter,
            InvoiceIdFilter: queryArg.invoiceIdFilter,
            MaxTimeOfInvoicePaidFilter: queryArg.maxTimeOfInvoicePaidFilter,
            MinTimeOfInvoicePaidFilter: queryArg.minTimeOfInvoicePaidFilter,
            PatientPatientCodeFilter: queryArg.patientPatientCodeFilter,
            PatientAppointmentTitleFilter:
              queryArg.patientAppointmentTitleFilter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetinvoiceforeditGet: build.query<
        ApiServicesAppInvoicesGetinvoiceforeditGetApiResponse,
        ApiServicesAppInvoicesGetinvoiceforeditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetInvoiceForEdit`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesCreateoreditPost: build.mutation<
        ApiServicesAppInvoicesCreateoreditPostApiResponse,
        ApiServicesAppInvoicesCreateoreditPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/CreateOrEdit`,
          method: 'POST',
          body: queryArg.createOrEditInvoiceDto,
        }),
        invalidatesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesDeleteDelete: build.mutation<
        ApiServicesAppInvoicesDeleteDeleteApiResponse,
        ApiServicesAppInvoicesDeleteDeleteApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/Delete`,
          method: 'DELETE',
          params: {Id: queryArg.id},
        }),
        invalidatesTags: ['Invoices'],
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
      apiServicesAppInvoicesGenerateinvoicecodeGet: build.query<
        ApiServicesAppInvoicesGenerateinvoicecodeGetApiResponse,
        ApiServicesAppInvoicesGenerateinvoicecodeGetApiArg
      >({
        query: () => ({url: `/api/services/app/Invoices/GenerateInvoiceCode`}),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesConvertproformaintoinvoicePost: build.mutation<
        ApiServicesAppInvoicesConvertproformaintoinvoicePostApiResponse,
        ApiServicesAppInvoicesConvertproformaintoinvoicePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/ConvertProformaIntoInvoice`,
          method: 'POST',
          body: queryArg.proformaToNewInvoiceRequest,
        }),
        invalidatesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetinvoiceitemsforpricingGet: build.query<
        ApiServicesAppInvoicesGetinvoiceitemsforpricingGetApiResponse,
        ApiServicesAppInvoicesGetinvoiceitemsforpricingGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetInvoiceItemsForPricing`,
          params: {
            Filter: queryArg.filter,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesCreatenewinvoicePost: build.mutation<
        ApiServicesAppInvoicesCreatenewinvoicePostApiResponse,
        ApiServicesAppInvoicesCreatenewinvoicePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/CreateNewInvoice`,
          method: 'POST',
          body: queryArg.createNewInvoiceCommand,
        }),
        invalidatesTags: ['Invoices'],
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
      apiServicesAppInvoicesGetmostrecentbillGet: build.query<
        ApiServicesAppInvoicesGetmostrecentbillGetApiResponse,
        ApiServicesAppInvoicesGetmostrecentbillGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetMostRecentBill`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetpaymentsummaryGet: build.query<
        ApiServicesAppInvoicesGetpaymentsummaryGetApiResponse,
        ApiServicesAppInvoicesGetpaymentsummaryGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetPaymentSummary`,
          params: {
            Filter: queryArg.filter,
            PaymentType: queryArg.paymentType,
            OutStandingAmount: queryArg.outStandingAmount,
            AmountPaid: queryArg.amountPaid,
            Amount: queryArg.amount,
            DateFilter: queryArg.dateFilter,
            PatientId: queryArg.patientId,
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
      apiServicesAppInvoicesGetallunpaidinvoicesGet: build.query<
        ApiServicesAppInvoicesGetallunpaidinvoicesGetApiResponse,
        ApiServicesAppInvoicesGetallunpaidinvoicesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetAllUnpaidInvoices`,
          params: {PatientId: queryArg.patientId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesUpdateinvoicebyidPut: build.mutation<
        ApiServicesAppInvoicesUpdateinvoicebyidPutApiResponse,
        ApiServicesAppInvoicesUpdateinvoicebyidPutApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/UpdateInvoiceById`,
          method: 'PUT',
          body: queryArg.updateNewInvoiceRequest,
        }),
        invalidatesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetinvoicebyidGet: build.query<
        ApiServicesAppInvoicesGetinvoicebyidGetApiResponse,
        ApiServicesAppInvoicesGetinvoicebyidGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetInvoiceById`,
          params: {invoiceId: queryArg.invoiceId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesFundandfinalizePost: build.mutation<
        ApiServicesAppInvoicesFundandfinalizePostApiResponse,
        ApiServicesAppInvoicesFundandfinalizePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/FundAndFinalize`,
          method: 'POST',
          body: queryArg.walletFundingRequestDto,
        }),
        invalidatesTags: ['Invoices'],
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
      apiServicesAppInvoicesGetinvoiceforcancelGet: build.query<
        ApiServicesAppInvoicesGetinvoiceforcancelGetApiResponse,
        ApiServicesAppInvoicesGetinvoiceforcancelGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetInvoiceForCancel`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetcancelrequestforapprovalGet: build.query<
        ApiServicesAppInvoicesGetcancelrequestforapprovalGetApiResponse,
        ApiServicesAppInvoicesGetcancelrequestforapprovalGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetCancelRequestForApproval`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesProcesspendingcancelrequestPost: build.mutation<
        ApiServicesAppInvoicesProcesspendingcancelrequestPostApiResponse,
        ApiServicesAppInvoicesProcesspendingcancelrequestPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/ProcessPendingCancelRequest`,
          method: 'POST',
          body: queryArg.approveCancelInvoiceCommand,
        }),
        invalidatesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetpaymentlandinglistGet: build.query<
        ApiServicesAppInvoicesGetpaymentlandinglistGetApiResponse,
        ApiServicesAppInvoicesGetpaymentlandinglistGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetPaymentLandingList`,
          params: {
            Filter: queryArg.filter,
            PatientSeenFilter: queryArg.patientSeenFilter,
            CustomStartDateFilter: queryArg.customStartDateFilter,
            CustomEndDateFilter: queryArg.customEndDateFilter,
            InvoiceSource: queryArg.invoiceSource,
            FilterType: queryArg.filterType,
            Sorting: queryArg.sorting,
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
      apiServicesAppInvoicesCreatecancelinvoicePost: build.mutation<
        ApiServicesAppInvoicesCreatecancelinvoicePostApiResponse,
        ApiServicesAppInvoicesCreatecancelinvoicePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/CreateCancelInvoice`,
          method: 'POST',
          body: queryArg.createCancelInvoiceCommand,
        }),
        invalidatesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetpaymentexpandableGet: build.query<
        ApiServicesAppInvoicesGetpaymentexpandableGetApiResponse,
        ApiServicesAppInvoicesGetpaymentexpandableGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetPaymentExpandable`,
          params: {
            PatientId: queryArg.patientId,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetpaymentlandinglistheaderGet: build.query<
        ApiServicesAppInvoicesGetpaymentlandinglistheaderGetApiResponse,
        ApiServicesAppInvoicesGetpaymentlandinglistheaderGetApiArg
      >({
        query: () => ({
          url: `/api/services/app/Invoices/GetPaymentLandingListHeader`,
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetinvoiceitemstoapplydebtreliefGet: build.query<
        ApiServicesAppInvoicesGetinvoiceitemstoapplydebtreliefGetApiResponse,
        ApiServicesAppInvoicesGetinvoiceitemstoapplydebtreliefGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetInvoiceItemsToApplyDebtRelief`,
          params: {patientId: queryArg.patientId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesApplydebtrelieftoinvoicePost: build.mutation<
        ApiServicesAppInvoicesApplydebtrelieftoinvoicePostApiResponse,
        ApiServicesAppInvoicesApplydebtrelieftoinvoicePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/ApplyDebtReliefToInvoice`,
          method: 'POST',
          body: queryArg.approveDebtReliefRequestDto,
        }),
        invalidatesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGeteditedinvoicesGet: build.query<
        ApiServicesAppInvoicesGeteditedinvoicesGetApiResponse,
        ApiServicesAppInvoicesGeteditedinvoicesGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetEditedInvoices`,
          params: {
            SearchText: queryArg.searchText,
            StartDate: queryArg.startDate,
            EndTime: queryArg.endTime,
            FilterDate: queryArg.filterDate,
            InvoiceSource: queryArg.invoiceSource,
            Sorting: queryArg.sorting,
            SkipCount: queryArg.skipCount,
            MaxResultCount: queryArg.maxResultCount,
          },
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGeteditedinvoiceitemsGet: build.query<
        ApiServicesAppInvoicesGeteditedinvoiceitemsGetApiResponse,
        ApiServicesAppInvoicesGeteditedinvoiceitemsGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetEditedInvoiceItems`,
          params: {invoiceId: queryArg.invoiceId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGeteditedinvoicefordownloadGet: build.query<
        ApiServicesAppInvoicesGeteditedinvoicefordownloadGetApiResponse,
        ApiServicesAppInvoicesGeteditedinvoicefordownloadGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetEditedInvoiceForDownload`,
          params: {Filter: queryArg.filter},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesMarkinvoiceasclearedPost: build.mutation<
        ApiServicesAppInvoicesMarkinvoiceasclearedPostApiResponse,
        ApiServicesAppInvoicesMarkinvoiceasclearedPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/MarkInvoiceAsCleared`,
          method: 'POST',
          params: {invoiceId: queryArg.invoiceId},
        }),
        invalidatesTags: ['Invoices'],
      }),
      apiServicesAppInvoicesGetinvoicetoapplycreditGet: build.query<
        ApiServicesAppInvoicesGetinvoicetoapplycreditGetApiResponse,
        ApiServicesAppInvoicesGetinvoicetoapplycreditGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/Invoices/GetInvoiceToApplyCredit`,
          params: {patienId: queryArg.patienId},
        }),
        providesTags: ['Invoices'],
      }),
      apiServicesAppMockdataGenerateinvoiceitemsPost: build.mutation<
        ApiServicesAppMockdataGenerateinvoiceitemsPostApiResponse,
        ApiServicesAppMockdataGenerateinvoiceitemsPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/MockData/GenerateInvoiceItems`,
          method: 'POST',
          params: {numberOfItems: queryArg.numberOfItems},
        }),
        invalidatesTags: ['MockData'],
      }),
      apiServicesAppMockdataGeneratedummyinvoicepricingPost: build.mutation<
        ApiServicesAppMockdataGeneratedummyinvoicepricingPostApiResponse,
        ApiServicesAppMockdataGeneratedummyinvoicepricingPostApiArg
      >({
        query: () => ({
          url: `/api/services/app/MockData/GenerateDummyInvoicePricing`,
          method: 'POST',
        }),
        invalidatesTags: ['MockData'],
      }),
      apiServicesAppMockdataGenerateeditedinvoicesPost: build.mutation<
        ApiServicesAppMockdataGenerateeditedinvoicesPostApiResponse,
        ApiServicesAppMockdataGenerateeditedinvoicesPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/MockData/GenerateEditedInvoices`,
          method: 'POST',
          params: {number: queryArg['number']},
        }),
        invalidatesTags: ['MockData'],
      }),
      apiServicesAppMockdataMockinvoiceaspaidPost: build.mutation<
        ApiServicesAppMockdataMockinvoiceaspaidPostApiResponse,
        ApiServicesAppMockdataMockinvoiceaspaidPostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/MockData/MockInvoiceAsPaid`,
          method: 'POST',
          params: {patientId: queryArg.patientId},
        }),
        invalidatesTags: ['MockData'],
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
      apiServicesAppTenantinvoiceGetinvoiceinfoGet: build.query<
        ApiServicesAppTenantinvoiceGetinvoiceinfoGetApiResponse,
        ApiServicesAppTenantinvoiceGetinvoiceinfoGetApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/TenantInvoice/GetInvoiceInfo`,
          params: {Id: queryArg.id},
        }),
        providesTags: ['TenantInvoice'],
      }),
      apiServicesAppTenantinvoiceCreateinvoicePost: build.mutation<
        ApiServicesAppTenantinvoiceCreateinvoicePostApiResponse,
        ApiServicesAppTenantinvoiceCreateinvoicePostApiArg
      >({
        query: queryArg => ({
          url: `/api/services/app/TenantInvoice/CreateInvoice`,
          method: 'POST',
          body: queryArg.tenantCreateInvoiceDto,
        }),
        invalidatesTags: ['TenantInvoice'],
      }),
    }),
    overrideExisting: false,
  });
export {injectedRtkApi as invoiceApi};
export type ApiServicesAppAnalyticsGettotalactualinvoiceGetApiResponse =
  /** status 200 Success */ GetAnalyticsResponseDto;
export type ApiServicesAppAnalyticsGettotalactualinvoiceGetApiArg = {
  selectionMode: 0 | 1 | 2 | 3;
};
export type ApiServicesAppAnalyticsGetanalyticsforcancelledinvoiceGetApiResponse =
  /** status 200 Success */ GetCountAnalyticsResponseDto;
export type ApiServicesAppAnalyticsGetanalyticsforcancelledinvoiceGetApiArg = {
  selectionMode: 0 | 1 | 2 | 3;
};
export type ApiServicesAppAnalyticsGeteditedinvoiceanalyticsGetApiResponse =
  /** status 200 Success */ GetCountAnalyticsResponseDto;
export type ApiServicesAppAnalyticsGeteditedinvoiceanalyticsGetApiArg = {
  selectionMode: 0 | 1 | 2 | 3;
};
export type ApiServicesAppInvoiceitemsGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetInvoiceItemForViewDto;
export type ApiServicesAppInvoiceitemsGetallGetApiArg = {
  filter?: string;
  nameFilter?: string;
  maxQuantityFilter?: number;
  minQuantityFilter?: number;
  maxUnitPriceFilter?: number;
  minUnitPriceFilter?: number;
  notesFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInvoiceitemsGetinvoiceitemforeditGetApiResponse =
  /** status 200 Success */ GetInvoiceItemForEditOutput;
export type ApiServicesAppInvoiceitemsGetinvoiceitemforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppInvoiceitemsCreateoreditPostApiResponse = unknown;
export type ApiServicesAppInvoiceitemsCreateoreditPostApiArg = {
  createOrEditInvoiceItemDto: CreateOrEditInvoiceItemDto;
};
export type ApiServicesAppInvoiceitemsDeleteDeleteApiResponse = unknown;
export type ApiServicesAppInvoiceitemsDeleteDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppInvoicesGetallGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetInvoiceForViewDto;
export type ApiServicesAppInvoicesGetallGetApiArg = {
  filter?: string;
  invoiceIdFilter?: string;
  maxTimeOfInvoicePaidFilter?: string;
  minTimeOfInvoicePaidFilter?: string;
  patientPatientCodeFilter?: string;
  patientAppointmentTitleFilter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInvoicesGetinvoiceforeditGetApiResponse =
  /** status 200 Success */ GetInvoiceForEditOutput;
export type ApiServicesAppInvoicesGetinvoiceforeditGetApiArg = {
  id?: number;
};
export type ApiServicesAppInvoicesCreateoreditPostApiResponse = unknown;
export type ApiServicesAppInvoicesCreateoreditPostApiArg = {
  createOrEditInvoiceDto: CreateOrEditInvoiceDto;
};
export type ApiServicesAppInvoicesDeleteDeleteApiResponse = unknown;
export type ApiServicesAppInvoicesDeleteDeleteApiArg = {
  id?: number;
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
export type ApiServicesAppInvoicesGenerateinvoicecodeGetApiResponse =
  /** status 200 Success */ string;
export type ApiServicesAppInvoicesGenerateinvoicecodeGetApiArg = void;
export type ApiServicesAppInvoicesConvertproformaintoinvoicePostApiResponse =
  unknown;
export type ApiServicesAppInvoicesConvertproformaintoinvoicePostApiArg = {
  proformaToNewInvoiceRequest: ProformaToNewInvoiceRequest;
};
export type ApiServicesAppInvoicesGetinvoiceitemsforpricingGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetInvoiceItemPricingResponse;
export type ApiServicesAppInvoicesGetinvoiceitemsforpricingGetApiArg = {
  filter?: string;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInvoicesCreatenewinvoicePostApiResponse =
  /** status 200 Success */ CreateNewInvoiceCommand;
export type ApiServicesAppInvoicesCreatenewinvoicePostApiArg = {
  createNewInvoiceCommand: CreateNewInvoiceCommand;
};
export type ApiServicesAppInvoicesCreatenewinvestigationinvoicePostApiResponse =
  /** status 200 Success */ CreateNewInvestigationInvoiceCommand;
export type ApiServicesAppInvoicesCreatenewinvestigationinvoicePostApiArg = {
  createNewInvestigationInvoiceCommand: CreateNewInvestigationInvoiceCommand;
};
export type ApiServicesAppInvoicesGetmostrecentbillGetApiResponse =
  /** status 200 Success */ GetMostRecentBillResponse;
export type ApiServicesAppInvoicesGetmostrecentbillGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppInvoicesGetpaymentsummaryGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPaymentSummaryQueryResponse;
export type ApiServicesAppInvoicesGetpaymentsummaryGetApiArg = {
  filter?: string;
  paymentType?: PaymentTypes;
  outStandingAmount?: number;
  amountPaid?: number;
  amount?: number;
  dateFilter?: PatientSeenFilter;
  patientId: number;
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
export type ApiServicesAppInvoicesGetallunpaidinvoicesGetApiResponse =
  /** status 200 Success */ UnpaidInvoicesResponse;
export type ApiServicesAppInvoicesGetallunpaidinvoicesGetApiArg = {
  patientId: number;
};
export type ApiServicesAppInvoicesUpdateinvoicebyidPutApiResponse = unknown;
export type ApiServicesAppInvoicesUpdateinvoicebyidPutApiArg = {
  updateNewInvoiceRequest: UpdateNewInvoiceRequest;
};
export type ApiServicesAppInvoicesGetinvoicebyidGetApiResponse =
  /** status 200 Success */ GetInvoiceQueryResponse;
export type ApiServicesAppInvoicesGetinvoicebyidGetApiArg = {
  invoiceId?: number;
};
export type ApiServicesAppInvoicesFundandfinalizePostApiResponse = unknown;
export type ApiServicesAppInvoicesFundandfinalizePostApiArg = {
  walletFundingRequestDto: WalletFundingRequestDto;
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
export type ApiServicesAppInvoicesGetinvoiceforcancelGetApiResponse =
  /** status 200 Success */ GetInvoiceForCancelQueryResponse[];
export type ApiServicesAppInvoicesGetinvoiceforcancelGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppInvoicesGetcancelrequestforapprovalGetApiResponse =
  /** status 200 Success */ GetInvoiceForCancelQueryResponse[];
export type ApiServicesAppInvoicesGetcancelrequestforapprovalGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppInvoicesProcesspendingcancelrequestPostApiResponse =
  unknown;
export type ApiServicesAppInvoicesProcesspendingcancelrequestPostApiArg = {
  approveCancelInvoiceCommand: ApproveCancelInvoiceCommand;
};
export type ApiServicesAppInvoicesGetpaymentlandinglistGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPaymentLadingListQueryResponse;
export type ApiServicesAppInvoicesGetpaymentlandinglistGetApiArg = {
  filter?: string;
  patientSeenFilter?: PatientSeenFilter;
  customStartDateFilter?: string;
  customEndDateFilter?: string;
  invoiceSource?: InvoiceSource;
  filterType: FilterType;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInvoicesGetallproformainvoicebypatientidGetApiResponse =
  /** status 200 Success */ GetAllProformaInvoiceQueryResponse;
export type ApiServicesAppInvoicesGetallproformainvoicebypatientidGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppInvoicesCreatecancelinvoicePostApiResponse = unknown;
export type ApiServicesAppInvoicesCreatecancelinvoicePostApiArg = {
  createCancelInvoiceCommand: CreateCancelInvoiceCommand;
};
export type ApiServicesAppInvoicesGetpaymentexpandableGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetPaymentExpandableQueryResponse;
export type ApiServicesAppInvoicesGetpaymentexpandableGetApiArg = {
  patientId: number;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInvoicesGetpaymentlandinglistheaderGetApiResponse =
  /** status 200 Success */ GetPatientTotalSummaryQueryResponse;
export type ApiServicesAppInvoicesGetpaymentlandinglistheaderGetApiArg = void;
export type ApiServicesAppInvoicesGetinvoiceitemstoapplydebtreliefGetApiResponse =
  /** status 200 Success */ ApplyReliefInvoiceViewDto[];
export type ApiServicesAppInvoicesGetinvoiceitemstoapplydebtreliefGetApiArg = {
  patientId?: number;
};
export type ApiServicesAppInvoicesApplydebtrelieftoinvoicePostApiResponse =
  unknown;
export type ApiServicesAppInvoicesApplydebtrelieftoinvoicePostApiArg = {
  approveDebtReliefRequestDto: ApproveDebtReliefRequestDto;
};
export type ApiServicesAppInvoicesGeteditedinvoicesGetApiResponse =
  /** status 200 Success */ PagedResultDtoOfGetEditedInvoiceResponseDto;
export type ApiServicesAppInvoicesGeteditedinvoicesGetApiArg = {
  searchText?: string;
  startDate?: string;
  endTime?: string;
  filterDate: PatientSeenFilter;
  invoiceSource?: InvoiceSource;
  sorting?: string;
  skipCount?: number;
  maxResultCount?: number;
};
export type ApiServicesAppInvoicesGeteditedinvoiceitemsGetApiResponse =
  /** status 200 Success */ GetEditedInvoiceItemResponseDto[];
export type ApiServicesAppInvoicesGeteditedinvoiceitemsGetApiArg = {
  invoiceId?: number;
};
export type ApiServicesAppInvoicesGeteditedinvoicefordownloadGetApiResponse =
  /** status 200 Success */ GetEditedInvoiceForDownloadResponse[];
export type ApiServicesAppInvoicesGeteditedinvoicefordownloadGetApiArg = {
  filter: PatientSeenFilter;
};
export type ApiServicesAppInvoicesMarkinvoiceasclearedPostApiResponse = unknown;
export type ApiServicesAppInvoicesMarkinvoiceasclearedPostApiArg = {
  invoiceId?: number;
};
export type ApiServicesAppInvoicesGetinvoicetoapplycreditGetApiResponse =
  /** status 200 Success */ GetInvoiceToApproveCrediteDto[];
export type ApiServicesAppInvoicesGetinvoicetoapplycreditGetApiArg = {
  patienId?: number;
};
export type ApiServicesAppMockdataGenerateinvoiceitemsPostApiResponse = unknown;
export type ApiServicesAppMockdataGenerateinvoiceitemsPostApiArg = {
  numberOfItems?: number;
};
export type ApiServicesAppMockdataGeneratedummyinvoicepricingPostApiResponse =
  unknown;
export type ApiServicesAppMockdataGeneratedummyinvoicepricingPostApiArg = void;
export type ApiServicesAppMockdataGenerateeditedinvoicesPostApiResponse =
  unknown;
export type ApiServicesAppMockdataGenerateeditedinvoicesPostApiArg = {
  number?: number;
};
export type ApiServicesAppMockdataMockinvoiceaspaidPostApiResponse = unknown;
export type ApiServicesAppMockdataMockinvoiceaspaidPostApiArg = {
  patientId?: number;
};
export type ApiServicesAppPatientwalletGetinvoicesforrefundGetApiResponse =
  /** status 200 Success */ GetInvoicesForRefundQueryResponse[];
export type ApiServicesAppPatientwalletGetinvoicesforrefundGetApiArg = {
  filter?: WalletRefundFilter;
  customDate?: string;
  patientId: number;
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
export type ApiServicesAppTenantinvoiceGetinvoiceinfoGetApiResponse =
  /** status 200 Success */ TenantInvoiceDto;
export type ApiServicesAppTenantinvoiceGetinvoiceinfoGetApiArg = {
  id?: number;
};
export type ApiServicesAppTenantinvoiceCreateinvoicePostApiResponse = unknown;
export type ApiServicesAppTenantinvoiceCreateinvoicePostApiArg = {
  tenantCreateInvoiceDto: TenantCreateInvoiceDto;
};
export type MoneyDto = {
  amount: number;
  currency: string;
};
export type GetAnalyticsResponseDto = {
  total?: MoneyDto;
  difference?: MoneyDto;
  percetageIncreaseOrDecrease?: number;
  increased?: boolean;
};
export type GetCountAnalyticsResponseDto = {
  totalCount?: number;
  percentageIncreaseOrDecrease?: number;
  increased?: boolean;
};
export type InvoiceItemDto = {
  name?: string | null;
  quantity?: number;
  unitPrice?: number;
  discountAmount?: number | null;
  discountPercentage?: number | null;
  subTotal?: number;
  notes?: string | null;
  id?: number;
};
export type GetInvoiceItemForViewDto = {
  invoiceItem?: InvoiceItemDto;
};
export type PagedResultDtoOfGetInvoiceItemForViewDto = {
  totalCount?: number;
  items?: GetInvoiceItemForViewDto[] | null;
};
export type CreateOrEditInvoiceItemDto = {
  name: string;
  quantity?: number;
  unitPrice?: number;
  discountAmount?: number | null;
  discountPercentage?: number | null;
  notes?: string | null;
  id?: number | null;
};
export type GetInvoiceItemForEditOutput = {
  invoiceItem?: CreateOrEditInvoiceItemDto;
};
export type InvoiceDto = {
  invoiceId?: string | null;
  timeOfInvoicePaid?: string;
  patientId?: number;
  patientAppointmentId?: number | null;
  id?: number;
};
export type GetInvoiceForViewDto = {
  invoice?: InvoiceDto;
  patientPatientCode?: string | null;
  patientAppointmentTitle?: string | null;
};
export type PagedResultDtoOfGetInvoiceForViewDto = {
  totalCount?: number;
  items?: GetInvoiceForViewDto[] | null;
};
export type CreateOrEditInvoiceDto = {
  invoiceId: string;
  timeOfInvoicePaid?: string;
  patientId?: number;
  patientAppointmentId?: number | null;
  id?: number | null;
};
export type GetInvoiceForEditOutput = {
  invoice?: CreateOrEditInvoiceDto;
  patientPatientCode?: string | null;
  patientAppointmentTitle?: string | null;
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
export type ProformaToNewInvoiceRequest = {
  invoiceNo: string;
  patientId: number;
  totalAmount: MoneyDto;
  id?: number | null;
};
export type GetInvoiceItemPricingResponse = {
  id?: number;
  name?: string | null;
  discountName?: string | null;
  amount?: MoneyDto;
  discountPercentage?: number;
  isGlobal?: boolean;
};
export type PagedResultDtoOfGetInvoiceItemPricingResponse = {
  totalCount?: number;
  items?: GetInvoiceItemPricingResponse[] | null;
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
export type CreateNewInvoiceCommand = {
  invoiceNo: string;
  appointmentId: number;
  patientId: number;
  paymentType: PaymentTypes;
  totalAmount?: MoneyDto;
  isServiceOnCredit?: boolean;
  encounterId?: number | null;
  items?: InvoiceItemRequest[] | null;
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
export type InvoiceItemStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TransactionAction =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14;
export type GetPaymentSummaryQueryResponse = {
  items?: string | null;
  invoiceNo?: string | null;
  toUpAmount?: MoneyDto;
  amount?: MoneyDto;
  paymentType?: PaymentTypes;
  amountPaid?: MoneyDto;
  outstandingAmount?: MoneyDto;
  createdDate?: string | null;
  appointmentStatus?: AppointmentStatusType;
  paymentDate?: string | null;
  itemStatus?: InvoiceItemStatus;
  actionStatus?: TransactionAction;
  id?: number;
};
export type PagedResultDtoOfGetPaymentSummaryQueryResponse = {
  totalCount?: number;
  items?: GetPaymentSummaryQueryResponse[] | null;
};
export type PatientSeenFilter = 'Today' | 'ThisWeek' | 'ThisMonth' | 'ThisYear';
export type InvoiceReceiptQueryResponse = {
  invoiceItems?: GetMostRecentBillResponse[] | null;
  receiptItems?: GetMostRecentBillResponse[] | null;
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
export type UnpaidInvoicesResponse = {
  totalAmount?: MoneyDto;
  invoices?: UnpaidInvoiceDto[] | null;
};
export type UpdateNewInvoiceRequest = {
  invoiceNo: string;
  appointmentId: number;
  patientId: number;
  paymentType: PaymentTypes;
  totalAmount?: MoneyDto;
  isServiceOnCredit?: boolean;
  items?: InvoiceItemRequest[] | null;
  id?: number;
};
export type GetInvoiceQueryResponse = {
  invoiceNo?: string | null;
  appointmentId?: number;
  patientId?: number;
  paymentType?: string | null;
  totalAmount?: MoneyDto;
  isServiceOnCredit?: boolean;
  items?: InvoiceItemRequest[] | null;
  id?: number | null;
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
export type GenderType = 'Male' | 'Female' | 'Other';
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
export type CancelInvoiceItemsQueryResponse = {
  id?: number;
  itemName?: string | null;
  subTotal?: MoneyDto;
};
export type GetInvoiceForCancelQueryResponse = {
  id?: number;
  invoiceNo?: string | null;
  createdDate?: string;
  invoiceItems?: CancelInvoiceItemsQueryResponse[] | null;
};
export type ApproveCancelInvoiceCommand = {
  patientId: number;
  isApproved?: boolean;
};
export type PaymentStatus = 'Unpaid' | 'Paid' | 'PartiallyPaid' | 'Proforma';
export type PaymentAllInputResponse = {
  id?: number;
  visitName?: string | null;
  dateVisited?: string;
};
export type GetPaymentLadingListQueryResponse = {
  patientId?: number;
  emailAddress?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  patientCode?: string | null;
  dateOfBirth?: string;
  gender?: string | null;
  walletBalance?: MoneyDto;
  ward?: string | null;
  appointmentStatus?: string | null;
  walletTopUpAmount?: MoneyDto;
  actualInvoiceAmount?: MoneyDto;
  amountPaid?: MoneyDto;
  outstandingAmount?: MoneyDto;
  lastPaymentDate?: string;
  hasPendingWalletRequest?: boolean;
  invoiceItemDate?: string;
  timeOfInvoicePaid?: string | null;
  appointmentDate?: string | null;
  toUpDate?: string | null;
  invoiceSource?: InvoiceSource;
  paymentStatus?: PaymentStatus;
  isServiceOnCredit?: boolean;
  allVisits?: PaymentAllInputResponse[] | null;
};
export type PagedResultDtoOfGetPaymentLadingListQueryResponse = {
  totalCount?: number;
  items?: GetPaymentLadingListQueryResponse[] | null;
};
export type FilterType =
  | 'PatientSeen'
  | 'AmountPaid'
  | 'WalletTopUp'
  | 'ServiceOnCredit'
  | 'OutstandingAmount';
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
export type CreateCancelInvoiceCommand = {
  patientId: number;
  invoiceItemsIds?: number[] | null;
};
export type GetPaymentExpandableQueryResponse = {
  invoiceNo?: string | null;
  invoiceItemName?: string | null;
  appointmentStatus?: string | null;
  topUpMoney?: MoneyDto;
  actualInvoiceAmount?: MoneyDto;
  amountPaid?: MoneyDto;
  lastPaidDateTime?: string | null;
  outstandingAmount?: MoneyDto;
  editedAmount?: MoneyDto;
  paymentType?: string | null;
  invoiceItemDateTime?: string | null;
  editorInfo?: string | null;
};
export type PagedResultDtoOfGetPaymentExpandableQueryResponse = {
  totalCount?: number;
  items?: GetPaymentExpandableQueryResponse[] | null;
};
export type ApplyReliefItemsViewDto = {
  id?: number;
  itemName?: string | null;
  category?: string | null;
  price?: MoneyDto;
  reliefAmount?: MoneyDto;
  isReliefApplied?: boolean;
};
export type ApplyReliefInvoiceViewDto = {
  id?: number;
  invoiceNumber?: string | null;
  invoiceDate?: string;
  groupedInvoiceItems?: ApplyReliefItemsViewDto[] | null;
  initiatedBy?: string | null;
};
export type ApproveDebtReliefRequestDto = {
  tenantId?: number;
  facilityId?: number;
  discountPercentage?: number;
  selectedInvoiceItemIds?: number[] | null;
};
export type GetEditedInvoiceResponseDto = {
  invoiceId?: number;
  patientName?: string | null;
  dateOfBirth?: string;
  invoiceNumber?: string | null;
  editDate?: string;
  gender?: string | null;
  ward?: string | null;
  totalAmountBeforeEdit?: MoneyDto;
  totalEditedInvoiceAmount?: MoneyDto;
  totalAmountPaid?: MoneyDto;
  totalOutstanding?: MoneyDto;
  creationTime?: string;
  patientCode?: string | null;
  invoiceSource?: InvoiceSource;
};
export type PagedResultDtoOfGetEditedInvoiceResponseDto = {
  totalCount?: number;
  items?: GetEditedInvoiceResponseDto[] | null;
};
export type GetEditedInvoiceItemResponseDto = {
  invoiceNumber?: string | null;
  itemName?: string | null;
  amountBeforeEdit?: MoneyDto;
  editedInvoice?: MoneyDto;
  amountPaid?: MoneyDto;
  outstanding?: MoneyDto;
  editedBy?: string | null;
  dateEdited?: string;
  paymentType?: string | null;
};
export type GetEditedInvoiceForDownloadResponse = {
  patientCode?: string | null;
  fullName?: string | null;
  dob?: string;
  gender?: GenderType;
  serviceCentre?: string | null;
  total?: MoneyDto;
  outStanding?: MoneyDto;
  invoiceNo?: string | null;
  itemName?: string | null;
  actualAmount?: MoneyDto;
  editedAmount?: MoneyDto;
  createdDate?: string;
  id?: number;
};
export type GetInvoiceItemsToApproveCreditDto = {
  itemId?: number;
  itemName?: string | null;
  itemAmount?: MoneyDto;
  invoiceId?: number;
};
export type GetInvoiceToApproveCrediteDto = {
  invoiceId?: number;
  invoiceNumber?: string | null;
  invoiceDate?: string;
  items?: GetInvoiceItemsToApproveCreditDto[] | null;
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
export type TenantInvoiceDto = {
  amount?: number;
  editionDisplayName?: string | null;
  invoiceNo?: string | null;
  invoiceDate?: string;
  tenantLegalName?: string | null;
  tenantAddress?: string[] | null;
  tenantTaxNo?: string | null;
  hostLegalName?: string | null;
  hostAddress?: string[] | null;
};
export type TenantCreateInvoiceDto = {
  subscriptionPaymentId?: number;
};
export const {
  useApiServicesAppAnalyticsGettotalactualinvoiceGetQuery,
  useApiServicesAppAnalyticsGetanalyticsforcancelledinvoiceGetQuery,
  useApiServicesAppAnalyticsGeteditedinvoiceanalyticsGetQuery,
  useApiServicesAppInvoiceitemsGetallGetQuery,
  useApiServicesAppInvoiceitemsGetinvoiceitemforeditGetQuery,
  useApiServicesAppInvoiceitemsCreateoreditPostMutation,
  useApiServicesAppInvoiceitemsDeleteDeleteMutation,
  useApiServicesAppInvoicesGetallGetQuery,
  useApiServicesAppInvoicesGetinvoiceforeditGetQuery,
  useApiServicesAppInvoicesCreateoreditPostMutation,
  useApiServicesAppInvoicesDeleteDeleteMutation,
  useApiServicesAppInvoicesGetallpatientforlookuptableGetQuery,
  useApiServicesAppInvoicesGetallpatientappointmentforlookuptableGetQuery,
  useApiServicesAppInvoicesGenerateinvoicecodeGetQuery,
  useApiServicesAppInvoicesConvertproformaintoinvoicePostMutation,
  useApiServicesAppInvoicesGetinvoiceitemsforpricingGetQuery,
  useApiServicesAppInvoicesCreatenewinvoicePostMutation,
  useApiServicesAppInvoicesCreatenewinvestigationinvoicePostMutation,
  useApiServicesAppInvoicesGetmostrecentbillGetQuery,
  useApiServicesAppInvoicesGetpaymentsummaryGetQuery,
  useApiServicesAppInvoicesGetpaymentbillsbypatientidGetQuery,
  useApiServicesAppInvoicesGetallunpaidinvoicesGetQuery,
  useApiServicesAppInvoicesUpdateinvoicebyidPutMutation,
  useApiServicesAppInvoicesGetinvoicebyidGetQuery,
  useApiServicesAppInvoicesFundandfinalizePostMutation,
  useApiServicesAppInvoicesGetpatientswithinvoiceitemsGetQuery,
  useApiServicesAppInvoicesGetpatienttotalsummaryheaderGetQuery,
  useApiServicesAppInvoicesGetpatientinvoicesandwallettransactionsGetQuery,
  useApiServicesAppInvoicesGetinvoiceforcancelGetQuery,
  useApiServicesAppInvoicesGetcancelrequestforapprovalGetQuery,
  useApiServicesAppInvoicesProcesspendingcancelrequestPostMutation,
  useApiServicesAppInvoicesGetpaymentlandinglistGetQuery,
  useApiServicesAppInvoicesGetallproformainvoicebypatientidGetQuery,
  useApiServicesAppInvoicesCreatecancelinvoicePostMutation,
  useApiServicesAppInvoicesGetpaymentexpandableGetQuery,
  useApiServicesAppInvoicesGetpaymentlandinglistheaderGetQuery,
  useApiServicesAppInvoicesGetinvoiceitemstoapplydebtreliefGetQuery,
  useApiServicesAppInvoicesApplydebtrelieftoinvoicePostMutation,
  useApiServicesAppInvoicesGeteditedinvoicesGetQuery,
  useApiServicesAppInvoicesGeteditedinvoiceitemsGetQuery,
  useApiServicesAppInvoicesGeteditedinvoicefordownloadGetQuery,
  useApiServicesAppInvoicesMarkinvoiceasclearedPostMutation,
  useApiServicesAppInvoicesGetinvoicetoapplycreditGetQuery,
  useApiServicesAppMockdataGenerateinvoiceitemsPostMutation,
  useApiServicesAppMockdataGeneratedummyinvoicepricingPostMutation,
  useApiServicesAppMockdataGenerateeditedinvoicesPostMutation,
  useApiServicesAppMockdataMockinvoiceaspaidPostMutation,
  useApiServicesAppPatientwalletGetinvoicesforrefundGetQuery,
  useApiServicesAppPatientwalletGetlistofinvoiceitemsforrefundGetQuery,
  useApiServicesAppTenantinvoiceGetinvoiceinfoGetQuery,
  useApiServicesAppTenantinvoiceCreateinvoicePostMutation,
} = injectedRtkApi;

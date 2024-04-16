import {baseApi as api} from './baseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    apiServicesAppAccountIstenantavailablePost: build.mutation<
      ApiServicesAppAccountIstenantavailablePostApiResponse,
      ApiServicesAppAccountIstenantavailablePostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/IsTenantAvailable`,
        method: 'POST',
        body: queryArg.isTenantAvailableInput,
      }),
    }),
    apiServicesAppAccountGettenantsGet: build.query<
      ApiServicesAppAccountGettenantsGetApiResponse,
      ApiServicesAppAccountGettenantsGetApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/GetTenants`,
        params: {SearchTerm: queryArg.searchTerm},
      }),
    }),
    apiServicesAppAccountResolvetenantidPost: build.mutation<
      ApiServicesAppAccountResolvetenantidPostApiResponse,
      ApiServicesAppAccountResolvetenantidPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/ResolveTenantId`,
        method: 'POST',
        body: queryArg.resolveTenantIdInput,
      }),
    }),
    apiServicesAppAccountRegisterPost: build.mutation<
      ApiServicesAppAccountRegisterPostApiResponse,
      ApiServicesAppAccountRegisterPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/Register`,
        method: 'POST',
        body: queryArg.registerInput,
      }),
    }),
    apiServicesAppAccountSendpasswordresetcodePost: build.mutation<
      ApiServicesAppAccountSendpasswordresetcodePostApiResponse,
      ApiServicesAppAccountSendpasswordresetcodePostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/SendPasswordResetCode`,
        method: 'POST',
        body: queryArg.sendPasswordResetCodeInput,
      }),
    }),
    apiServicesAppAccountResetpasswordPost: build.mutation<
      ApiServicesAppAccountResetpasswordPostApiResponse,
      ApiServicesAppAccountResetpasswordPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/ResetPassword`,
        method: 'POST',
        body: queryArg.resetPasswordInput,
      }),
    }),
    apiServicesAppAccountSendemailactivationlinkPost: build.mutation<
      ApiServicesAppAccountSendemailactivationlinkPostApiResponse,
      ApiServicesAppAccountSendemailactivationlinkPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/SendEmailActivationLink`,
        method: 'POST',
        body: queryArg.sendEmailActivationLinkInput,
      }),
    }),
    apiServicesAppAccountActivateemailPost: build.mutation<
      ApiServicesAppAccountActivateemailPostApiResponse,
      ApiServicesAppAccountActivateemailPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/ActivateEmail`,
        method: 'POST',
        body: queryArg.activateEmailInput,
      }),
    }),
    apiServicesAppAccountImpersonateuserPost: build.mutation<
      ApiServicesAppAccountImpersonateuserPostApiResponse,
      ApiServicesAppAccountImpersonateuserPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/ImpersonateUser`,
        method: 'POST',
        body: queryArg.impersonateUserInput,
      }),
    }),
    apiServicesAppAccountImpersonatetenantPost: build.mutation<
      ApiServicesAppAccountImpersonatetenantPostApiResponse,
      ApiServicesAppAccountImpersonatetenantPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/ImpersonateTenant`,
        method: 'POST',
        body: queryArg.impersonateTenantInput,
      }),
    }),
    apiServicesAppAccountDelegatedimpersonatePost: build.mutation<
      ApiServicesAppAccountDelegatedimpersonatePostApiResponse,
      ApiServicesAppAccountDelegatedimpersonatePostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/DelegatedImpersonate`,
        method: 'POST',
        body: queryArg.delegatedImpersonateInput,
      }),
    }),
    apiServicesAppAccountDelegateusersPost: build.mutation<
      ApiServicesAppAccountDelegateusersPostApiResponse,
      ApiServicesAppAccountDelegateusersPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/DelegateUsers`,
        method: 'POST',
        body: queryArg.sharedRegistrationInput,
      }),
    }),
    apiServicesAppAccountGetdelegateusersGet: build.query<
      ApiServicesAppAccountGetdelegateusersGetApiResponse,
      ApiServicesAppAccountGetdelegateusersGetApiArg
    >({
      query: () => ({url: `/api/services/app/Account/GetDelegateUsers`}),
    }),
    apiServicesAppAccountRemovedelegateuserDelete: build.mutation<
      ApiServicesAppAccountRemovedelegateuserDeleteApiResponse,
      ApiServicesAppAccountRemovedelegateuserDeleteApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/RemoveDelegateUser`,
        method: 'DELETE',
        params: {Id: queryArg.id},
      }),
    }),
    apiServicesAppAccountBacktoimpersonatorPost: build.mutation<
      ApiServicesAppAccountBacktoimpersonatorPostApiResponse,
      ApiServicesAppAccountBacktoimpersonatorPostApiArg
    >({
      query: () => ({
        url: `/api/services/app/Account/BackToImpersonator`,
        method: 'POST',
      }),
    }),
    apiServicesAppAccountSwitchtolinkedaccountPost: build.mutation<
      ApiServicesAppAccountSwitchtolinkedaccountPostApiResponse,
      ApiServicesAppAccountSwitchtolinkedaccountPostApiArg
    >({
      query: queryArg => ({
        url: `/api/services/app/Account/SwitchToLinkedAccount`,
        method: 'POST',
        body: queryArg.switchToLinkedAccountInput,
      }),
    }),
    apiTokenauthLinkedaccountauthenticatePost: build.mutation<
      ApiTokenauthLinkedaccountauthenticatePostApiResponse,
      ApiTokenauthLinkedaccountauthenticatePostApiArg
    >({
      query: queryArg => ({
        url: `/api/TokenAuth/LinkedAccountAuthenticate`,
        method: 'POST',
        params: {switchAccountToken: queryArg.switchAccountToken},
      }),
    }),
  }),
  overrideExisting: false,
});
export {injectedRtkApi as accountApi};
export type ApiServicesAppAccountIstenantavailablePostApiResponse =
  /** status 200 Success */ IsTenantAvailableOutput;
export type ApiServicesAppAccountIstenantavailablePostApiArg = {
  isTenantAvailableInput: IsTenantAvailableInput;
};
export type ApiServicesAppAccountGettenantsGetApiResponse =
  /** status 200 Success */ GetTenantsResponse[];
export type ApiServicesAppAccountGettenantsGetApiArg = {
  searchTerm?: string;
};
export type ApiServicesAppAccountResolvetenantidPostApiResponse =
  /** status 200 Success */ number;
export type ApiServicesAppAccountResolvetenantidPostApiArg = {
  resolveTenantIdInput: ResolveTenantIdInput;
};
export type ApiServicesAppAccountRegisterPostApiResponse =
  /** status 200 Success */ RegisterOutput;
export type ApiServicesAppAccountRegisterPostApiArg = {
  registerInput: RegisterInput;
};
export type ApiServicesAppAccountSendpasswordresetcodePostApiResponse = unknown;
export type ApiServicesAppAccountSendpasswordresetcodePostApiArg = {
  sendPasswordResetCodeInput: SendPasswordResetCodeInput;
};
export type ApiServicesAppAccountResetpasswordPostApiResponse =
  /** status 200 Success */ ResetPasswordOutput;
export type ApiServicesAppAccountResetpasswordPostApiArg = {
  resetPasswordInput: ResetPasswordInput;
};
export type ApiServicesAppAccountSendemailactivationlinkPostApiResponse =
  unknown;
export type ApiServicesAppAccountSendemailactivationlinkPostApiArg = {
  sendEmailActivationLinkInput: SendEmailActivationLinkInput;
};
export type ApiServicesAppAccountActivateemailPostApiResponse = unknown;
export type ApiServicesAppAccountActivateemailPostApiArg = {
  activateEmailInput: ActivateEmailInput;
};
export type ApiServicesAppAccountImpersonateuserPostApiResponse =
  /** status 200 Success */ ImpersonateOutput;
export type ApiServicesAppAccountImpersonateuserPostApiArg = {
  impersonateUserInput: ImpersonateUserInput;
};
export type ApiServicesAppAccountImpersonatetenantPostApiResponse =
  /** status 200 Success */ ImpersonateOutput;
export type ApiServicesAppAccountImpersonatetenantPostApiArg = {
  impersonateTenantInput: ImpersonateTenantInput;
};
export type ApiServicesAppAccountDelegatedimpersonatePostApiResponse =
  /** status 200 Success */ ImpersonateOutput;
export type ApiServicesAppAccountDelegatedimpersonatePostApiArg = {
  delegatedImpersonateInput: DelegatedImpersonateInput;
};
export type ApiServicesAppAccountDelegateusersPostApiResponse = unknown;
export type ApiServicesAppAccountDelegateusersPostApiArg = {
  sharedRegistrationInput: SharedRegistrationInput;
};
export type ApiServicesAppAccountGetdelegateusersGetApiResponse =
  /** status 200 Success */ DelegatedUserRead[];
export type ApiServicesAppAccountGetdelegateusersGetApiArg = void;
export type ApiServicesAppAccountRemovedelegateuserDeleteApiResponse = unknown;
export type ApiServicesAppAccountRemovedelegateuserDeleteApiArg = {
  id?: number;
};
export type ApiServicesAppAccountBacktoimpersonatorPostApiResponse =
  /** status 200 Success */ ImpersonateOutput;
export type ApiServicesAppAccountBacktoimpersonatorPostApiArg = void;
export type ApiServicesAppAccountSwitchtolinkedaccountPostApiResponse =
  /** status 200 Success */ SwitchToLinkedAccountOutput;
export type ApiServicesAppAccountSwitchtolinkedaccountPostApiArg = {
  switchToLinkedAccountInput: SwitchToLinkedAccountInput;
};
export type ApiTokenauthLinkedaccountauthenticatePostApiResponse =
  /** status 200 Success */ SwitchedAccountAuthenticateResultModel;
export type ApiTokenauthLinkedaccountauthenticatePostApiArg = {
  switchAccountToken?: string;
};
export type TenantAvailabilityState = 1 | 2 | 3;
export type IsTenantAvailableOutput = {
  state?: TenantAvailabilityState;
  tenantId?: number | null;
  serverRootAddress?: string | null;
};
export type IsTenantAvailableInput = {
  tenancyName: string;
};
export type GetTenantsResponse = {
  name?: string | null;
  uniqueBusinessCode?: string | null;
};
export type ResolveTenantIdInput = {
  c?: string | null;
};
export type RegisterOutput = {
  canLogin?: boolean;
};
export type RegisterInput = {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  password: string;
  captchaResponse?: string | null;
};
export type SendPasswordResetCodeInput = {
  emailAddress: string;
};
export type ResetPasswordOutput = {
  canLogin?: boolean;
  userName?: string | null;
};
export type ResetPasswordInput = {
  userId?: number;
  resetCode?: string | null;
  expireDate?: string;
  password?: string | null;
  returnUrl?: string | null;
  singleSignIn?: string | null;
  c?: string | null;
};
export type SendEmailActivationLinkInput = {
  emailAddress: string;
};
export type ActivateEmailInput = {
  userId?: number;
  confirmationCode?: string | null;
  c?: string | null;
};
export type ImpersonateOutput = {
  impersonationToken?: string | null;
  tenancyName?: string | null;
};
export type ImpersonateUserInput = {
  tenantId?: number | null;
  userId?: number;
};
export type ImpersonateTenantInput = {
  tenantId?: number | null;
  userId?: number;
};
export type DelegatedImpersonateInput = {
  userDelegationId?: number;
};
export type SharedRegistrationInput = {
  emails?: string[] | null;
};
export type DelegatedUserEnum = 0 | 1 | 2;
export type UserOrganizationUnit = {
  tenantId?: number | null;
  userId?: number;
  organizationUnitId?: number;
  isDeleted?: boolean;
  creationTime?: string;
  creatorUserId?: number | null;
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
  | 'State ID Card'
  | 'State Driver License'
  | 'Military ID Card'
  | 'Social Security Card'
  | 'Birth Certificate'
  | 'Voter Registration Card';
export type District = {
  name: string;
  regionFk: Region;
  regionId?: number;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Region = {
  name: string;
  shortName?: string | null;
  countryFk: Country;
  countryId?: number;
  districts?: District[] | null;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Country = {
  name: string;
  nationality: string;
  code: string;
  phoneCode: string;
  currency: string;
  currencyCode: string;
  regions?: Region[] | null;
  currencySymbol: string;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type RoleClaim = {
  tenantId?: number | null;
  roleId?: number;
  claimType?: string | null;
  claimValue?: string | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type RolePermissionSetting = {
  roleId?: number;
  tenantId?: number | null;
  name: string;
  isGranted?: boolean;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Role = {
  normalizedName: string;
  claims?: RoleClaim[] | null;
  concurrencyStamp?: string | null;
  deleterUser?: User;
  creatorUser?: User;
  lastModifierUser?: User;
  tenantId?: number | null;
  name: string;
  displayName: string;
  isStatic?: boolean;
  isDefault?: boolean;
  permissions?: RolePermissionSetting[] | null;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type RoleRead = {
  normalizedName: string;
  claims?: RoleClaim[] | null;
  concurrencyStamp?: string | null;
  deleterUser?: User;
  creatorUser?: User;
  lastModifierUser?: User;
  tenantId?: number | null;
  name: string;
  displayName: string;
  isStatic?: boolean;
  isDefault?: boolean;
  permissions?: RolePermissionSetting[] | null;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityLevel = 'Primary' | 'Secondary' | 'Tertiary';
export type PatientCodeTemplate = {
  prefix?: string | null;
  length?: number;
  suffix?: string | null;
  startingIndex?: number;
  isActive?: boolean;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientCodeTemplateRead = {
  prefix?: string | null;
  length?: number;
  suffix?: string | null;
  startingIndex?: number;
  isActive?: boolean;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type StaffCodeTemplate = {
  length?: number;
  startingIndex?: number;
  prefix?: string | null;
  suffix?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type StaffCodeTemplateRead = {
  length?: number;
  startingIndex?: number;
  prefix?: string | null;
  suffix?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityGroup = {
  tenantId?: number;
  name: string;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  website?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postCode?: string | null;
  bankName?: string | null;
  bankAccountHolder?: string | null;
  bankAccountNumber?: string | null;
  patientCodeTemplateFk?: PatientCodeTemplate;
  staffCodeTemplateFk?: StaffCodeTemplate;
  childFacilities?: Facility[] | null;
  logoId?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityGroupRead = {
  tenantId?: number;
  name: string;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  website?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postCode?: string | null;
  bankName?: string | null;
  bankAccountHolder?: string | null;
  bankAccountNumber?: string | null;
  patientCodeTemplateFk?: PatientCodeTemplateRead;
  staffCodeTemplateFk?: StaffCodeTemplateRead;
  childFacilities?: Facility[] | null;
  logoId?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityType = {
  name: string;
  isActive?: boolean;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityTypeRead = {
  name: string;
  isActive?: boolean;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type BedType = {
  tenantId?: number | null;
  name: string;
  facility?: Facility;
  facilityId?: number | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type BedTypeRead = {
  tenantId?: number | null;
  name: string;
  facility?: Facility;
  facilityId?: number | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
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
export type OccupationCategory = {
  name: string;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Occupation = {
  name: string;
  occupationCategoryId?: number;
  occupationCategory?: OccupationCategory;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientOccupation = {
  patientId?: number;
  patient?: Patient;
  occupationId?: number;
  occupation?: Occupation;
  startDate?: string | null;
  endDate?: string | null;
  isCurrent?: boolean;
  location?: string | null;
  notes?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientOccupationRead = {
  patientId?: number;
  patient?: Patient;
  occupationId?: number;
  occupation?: Occupation;
  startDate?: string | null;
  endDate?: string | null;
  isCurrent?: boolean;
  location?: string | null;
  notes?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
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
export type PatientRelationDiagnosis = {
  sctId?: string | null;
  name?: string | null;
  isCauseOfDeath?: boolean;
  patientRelationId?: number;
  patientRelation?: PatientRelation;
  id?: number;
};
export type PatientRelationDiagnosisRead = {
  sctId?: string | null;
  name?: string | null;
  isCauseOfDeath?: boolean;
  patientRelationId?: number;
  patientRelation?: PatientRelation;
  id?: number;
};
export type PatientRelation = {
  relationship: Relationship;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  phoneNumber: string;
  title?: TitleType;
  address?: string | null;
  email?: string | null;
  isGuardian?: boolean;
  patientId?: number;
  patientFk?: Patient;
  identificationCode?: string | null;
  identificationType?: IdentificationType;
  isAlive?: boolean;
  ageAtDeath?: number;
  ageAtDiagnosis?: number;
  diagnoses?: PatientRelationDiagnosis[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientRelationRead = {
  relationship: Relationship;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  phoneNumber: string;
  title?: TitleType;
  address?: string | null;
  email?: string | null;
  isGuardian?: boolean;
  patientId?: number;
  patientFk?: Patient;
  identificationCode?: string | null;
  identificationType?: IdentificationType;
  isAlive?: boolean;
  ageAtDeath?: number;
  ageAtDiagnosis?: number;
  diagnoses?: PatientRelationDiagnosisRead[] | null;
  fullName?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InsuranceProviderType = 'National' | 'State' | 'Private';
export type InsuranceBenefiaryType = 'Primary' | 'Dependent';
export type InsuranceProvider = {
  tenantId?: number;
  name: string;
  isActive?: boolean;
  type?: InsuranceProviderType;
  countryId?: number | null;
  countryFk?: Country;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InsuranceProviderRead = {
  tenantId?: number;
  name: string;
  isActive?: boolean;
  type?: InsuranceProviderType;
  countryId?: number | null;
  countryFk?: Country;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientInsurer = {
  tenantId?: number;
  type?: InsuranceProviderType;
  benefiaryType?: InsuranceBenefiaryType;
  coverage?: string | null;
  startDate?: string;
  endDate?: string;
  insuranceCode?: string | null;
  insuranceProviderId?: number;
  insuranceProviderFk?: InsuranceProvider;
  patientId?: number;
  patientFk?: Patient;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientInsurerRead = {
  tenantId?: number;
  type?: InsuranceProviderType;
  benefiaryType?: InsuranceBenefiaryType;
  coverage?: string | null;
  startDate?: string;
  endDate?: string;
  insuranceCode?: string | null;
  insuranceProviderId?: number;
  insuranceProviderFk?: InsuranceProviderRead;
  patientId?: number;
  patientFk?: Patient;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientReferralDocument = {
  referringHealthCareProvider?: string | null;
  diagnosisSummary?: string | null;
  referralDocument?: string | null;
  patientId?: number;
  patientFk?: Patient;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientReferralDocumentRead = {
  referringHealthCareProvider?: string | null;
  diagnosisSummary?: string | null;
  referralDocument?: string | null;
  patientId?: number;
  patientFk?: Patient;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
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
  | 'Upcoming'
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
export type AppointmentType =
  | 'Walk-in'
  | 'Referral'
  | 'Consultation'
  | 'Follow-up'
  | 'Medical-exam';
export type OrganizationUnitType = 0 | 1 | 2 | 3;
export type DaysOfTheWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';
export type OrganizationUnitTime = {
  tenantId?: number;
  dayOfTheWeek?: DaysOfTheWeek;
  openingTime?: string | null;
  closingTime?: string | null;
  isActive?: boolean;
  organizationUnitExtendedId?: number | null;
  organizationUnitExtendedFk?: OrganizationUnitExtended;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type OrganizationUnitTimeRead = {
  tenantId?: number;
  dayOfTheWeek?: DaysOfTheWeek;
  openingTime?: string | null;
  closingTime?: string | null;
  isActive?: boolean;
  organizationUnitExtendedId?: number | null;
  organizationUnitExtendedFk?: OrganizationUnitExtended;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type OrganizationUnitRole = {
  tenantId?: number | null;
  roleId?: number;
  organizationUnitId?: number;
  isDeleted?: boolean;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type ServiceCentreType =
  | 'OutPatient'
  | 'InPatient'
  | 'AccidentAndEmergency'
  | 'Pharmacy'
  | 'Laboratory'
  | 'Others';
export type OrganizationUnit = {
  tenantId?: number | null;
  parent?: OrganizationUnit;
  parentId?: number | null;
  code: string;
  displayName: string;
  children?: OrganizationUnit[] | null;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type OrganizationUnitExtended = {
  shortName?: string | null;
  isActive?: boolean | null;
  type?: OrganizationUnitType;
  facilityId?: number;
  facility?: Facility;
  operatingTimes?: OrganizationUnitTime[] | null;
  userOrganizationUnits?: UserOrganizationUnit[] | null;
  organizationUnitRoles?: OrganizationUnitRole[] | null;
  isStatic?: boolean;
  serviceCentre?: ServiceCentreType;
  tenantId?: number | null;
  parent?: OrganizationUnit;
  parentId?: number | null;
  code: string;
  displayName: string;
  children?: OrganizationUnit[] | null;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type OrganizationUnitExtendedRead = {
  shortName?: string | null;
  isActive?: boolean | null;
  type?: OrganizationUnitType;
  facilityId?: number;
  facility?: Facility;
  operatingTimes?: OrganizationUnitTimeRead[] | null;
  userOrganizationUnits?: UserOrganizationUnit[] | null;
  organizationUnitRoles?: OrganizationUnitRole[] | null;
  isStatic?: boolean;
  serviceCentre?: ServiceCentreType;
  tenantId?: number | null;
  parent?: OrganizationUnit;
  parentId?: number | null;
  code: string;
  displayName: string;
  children?: OrganizationUnit[] | null;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientAppointment = {
  tenantId?: number;
  title?: string | null;
  duration?: number;
  startTime?: string;
  isRepeat?: boolean;
  notes?: string | null;
  repeatType?: AppointmentRepeatType;
  status?: AppointmentStatusType;
  type?: AppointmentType;
  patientId?: number;
  patientFk?: Patient;
  patientReferralDocumentId?: number | null;
  patientReferralDocumentFk?: PatientReferralDocument;
  attendingPhysicianId?: number | null;
  attendingPhysicianFk?: StaffMember;
  referringClinicId?: number | null;
  referringClinicFk?: OrganizationUnitExtended;
  attendingClinicId?: number | null;
  attendingClinicFk?: OrganizationUnitExtended;
  transferredClinic?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientAppointmentRead = {
  tenantId?: number;
  title?: string | null;
  duration?: number;
  startTime?: string;
  isRepeat?: boolean;
  notes?: string | null;
  repeatType?: AppointmentRepeatType;
  status?: AppointmentStatusType;
  type?: AppointmentType;
  patientId?: number;
  patientFk?: Patient;
  patientReferralDocumentId?: number | null;
  patientReferralDocumentFk?: PatientReferralDocumentRead;
  attendingPhysicianId?: number | null;
  attendingPhysicianFk?: StaffMember;
  referringClinicId?: number | null;
  referringClinicFk?: OrganizationUnitExtendedRead;
  attendingClinicId?: number | null;
  attendingClinicFk?: OrganizationUnitExtendedRead;
  transferredClinic?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SymptomEntryType = 'Suggestion' | 'TypeNote';
export type SymptomTypeNote = {
  tenantId?: number;
  type?: string | null;
  note?: string | null;
  id?: number;
};
export type SuggestionQuestionType =
  | 'Site'
  | 'Onset'
  | 'Character'
  | 'Radiation'
  | 'Associations'
  | 'TimeCourse'
  | 'ExacerbatingOrRelieving'
  | 'Severity';
export type SuggestionOnsetInterval =
  | 'Minutes'
  | 'Hours'
  | 'Days'
  | 'Weeks'
  | 'Months'
  | 'Years';
export type SymptomSuggestionAnswer = {
  tenantId?: number;
  symptomSnowmedId?: string | null;
  description?: string | null;
  howLongAgo?: number;
  onsetInterval?: SuggestionOnsetInterval;
  cyclicality?: string | null;
  isAbsent?: boolean;
  frequency?: string | null;
  howLongDidItLast?: string | null;
  exacerbatingOrRelievingType?: string | null;
  severityScale?: number;
  id?: number;
};
export type SymptomSuggestionQuestion = {
  tenantId?: number;
  suggestionQuestionType?: SuggestionQuestionType;
  symptomSuggestionAnswer?: SymptomSuggestionAnswer;
  id?: number;
};
export type Symptom = {
  symptomEntryType?: SymptomEntryType;
  tenantId?: number | null;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  symptomSnowmedId?: string | null;
  description?: string | null;
  otherNote?: string | null;
  typeNotes?: SymptomTypeNote[] | null;
  suggestions?: SymptomSuggestionQuestion[] | null;
  encounterId?: number | null;
  encounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SymptomRead = {
  symptomEntryType?: SymptomEntryType;
  tenantId?: number | null;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  symptomSnowmedId?: string | null;
  description?: string | null;
  otherNote?: string | null;
  typeNotes?: SymptomTypeNote[] | null;
  suggestions?: SymptomSuggestionQuestion[] | null;
  encounterId?: number | null;
  encounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SelectedBedMakingNote = {
  bedMakingId?: number;
  bedMaking?: BedMaking;
  bedMakingSnowMedId?: string | null;
  note?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SelectedBedMakingNoteRead = {
  bedMakingId?: number;
  bedMaking?: BedMaking;
  bedMakingSnowMedId?: string | null;
  note?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type BedMaking = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  selectedBedMakingNotes?: SelectedBedMakingNote[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type BedMakingRead = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  selectedBedMakingNotes?: SelectedBedMakingNoteRead[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Feeding = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  feedingSnowmedIds?: string[] | null;
  description?: string | null;
  volume?: number;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FeedingRead = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  feedingSnowmedIds?: string[] | null;
  description?: string | null;
  volume?: number;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SelectedProcedure = {
  tenantId?: number;
  snowmedId?: number | null;
  procedureName: string;
  procedureId?: number;
  procedure?: Procedure;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SelectedProcedureRead = {
  tenantId?: number;
  snowmedId?: number | null;
  procedureName: string;
  procedureId?: number;
  procedure?: Procedure;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type ProcedureType = 'RequestProcedure' | 'RecordProcedure';
export type ProcedureEntryType = 'Preop' | 'Intraop' | 'Postop';
export type ProcedureStatus = 0 | 1;
export type Procedure = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  snowmedId?: number | null;
  selectedProcedures?: SelectedProcedure[] | null;
  note?: string | null;
  procedureType?: ProcedureType;
  encounterId?: number | null;
  encounter?: PatientEncounter;
  parentProcedureId?: number | null;
  procedureEntryType?: ProcedureEntryType;
  procedureStatus?: ProcedureStatus;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type ProcedureRead = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  snowmedId?: number | null;
  selectedProcedures?: SelectedProcedureRead[] | null;
  note?: string | null;
  procedureType?: ProcedureType;
  encounterId?: number | null;
  encounter?: PatientEncounter;
  parentProcedureId?: number | null;
  procedureEntryType?: ProcedureEntryType;
  procedureStatus?: ProcedureStatus;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PlanItems = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  planItemsSnowmedIds?: string[] | null;
  descriptions?: string[] | null;
  procedureId?: number | null;
  procedure?: Procedure;
  encounterId?: number | null;
  encounter?: PatientEncounter;
  procedureEntryType?: ProcedureEntryType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PlanItemsRead = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  planItemsSnowmedIds?: string[] | null;
  descriptions?: string[] | null;
  procedureId?: number | null;
  procedure?: ProcedureRead;
  encounterId?: number | null;
  encounter?: PatientEncounter;
  procedureEntryType?: ProcedureEntryType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InputNotes = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  inputNotesSnowmedIds?: string[] | null;
  descriptions?: string[] | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  entryType?: ProcedureEntryType;
  procedureId?: number | null;
  procedure?: Procedure;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InputNotesRead = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  inputNotesSnowmedIds?: string[] | null;
  descriptions?: string[] | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  entryType?: ProcedureEntryType;
  procedureId?: number | null;
  procedure?: ProcedureRead;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SelectedWoundDressing = {
  name?: string | null;
  woundDressingSnowMedId?: string | null;
  tenantId?: number;
  woundDressingId?: number;
  woundDressing?: WoundDressing;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SelectedWoundDressingRead = {
  name?: string | null;
  woundDressingSnowMedId?: string | null;
  tenantId?: number;
  woundDressingId?: number;
  woundDressing?: WoundDressing;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type WoundDressing = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  encounterId?: number | null;
  encounter?: PatientEncounter;
  selectedWoundDressings?: SelectedWoundDressing[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type WoundDressingRead = {
  tenantId?: number;
  stamp?: number | null;
  patientId?: number;
  patient?: Patient;
  encounterId?: number | null;
  encounter?: PatientEncounter;
  selectedWoundDressings?: SelectedWoundDressingRead[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SelectedMeals = {
  name?: string | null;
  mealSnowMedId?: string | null;
  mealId?: number;
  meal?: Meals;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SelectedMealsRead = {
  name?: string | null;
  mealSnowMedId?: string | null;
  mealId?: number;
  meal?: Meals;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Meals = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  selectedMeals?: SelectedMeals[] | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type MealsRead = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  selectedMeals?: SelectedMealsRead[] | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type VaccineGroup = {
  name?: string | null;
  fullName?: string | null;
  vaccines?: Vaccine[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type VaccineGroupRead = {
  name?: string | null;
  fullName?: string | null;
  vaccines?: Vaccine[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type UnitOfTime = 'Day' | 'Week' | 'Month' | 'Year';
export type VaccineSchedule = {
  vaccineId?: number;
  vaccine?: Vaccine;
  dosage?: string | null;
  doses?: number;
  routeOfAdministration?: string | null;
  ageMin?: number | null;
  ageMinUnit?: UnitOfTime;
  ageMax?: number | null;
  ageMaxUnit?: UnitOfTime;
  notes?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type VaccineScheduleRead = {
  vaccineId?: number;
  vaccine?: Vaccine;
  dosage?: string | null;
  doses?: number;
  routeOfAdministration?: string | null;
  ageMin?: number | null;
  ageMinUnit?: UnitOfTime;
  ageMax?: number | null;
  ageMaxUnit?: UnitOfTime;
  notes?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Vaccine = {
  groupId?: number | null;
  group?: VaccineGroup;
  name?: string | null;
  fullName?: string | null;
  schedules?: VaccineSchedule[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type VaccineRead = {
  groupId?: number | null;
  group?: VaccineGroupRead;
  name?: string | null;
  fullName?: string | null;
  schedules?: VaccineScheduleRead[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Vaccination = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  vaccineId?: number;
  vaccine?: Vaccine;
  vaccineScheduleId?: number;
  vaccineSchedule?: VaccineSchedule;
  isAdministered?: boolean;
  dueDate?: string | null;
  dateAdministered?: string | null;
  hasComplication?: boolean;
  vaccineBrand?: string | null;
  vaccineBatchNo?: string | null;
  note?: string | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  procedureId?: number | null;
  procedure?: Procedure;
  procedureEntryType?: ProcedureEntryType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type VaccinationRead = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  vaccineId?: number;
  vaccine?: VaccineRead;
  vaccineScheduleId?: number;
  vaccineSchedule?: VaccineScheduleRead;
  isAdministered?: boolean;
  dueDate?: string | null;
  dateAdministered?: string | null;
  hasComplication?: boolean;
  vaccineBrand?: string | null;
  vaccineBatchNo?: string | null;
  note?: string | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  procedureId?: number | null;
  procedure?: ProcedureRead;
  procedureEntryType?: ProcedureEntryType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type VaccinationHistory = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  vaccineId?: number;
  vaccine?: Vaccine;
  hasComplication?: boolean;
  lastVaccineDuration?: string | null;
  note?: string | null;
  numberOfDoses?: number;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type VaccinationHistoryRead = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  vaccineId?: number;
  vaccine?: VaccineRead;
  hasComplication?: boolean;
  lastVaccineDuration?: string | null;
  note?: string | null;
  numberOfDoses?: number;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientCodeMapping = {
  facilityFk?: Facility;
  facilityId?: number | null;
  patientFk?: Patient;
  patientId?: number | null;
  patientCode?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientCodeMappingRead = {
  facilityFk?: Facility;
  facilityId?: number | null;
  patientFk?: Patient;
  patientId?: number | null;
  patientCode?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Patient = {
  uuId: string;
  genderType: GenderType;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  emailAddress?: string | null;
  address?: string | null;
  isNewToHospital?: boolean;
  title?: TitleType;
  middleName?: string | null;
  districtId?: number | null;
  district?: District;
  stateOfOriginId?: number | null;
  stateOfOriginFk?: Region;
  countryId?: number | null;
  countryFk?: Country;
  userId?: number | null;
  userFk?: User;
  ethnicity?: string | null;
  religion?: Religion;
  maritalStatus?: MaritalStatus;
  bloodGroup?: BloodGroup;
  bloodGenotype?: BloodGenotype;
  bloodGroupSource?: BloodGroupAndGenotypeSource;
  genotypeSource?: BloodGroupAndGenotypeSource;
  nuclearFamilySize?: number;
  numberOfSiblings?: number;
  noOfMaleChildren?: number;
  noOfFemaleChildren?: number;
  noOfMaleSiblings?: number;
  noOfFemaleSiblings?: number;
  positionInFamily?: string | null;
  numberOfChildren?: number;
  numberOfSpouses?: number;
  identificationCode?: string | null;
  identificationType?: IdentificationType;
  walletBalance?: number;
  patientOccupations?: PatientOccupation[] | null;
  relations?: PatientRelation[] | null;
  insurers?: PatientInsurer[] | null;
  referralDocuments?: PatientReferralDocument[] | null;
  patientAppointments?: PatientAppointment[] | null;
  symptoms?: Symptom[] | null;
  bedMakings?: BedMaking[] | null;
  feeding?: Feeding[] | null;
  planItems?: PlanItems[] | null;
  inputNotes?: InputNotes[] | null;
  woundDressing?: WoundDressing[] | null;
  meals?: Meals[] | null;
  vaccinations?: Vaccination[] | null;
  vaccineHistories?: VaccinationHistory[] | null;
  patientCodeMappings?: PatientCodeMapping[] | null;
  patientEncounters?: PatientEncounter[] | null;
  profilePictureId?: string | null;
  pictureUrl?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientRead = {
  uuId: string;
  genderType: GenderType;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  emailAddress?: string | null;
  address?: string | null;
  isNewToHospital?: boolean;
  title?: TitleType;
  middleName?: string | null;
  districtId?: number | null;
  district?: District;
  stateOfOriginId?: number | null;
  stateOfOriginFk?: Region;
  countryId?: number | null;
  countryFk?: Country;
  userId?: number | null;
  userFk?: User;
  ethnicity?: string | null;
  religion?: Religion;
  maritalStatus?: MaritalStatus;
  bloodGroup?: BloodGroup;
  bloodGenotype?: BloodGenotype;
  bloodGroupSource?: BloodGroupAndGenotypeSource;
  genotypeSource?: BloodGroupAndGenotypeSource;
  nuclearFamilySize?: number;
  numberOfSiblings?: number;
  noOfMaleChildren?: number;
  noOfFemaleChildren?: number;
  noOfMaleSiblings?: number;
  noOfFemaleSiblings?: number;
  positionInFamily?: string | null;
  numberOfChildren?: number;
  numberOfSpouses?: number;
  identificationCode?: string | null;
  identificationType?: IdentificationType;
  walletBalance?: number;
  patientOccupations?: PatientOccupationRead[] | null;
  relations?: PatientRelationRead[] | null;
  insurers?: PatientInsurerRead[] | null;
  referralDocuments?: PatientReferralDocumentRead[] | null;
  patientAppointments?: PatientAppointmentRead[] | null;
  symptoms?: SymptomRead[] | null;
  bedMakings?: BedMakingRead[] | null;
  feeding?: FeedingRead[] | null;
  planItems?: PlanItemsRead[] | null;
  inputNotes?: InputNotesRead[] | null;
  woundDressing?: WoundDressingRead[] | null;
  meals?: MealsRead[] | null;
  vaccinations?: VaccinationRead[] | null;
  vaccineHistories?: VaccinationHistoryRead[] | null;
  patientCodeMappings?: PatientCodeMappingRead[] | null;
  patientEncounters?: PatientEncounter[] | null;
  fullName?: string | null;
  displayName?: string | null;
  profilePictureId?: string | null;
  pictureUrl?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type EncounterStatusType =
  | 'In progress'
  | 'Transfer in pending'
  | 'Transfer out pending'
  | 'Transferred'
  | 'Discharge pending'
  | 'Discharged'
  | 'Admission pending'
  | 'Completed'
  | 'Deceased';
export type Admission = {
  tenantId?: number;
  attendingPhysicianId?: number | null;
  attendingPhysician?: StaffMember;
  patientId?: number;
  patient?: Patient;
  facilityId?: number;
  facility?: Facility;
  admittingEncounterId?: number | null;
  admittingEncounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type AdmissionRead = {
  tenantId?: number;
  attendingPhysicianId?: number | null;
  attendingPhysician?: StaffMember;
  patientId?: number;
  patient?: PatientRead;
  facilityId?: number;
  facility?: Facility;
  admittingEncounterId?: number | null;
  admittingEncounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type StaffEncounter = {
  tenantId?: number;
  staffId?: number;
  staff?: StaffMember;
  encounterId?: number;
  encounter?: PatientEncounter;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type StaffEncounterRead = {
  tenantId?: number;
  staffId?: number;
  staff?: StaffMember;
  encounterId?: number;
  encounter?: PatientEncounter;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InvestigationRange = {
  investigationId?: number;
  investigation?: Investigation;
  ageMin?: number | null;
  ageMinUnit?: UnitOfTime;
  ageMax?: number | null;
  ageMaxUnit?: UnitOfTime;
  gender?: GenderType;
  unit?: string | null;
  minRange?: number | null;
  maxRange?: number | null;
  other?: string | null;
  id?: number;
};
export type InvestigationSuggestion = {
  investigationId?: number | null;
  investigation?: Investigation;
  category?: string | null;
  result?: string | null;
  snomedId?: string | null;
  normal?: boolean;
  id?: number;
};
export type InvestigationBinaryResult = {
  investigationId?: number;
  investigation?: Investigation;
  result?: string | null;
  normal?: boolean;
  id?: number;
};
export type DipstickResult = {
  result?: string | null;
  order?: number;
  id?: number;
};
export type DipstickRange = {
  unit?: string | null;
  results?: DipstickResult[] | null;
  id?: number;
};
export type DipstickInvestigation = {
  investigationId?: number | null;
  investigation?: Investigation;
  parameter?: string | null;
  ranges?: DipstickRange[] | null;
  id?: number;
};
export type RadiologyAndPulmonaryInvestigation = {
  investigationId?: number;
  investigation?: Investigation;
  name?: string | null;
  snomedId?: string | null;
  category?: string | null;
  id?: number;
};
export type MicrobiologyInvestigation = {
  investigationId?: number | null;
  investigation?: Investigation;
  methyleneBlueStain?: boolean;
  antibioticSensitivityTest?: boolean;
  nugentScore?: boolean;
  culture?: boolean;
  gramStain?: boolean;
  microscopy?: boolean;
  commonResults?: boolean;
  id?: number;
};
export type Investigation = {
  partOfId?: number | null;
  partOf?: Investigation;
  type?: string | null;
  name?: string | null;
  shortName?: string | null;
  snomedId?: string | null;
  synonyms?: string | null;
  specimen?: string | null;
  specificOrganism?: string | null;
  components?: Investigation[] | null;
  ranges?: InvestigationRange[] | null;
  suggestions?: InvestigationSuggestion[] | null;
  results?: InvestigationBinaryResult[] | null;
  dipstick?: DipstickInvestigation[] | null;
  radiologyAndPulmonary?: RadiologyAndPulmonaryInvestigation[] | null;
  microbiology?: MicrobiologyInvestigation;
  id?: number;
};
export type DiagnosisType = 0 | 1;
export type SelectedDiagnosis = {
  name?: string | null;
  type?: DiagnosisType;
  diagnosis?: Diagnosis;
  diagnosisId?: number | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SelectedDiagnosisRead = {
  name?: string | null;
  type?: DiagnosisType;
  diagnosis?: Diagnosis;
  diagnosisId?: number | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Diagnosis = {
  tenantId?: number;
  patientId?: number;
  sctid?: number;
  description?: string | null;
  notes?: string | null;
  status?: number | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  selectedDiagnoses?: SelectedDiagnosis[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type DiagnosisRead = {
  tenantId?: number;
  patientId?: number;
  sctid?: number;
  description?: string | null;
  notes?: string | null;
  status?: number | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  selectedDiagnoses?: SelectedDiagnosisRead[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InvestigationStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type InvestigationRequest = {
  tenantId?: number;
  investigationId?: number;
  investigation?: Investigation;
  patientId?: number;
  patient?: Patient;
  patientEncounter?: PatientEncounter;
  patientEncounterId?: number | null;
  urgent?: boolean;
  withContrast?: boolean;
  notes?: string | null;
  diagnosisId?: number | null;
  diagnosis?: Diagnosis;
  investigationStatus?: InvestigationStatus;
  procedureId?: number | null;
  procedure?: Procedure;
  specimen?: string | null;
  specificOrganism?: string | null;
  bodyPart?: string | null;
  views?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InvestigationRequestRead = {
  tenantId?: number;
  investigationId?: number;
  investigation?: Investigation;
  patientId?: number;
  patient?: PatientRead;
  patientEncounter?: PatientEncounter;
  patientEncounterId?: number | null;
  urgent?: boolean;
  withContrast?: boolean;
  notes?: string | null;
  diagnosisId?: number | null;
  diagnosis?: DiagnosisRead;
  investigationStatus?: InvestigationStatus;
  procedureId?: number | null;
  procedure?: ProcedureRead;
  specimen?: string | null;
  specificOrganism?: string | null;
  bodyPart?: string | null;
  views?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InvestigationComponentResult = {
  tenantId?: number;
  investigationResultId?: number;
  investigationResult?: InvestigationResult;
  category?: string | null;
  name?: string | null;
  result?: string | null;
  numericResult?: number;
  reference?: string | null;
  rangeMin?: number;
  rangeMax?: number;
  unit?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InvestigationComponentResultRead = {
  tenantId?: number;
  investigationResultId?: number;
  investigationResult?: InvestigationResult;
  category?: string | null;
  name?: string | null;
  result?: string | null;
  numericResult?: number;
  reference?: string | null;
  rangeMin?: number;
  rangeMax?: number;
  unit?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InvestigationResult = {
  tenantId?: number;
  patientId?: number;
  investigationId?: number;
  investigation?: Investigation;
  investigationRequestId?: number;
  investigationRequest?: InvestigationRequest;
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
  investigationComponentResults?: InvestigationComponentResult[] | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  procedureId?: number | null;
  procedure?: Procedure;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type InvestigationResultRead = {
  tenantId?: number;
  patientId?: number;
  investigationId?: number;
  investigation?: Investigation;
  investigationRequestId?: number;
  investigationRequest?: InvestigationRequestRead;
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
  investigationComponentResults?: InvestigationComponentResultRead[] | null;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  procedureId?: number | null;
  procedure?: ProcedureRead;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type NursingDiagnosis = {
  name?: string | null;
  code?: string | null;
  outcomes?: NursingOutcome[] | null;
  id?: number;
};
export type NursingActivity = {
  name?: string | null;
  code?: string | null;
  nursingCareInterventionsId?: number | null;
  nursingCareIntervention?: NursingCareIntervention;
  id?: number;
};
export type NursingCareIntervention = {
  name?: string | null;
  code?: string | null;
  nursingOutcomesId?: number | null;
  nursingOutcome?: NursingOutcome;
  activities?: NursingActivity[] | null;
  id?: number;
};
export type NursingOutcome = {
  name?: string | null;
  code?: string | null;
  diagnosisId?: number | null;
  diagnosis?: NursingDiagnosis;
  interventions?: NursingCareIntervention[] | null;
  id?: number;
};
export type PatientNursingOutcome = {
  nursingCareSummaryId?: number;
  nursingCareSummary?: NursingCareSummary;
  nursingOutcomeId?: number | null;
  nursingOutcome?: NursingOutcome;
  nursingOutcomesText?: string | null;
  id?: number;
};
export type PatientNursingOutcomeRead = {
  nursingCareSummaryId?: number;
  nursingCareSummary?: NursingCareSummary;
  nursingOutcomeId?: number | null;
  nursingOutcome?: NursingOutcome;
  nursingOutcomesText?: string | null;
  id?: number;
};
export type PatientNursingCareIntervention = {
  nursingCareSummaryId?: number;
  nursingCareSummary?: NursingCareSummary;
  nursingCareInterventionsId?: number | null;
  nursingCareIntervention?: NursingCareIntervention;
  nursingCareInterventionsText?: string | null;
  id?: number;
};
export type PatientNursingCareInterventionRead = {
  nursingCareSummaryId?: number;
  nursingCareSummary?: NursingCareSummary;
  nursingCareInterventionsId?: number | null;
  nursingCareIntervention?: NursingCareIntervention;
  nursingCareInterventionsText?: string | null;
  id?: number;
};
export type PatientNursingActivity = {
  nursingCareSummaryId?: number;
  nursingCareSummary?: NursingCareSummary;
  nursingActivitiesId?: number | null;
  nursingActivity?: NursingActivity;
  nursingActivitiesText?: string | null;
  id?: number;
};
export type PatientNursingActivityRead = {
  nursingCareSummaryId?: number;
  nursingCareSummary?: NursingCareSummary;
  nursingActivitiesId?: number | null;
  nursingActivity?: NursingActivity;
  nursingActivitiesText?: string | null;
  id?: number;
};
export type NursingEvaluation = {
  name?: string | null;
  code?: string | null;
  id?: number;
};
export type NursingCareSummary = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  encounterId?: number;
  encounter?: PatientEncounter;
  nursingDiagnosisText?: string | null;
  nursingEvaluationText?: string | null;
  nursingDiagnosisId?: number | null;
  nursingEvaluationId?: number | null;
  nursingOutcomes?: PatientNursingOutcome[] | null;
  nursingCareInterventions?: PatientNursingCareIntervention[] | null;
  nursingActivities?: PatientNursingActivity[] | null;
  nursingEvaluation?: NursingEvaluation;
  nursingDiagnosis?: NursingDiagnosis;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type NursingCareSummaryRead = {
  tenantId?: number;
  patientId?: number;
  patient?: PatientRead;
  encounterId?: number;
  encounter?: PatientEncounter;
  nursingDiagnosisText?: string | null;
  nursingEvaluationText?: string | null;
  nursingDiagnosisId?: number | null;
  nursingEvaluationId?: number | null;
  nursingOutcomes?: PatientNursingOutcomeRead[] | null;
  nursingCareInterventions?: PatientNursingCareInterventionRead[] | null;
  nursingActivities?: PatientNursingActivityRead[] | null;
  nursingEvaluation?: NursingEvaluation;
  nursingDiagnosis?: NursingDiagnosis;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientEncounter = {
  tenantId?: number;
  patientId?: number;
  patient?: Patient;
  appointmentId?: number | null;
  appointment?: PatientAppointment;
  timeIn?: string | null;
  timeOut?: string | null;
  status?: EncounterStatusType;
  serviceCentre?: ServiceCentreType;
  unitId?: number | null;
  unit?: OrganizationUnitExtended;
  facilityId?: number | null;
  facility?: Facility;
  admissionId?: number | null;
  admission?: Admission;
  wardId?: number | null;
  ward?: Ward;
  wardBedId?: number | null;
  wardBed?: WardBed;
  staffEncounters?: StaffEncounter[] | null;
  investigationResults?: InvestigationResult[] | null;
  nursingCareSummaries?: NursingCareSummary[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type PatientEncounterRead = {
  tenantId?: number;
  patientId?: number;
  patient?: PatientRead;
  appointmentId?: number | null;
  appointment?: PatientAppointmentRead;
  timeIn?: string | null;
  timeOut?: string | null;
  status?: EncounterStatusType;
  serviceCentre?: ServiceCentreType;
  unitId?: number | null;
  unit?: OrganizationUnitExtendedRead;
  facilityId?: number | null;
  facility?: Facility;
  admissionId?: number | null;
  admission?: AdmissionRead;
  wardId?: number | null;
  ward?: Ward;
  wardBedId?: number | null;
  wardBed?: WardBed;
  staffEncounters?: StaffEncounterRead[] | null;
  investigationResults?: InvestigationResultRead[] | null;
  nursingCareSummaries?: NursingCareSummaryRead[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type WardBed = {
  tenantId?: number;
  bedNumber?: string | null;
  isActive?: boolean;
  bedTypeId?: number;
  bedType?: BedType;
  wardId?: number;
  wardFk?: Ward;
  encounterId?: number | null;
  patientEncounter?: PatientEncounter;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type WardBedRead = {
  tenantId?: number;
  bedNumber?: string | null;
  isActive?: boolean;
  bedTypeId?: number;
  bedType?: BedTypeRead;
  wardId?: number;
  wardFk?: Ward;
  encounterId?: number | null;
  patientEncounter?: PatientEncounterRead;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Ward = {
  tenantId?: number;
  name: string;
  description?: string | null;
  isActive?: boolean;
  facilityId?: number;
  facilityFk?: Facility;
  wardBeds?: WardBed[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type WardRead = {
  tenantId?: number;
  name: string;
  description?: string | null;
  isActive?: boolean;
  facilityId?: number;
  facilityFk?: Facility;
  wardBeds?: WardBedRead[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type RoomAvailability = {
  roomsId?: number;
  rooms?: Rooms;
  dayOfWeek?: DayOfWeek;
  startTime?: string | null;
  endTime?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type RoomAvailabilityRead = {
  roomsId?: number;
  rooms?: Rooms;
  dayOfWeek?: DayOfWeek;
  startTime?: string | null;
  endTime?: string | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type RoomType = 0 | 1;
export type Rooms = {
  tenantId?: number | null;
  name?: string | null;
  facilityId?: number;
  facilityFk?: Facility;
  isActive?: boolean;
  availabilities?: RoomAvailability[] | null;
  minTimeInterval?: number | null;
  type?: RoomType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type RoomsRead = {
  tenantId?: number | null;
  name?: string | null;
  facilityId?: number;
  facilityFk?: Facility;
  isActive?: boolean;
  availabilities?: RoomAvailabilityRead[] | null;
  minTimeInterval?: number | null;
  type?: RoomType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityBank = {
  tenantId?: number;
  bankName?: string | null;
  bankAccountHolder?: string | null;
  bankAccountNumber?: string | null;
  isDefault?: boolean;
  isActive?: boolean;
  facilityId?: number;
  facility?: Facility;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityBankRead = {
  tenantId?: number;
  bankName?: string | null;
  bankAccountHolder?: string | null;
  bankAccountNumber?: string | null;
  isDefault?: boolean;
  isActive?: boolean;
  facilityId?: number;
  facility?: Facility;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Facility = {
  tenantId?: number;
  name: string;
  isActive?: boolean;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  website?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postCode?: string | null;
  bankName?: string | null;
  bankAccountHolder?: string | null;
  bankAccountNumber?: string | null;
  useGroupAddress?: boolean | null;
  useGroupContacts?: boolean | null;
  useGroupBilling?: boolean | null;
  hasPharmacy?: boolean | null;
  hasLaboratory?: boolean | null;
  isDefault?: boolean;
  level?: FacilityLevel;
  groupId?: number;
  groupFk?: FacilityGroup;
  typeId?: number;
  typeFk?: FacilityType;
  patientCodeTemplate?: PatientCodeTemplate;
  staffCodeTemplateFk?: StaffCodeTemplate;
  logoId?: string | null;
  wards?: Ward[] | null;
  rooms?: Rooms[] | null;
  assignedStaff?: FacilityStaff[] | null;
  patientCodeMappings?: PatientCodeMapping[] | null;
  facilityBanks?: FacilityBank[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityRead = {
  tenantId?: number;
  name: string;
  isActive?: boolean;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  website?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postCode?: string | null;
  bankName?: string | null;
  bankAccountHolder?: string | null;
  bankAccountNumber?: string | null;
  useGroupAddress?: boolean | null;
  useGroupContacts?: boolean | null;
  useGroupBilling?: boolean | null;
  hasPharmacy?: boolean | null;
  hasLaboratory?: boolean | null;
  isDefault?: boolean;
  level?: FacilityLevel;
  groupId?: number;
  groupFk?: FacilityGroupRead;
  typeId?: number;
  typeFk?: FacilityTypeRead;
  patientCodeTemplate?: PatientCodeTemplateRead;
  staffCodeTemplateFk?: StaffCodeTemplateRead;
  logoId?: string | null;
  wards?: WardRead[] | null;
  rooms?: RoomsRead[] | null;
  assignedStaff?: FacilityStaff[] | null;
  patientCodeMappings?: PatientCodeMappingRead[] | null;
  facilityBanks?: FacilityBankRead[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityStaff = {
  isDefault?: boolean;
  facilityId?: number;
  facilityFk?: Facility;
  staffMemberId?: number;
  staffMemberFk?: StaffMember;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type FacilityStaffRead = {
  isDefault?: boolean;
  facilityId?: number;
  facilityFk?: FacilityRead;
  staffMemberId?: number;
  staffMemberFk?: StaffMember;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type JobTitle = {
  tenantId?: number | null;
  name: string;
  shortName?: string | null;
  isActive?: boolean | null;
  isStatic?: boolean;
  jobLevels?: JobLevel[] | null;
  facility?: Facility;
  facilityId?: number | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type JobTitleRead = {
  tenantId?: number | null;
  name: string;
  shortName?: string | null;
  isActive?: boolean | null;
  isStatic?: boolean;
  jobLevels?: JobLevel[] | null;
  facility?: FacilityRead;
  facilityId?: number | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type JobLevel = {
  tenantId?: number | null;
  name: string;
  rank?: number;
  shortName?: string | null;
  isActive?: boolean | null;
  isStatic?: boolean;
  jobTitleId?: number;
  jobTitleFk?: JobTitle;
  titleOfAddress?: TitleType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type JobLevelRead = {
  tenantId?: number | null;
  name: string;
  rank?: number;
  shortName?: string | null;
  isActive?: boolean | null;
  isStatic?: boolean;
  jobTitleId?: number;
  jobTitleFk?: JobTitleRead;
  titleOfAddress?: TitleType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type JobServiceCentre = {
  tenantId?: number;
  jobId?: number;
  job?: Job;
  serviceCentre?: ServiceCentreType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type JobServiceCentreRead = {
  tenantId?: number;
  jobId?: number;
  job?: Job;
  serviceCentre?: ServiceCentreType;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type WardJob = {
  tenantId?: number;
  wardId?: number;
  ward?: Ward;
  jobId?: number;
  job?: Job;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type WardJobRead = {
  tenantId?: number;
  wardId?: number;
  ward?: WardRead;
  jobId?: number;
  job?: Job;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Job = {
  tenantId?: number;
  isPrimary?: boolean;
  isActive?: boolean;
  staffMemberId?: number;
  staffMember?: StaffMember;
  jobLevelId?: number | null;
  jobLevel?: JobLevel;
  teamRoleId?: number | null;
  teamRole?: Role;
  jobRoleId?: number | null;
  jobRole?: Role;
  facilityId?: number | null;
  facility?: Facility;
  unitId?: number | null;
  unit?: OrganizationUnitExtended;
  departmentId?: number | null;
  department?: OrganizationUnitExtended;
  jobServiceCentres?: JobServiceCentre[] | null;
  wardsJobs?: WardJob[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type JobRead = {
  tenantId?: number;
  isPrimary?: boolean;
  isActive?: boolean;
  staffMemberId?: number;
  staffMember?: StaffMember;
  jobLevelId?: number | null;
  jobLevel?: JobLevelRead;
  teamRoleId?: number | null;
  teamRole?: RoleRead;
  jobRoleId?: number | null;
  jobRole?: RoleRead;
  facilityId?: number | null;
  facility?: FacilityRead;
  unitId?: number | null;
  unit?: OrganizationUnitExtendedRead;
  departmentId?: number | null;
  department?: OrganizationUnitExtendedRead;
  jobServiceCentres?: JobServiceCentreRead[] | null;
  wardsJobs?: WardJobRead[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type StaffMember = {
  userId?: number;
  userFk?: User;
  staffCode?: string | null;
  adminRoleId?: number | null;
  adminRole?: Role;
  contractStartDate?: string | null;
  contractEndDate?: string | null;
  assignedFacilities?: FacilityStaff[] | null;
  jobs?: Job[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type StaffMemberRead = {
  userId?: number;
  userFk?: User;
  staffCode?: string | null;
  adminRoleId?: number | null;
  adminRole?: RoleRead;
  contractStartDate?: string | null;
  contractEndDate?: string | null;
  assignedFacilities?: FacilityStaffRead[] | null;
  jobs?: JobRead[] | null;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type UserToken = {
  tenantId?: number | null;
  userId?: number;
  loginProvider?: string | null;
  name?: string | null;
  value?: string | null;
  expireDate?: string | null;
  id?: number;
};
export type UserLogin = {
  tenantId?: number | null;
  userId?: number;
  loginProvider: string;
  providerKey: string;
  id?: number;
};
export type UserRole = {
  tenantId?: number | null;
  userId?: number;
  roleId?: number;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type UserClaim = {
  tenantId?: number | null;
  userId?: number;
  claimType?: string | null;
  claimValue?: string | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type UserPermissionSetting = {
  userId?: number;
  tenantId?: number | null;
  name: string;
  isGranted?: boolean;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type Setting = {
  tenantId?: number | null;
  userId?: number | null;
  name: string;
  value?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type User = {
  profilePictureId?: string | null;
  shouldChangePasswordOnNextLogin?: boolean;
  signInTokenExpireTimeUtc?: string | null;
  signInToken?: string | null;
  googleAuthenticatorKey?: string | null;
  recoveryCode?: string | null;
  organizationUnits?: UserOrganizationUnit[] | null;
  title?: TitleType;
  middleName?: string | null;
  altEmailAddress?: string | null;
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
  countryFk?: Country;
  staffMemberFk?: StaffMember;
  patientFk?: Patient;
  normalizedUserName: string;
  normalizedEmailAddress: string;
  concurrencyStamp?: string | null;
  tokens?: UserToken[] | null;
  deleterUser?: User;
  creatorUser?: User;
  lastModifierUser?: User;
  authenticationSource?: string | null;
  userName: string;
  tenantId?: number | null;
  emailAddress: string;
  name: string;
  surname: string;
  password: string;
  emailConfirmationCode?: string | null;
  passwordResetCode?: string | null;
  lockoutEndDateUtc?: string | null;
  accessFailedCount?: number;
  isLockoutEnabled?: boolean;
  phoneNumber?: string | null;
  isPhoneNumberConfirmed?: boolean;
  securityStamp?: string | null;
  isTwoFactorEnabled?: boolean;
  logins?: UserLogin[] | null;
  roles?: UserRole[] | null;
  claims?: UserClaim[] | null;
  permissions?: UserPermissionSetting[] | null;
  settings?: Setting[] | null;
  isEmailConfirmed?: boolean;
  isActive?: boolean;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type UserRead = {
  profilePictureId?: string | null;
  shouldChangePasswordOnNextLogin?: boolean;
  signInTokenExpireTimeUtc?: string | null;
  signInToken?: string | null;
  googleAuthenticatorKey?: string | null;
  recoveryCode?: string | null;
  organizationUnits?: UserOrganizationUnit[] | null;
  title?: TitleType;
  middleName?: string | null;
  altEmailAddress?: string | null;
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
  countryFk?: Country;
  staffMemberFk?: StaffMemberRead;
  patientFk?: PatientRead;
  displayName?: string | null;
  fullName?: string | null;
  normalizedUserName: string;
  normalizedEmailAddress: string;
  concurrencyStamp?: string | null;
  tokens?: UserToken[] | null;
  deleterUser?: UserRead;
  creatorUser?: UserRead;
  lastModifierUser?: UserRead;
  authenticationSource?: string | null;
  userName: string;
  tenantId?: number | null;
  emailAddress: string;
  name: string;
  surname: string;
  password: string;
  emailConfirmationCode?: string | null;
  passwordResetCode?: string | null;
  lockoutEndDateUtc?: string | null;
  accessFailedCount?: number;
  isLockoutEnabled?: boolean;
  phoneNumber?: string | null;
  isPhoneNumberConfirmed?: boolean;
  securityStamp?: string | null;
  isTwoFactorEnabled?: boolean;
  logins?: UserLogin[] | null;
  roles?: UserRole[] | null;
  claims?: UserClaim[] | null;
  permissions?: UserPermissionSetting[] | null;
  settings?: Setting[] | null;
  isEmailConfirmed?: boolean;
  isActive?: boolean;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type DelegatedUser = {
  tenantId?: number;
  email?: string | null;
  status?: DelegatedUserEnum;
  creatorUser?: User;
  lastModifierUser?: User;
  deleterUser?: User;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type DelegatedUserRead = {
  tenantId?: number;
  email?: string | null;
  status?: DelegatedUserEnum;
  creatorUser?: UserRead;
  lastModifierUser?: UserRead;
  deleterUser?: UserRead;
  isDeleted?: boolean;
  deleterUserId?: number | null;
  deletionTime?: string | null;
  lastModificationTime?: string | null;
  lastModifierUserId?: number | null;
  creationTime?: string;
  creatorUserId?: number | null;
  id?: number;
};
export type SwitchToLinkedAccountOutput = {
  switchAccountToken?: string | null;
  tenancyName?: string | null;
};
export type SwitchToLinkedAccountInput = {
  targetTenantId?: number | null;
  targetUserId?: number;
};
export type SwitchedAccountAuthenticateResultModel = {
  accessToken?: string | null;
  encryptedAccessToken?: string | null;
  expireInSeconds?: number;
};
export const {
  useApiServicesAppAccountIstenantavailablePostMutation,
  useApiServicesAppAccountGettenantsGetQuery,
  useApiServicesAppAccountResolvetenantidPostMutation,
  useApiServicesAppAccountRegisterPostMutation,
  useApiServicesAppAccountSendpasswordresetcodePostMutation,
  useApiServicesAppAccountResetpasswordPostMutation,
  useApiServicesAppAccountSendemailactivationlinkPostMutation,
  useApiServicesAppAccountActivateemailPostMutation,
  useApiServicesAppAccountImpersonateuserPostMutation,
  useApiServicesAppAccountImpersonatetenantPostMutation,
  useApiServicesAppAccountDelegatedimpersonatePostMutation,
  useApiServicesAppAccountDelegateusersPostMutation,
  useApiServicesAppAccountGetdelegateusersGetQuery,
  useApiServicesAppAccountRemovedelegateuserDeleteMutation,
  useApiServicesAppAccountBacktoimpersonatorPostMutation,
  useApiServicesAppAccountSwitchtolinkedaccountPostMutation,
  useApiTokenauthLinkedaccountauthenticatePostMutation,
} = injectedRtkApi;

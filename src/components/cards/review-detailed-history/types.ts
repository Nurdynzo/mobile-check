import {GenderType} from '@/state/services/patientApi';
import {ReactNode} from 'react';

type details = string | undefined | number | null;

export type PatientDetailsProps = {
  Header?: ReactNode;
  fullName: string;
  dob: string;
  phoneNumber: string;
  gender: GenderType | undefined;
  patientCode: string;
  maritalStatus?: details;
  address?: details;
  emailAddress?: details;
  govtIssuedId?: details;
  countryId?: details;
  stateOfOriginId?: details;
  lgaOfOriginId?: details;
  occupationId?: details;
  familyHistory?: {
    noOfSpouses?: details;
    positionInFamily?: details;
    nuclearFamilySize?: details;
    noOfMaleChildren?: details;
    noOfFemaleChildren?: details;
    totalChildren?: details;
    noOfMaleSiblings?: details;
    noOfFemaleSiblings?: details;
    totalSiblings?: details;
  };
  otherDetails?: {
    workLocation: details;
    bloodGroup: details;
    genoType: details;
    ethnicity: details;
    religion: details;
  };
};

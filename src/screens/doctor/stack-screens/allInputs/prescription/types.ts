import {SearchMedicationForReturnDto} from '@/state/services/medicationApi';
import {CreateVaccinationDto} from '@/state/services/vaccineApi';
import {RefObject} from 'react';
import {IHandles} from 'react-native-modalize/lib/options';

export type DefaultInputState = {
  mainSearchResult: string;
  note: string;
};

export type Pill = {
  value: string;
  type: string;
  obj?: SearchMedicationForReturnDto;
};

export type SelectedPrescriptionListType = {
  item: PrescriptionState;
  openEditSelectedPrescriptionSheet: () => void;
  editSelectedPrescriptionSheet: RefObject<IHandles>;
  setPrescription: (item: PrescriptionState) => void;
  setPrescriptionState: (state: PrescriptionState[]) => void;
  prescriptionState: PrescriptionState[];
  index: number;
};

export type PrescriptionState = DefaultInputState & {
  mainSearchResult: string;
  note: string;
  activePills: Pill[];
  dosage: {value: string; label: string} | null;
  duration: {value: string; label: string} | null;
  frequency: {value: string; label: string} | null;
  direction: {value: string; label: string} | null;
};

export type historyDoseType = {
  title: string;
  interval: string;
  howLong: number | string;
  hasComplication: boolean;
  note: string;
};

type VaccineSchedule = {
  id: number;
  dosage: number | null;
  doses: number;
  routeOfAdministration: string | null;
  ageMin: number;
  ageMinUnit: string;
  ageMax: number | null;
  ageMaxUnit: string | null;
  notes: string;
};

type Vaccine = {
  id: number;
  name: string;
  fullName: string | null;
  schedules: VaccineSchedule[];
};

//TODO(Zucci): Ask the Backend guys to return numberOfDoses prop in the types For VaccinationHistoryResponseDto, then use it instead.
export type PatientVaccinationDto = {
  id: number;
  patientId: number;
  vaccineId: number;
  vaccine: Vaccine;
  numberOfDoses: number;
  hasComplication: boolean;
  lastVaccineDuration: string;
  note: string;
};

export interface VaccineIndexAndDisease {
  index: number;
  name: string;
}

export type Disease = {
  name: string;
  data: {
    vaccines: CreateVaccinationDto[];
  };
};

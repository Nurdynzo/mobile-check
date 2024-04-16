import {cellCountType} from '@/screens/common/investigations/record-investigations/common/form/investigation-cell-count-selection-view/type';
import {CSFAnalysisFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/chemistry/csf-analysis-form/type';
import {SerumPregnancyTestFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/chemistry/serum-pregnancy-test-form/type';
import {UrineGlucoseFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/chemistry/urine-glucose-form/type';
import {UrinePregnancyTestFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/chemistry/urine-pregnancy-test-form/type';
import {BloodFilmFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/haematology/blood-film-form/type';
import {BloodGroupAndRhFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/haematology/blood-group-and-rh-form/type';
import {G6pdScreeningFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/haematology/g6pd-screening-form/type';
import {GroupAndCrossMatchFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/haematology/group-and-cross-match-form/type';
import {SicklingTestFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/haematology/sickling-test-form/type';
import {CD4CountFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/serology/cd4-count-form/type';
import {HepatitisBProfileFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/serology/hepatitis-b-profile-form/type';
import {HepatitisBsurfaceAntigenFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/serology/hepatitis-b-surface-antigen-form/type';
import {HepatitisCvirusFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/serology/hepatitis-c-virus-form/type';
import {ViralLoadFormSpecimens} from '@/screens/common/investigations/record-investigations/common/form/unique-forms/serology/viral-load-form/type';
import {microbiologyInvestigationFilterOptions} from '@/screens/common/investigations/record-investigations/common/microbiology-form-view/types';
import {EMPTY_STRING} from '../utils';

export const CONSTANT_SPECIMEN_REFERENCE = {
  NON_REACTIVE_OR_REACTIVE: 'Non reactive',
  NON_DETECTED_AND_DETECTED: 'Non detected',
  NEGATIVE_OR_POSITIVE: 'Negative',
  NO_AGGLUTINATION_OR_AGGLUTINATION: 'No agglutination',
}; // @ikeoluwa's guidance: Use "NEGATIVE" for negative/positive and "NON REACTIVE" for reactive/non-reactive references.
export type uniqueFormComponentTypes =
  | 'range'
  | 'tab'
  | 'suggestions'
  | 'drop down'
  | 'tab with ranges'
  | 'results';

export type negativeOrPostiveTabTypes = 'Negative' | 'Positive';
export type reactiveOrNonReactiveTypes = 'Non-reactive' | 'Reactive' | '';
export type serumPregnancyTestTabTypes = 'Detected' | 'Non Detected';
export type sputumAcidFastBacilliTabTypes =
  | 'Negative'
  | '1 - 9/100F'
  | '10-100/100F';
export type notDetectedAndDetected = 'Detected' | 'Not-detected';
export type noAgglutinationAndAgglutination =
  | 'No agglutination'
  | 'Agglutination';

export const hepatitisBprofileSpecimenComponents: Array<HepatitisBProfileFormSpecimens> =
  ['Hepatitis B surface antigen', 'Hepatitis B antigen'];

export const hepatitisCvirusSpecimenComponents: Array<HepatitisCvirusFormSpecimens> =
  ['Hepatitis C virus IgM', 'Hepatitis C virus IgG'];

export const hepatitisBsurfaceAntigenSpecimenComponents: Array<HepatitisBsurfaceAntigenFormSpecimens> =
  ['Hepatitis B surface antigen'];

export type cd4SpecimenFormSpecimens = {
  specimen: CD4CountFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];
export type viralLoadSpecimen = {
  specimen: ViralLoadFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const bloodGroupAndRhTabs: Array<{
  id: number;
  name: negativeOrPostiveTabTypes;
}> = [
  {
    id: 1,
    name: 'Negative',
  },
  {
    id: 2,
    name: 'Positive',
  },
];
export const sputumAcidFastBacilliTab: Array<{
  id: number;
  name: sputumAcidFastBacilliTabTypes;
}> = [
  {
    id: 1,
    name: 'Negative',
  },
  {
    id: 2,
    name: '1 - 9/100F',
  },
  {
    id: 3,
    name: '10-100/100F',
  },
];

export const CSFAnalysisTabs: Array<{
  id: number;
  name: negativeOrPostiveTabTypes;
}> = [
  {
    id: 1,
    name: 'Negative',
  },
  {
    id: 2,
    name: 'Positive',
  },
];

export const g6pdScreeningTabs: Array<{
  id: number;
  name: negativeOrPostiveTabTypes;
}> = [
  {
    id: 1,
    name: 'Negative',
  },
  {
    id: 2,
    name: 'Positive',
  },
];

export const groupAndCrossMatchTabs: Array<{
  id: number;
  name: noAgglutinationAndAgglutination;
}> = [
  {
    id: 1,
    name: 'No agglutination',
  },
  {
    id: 2,
    name: 'Agglutination',
  },
];

export const hepatitisBsurfaceAntigenTabs: Array<{
  id: number;
  name: reactiveOrNonReactiveTypes;
}> = [
  {
    id: 1,
    name: 'Non-reactive',
  },
  {
    id: 2,
    name: 'Reactive',
  },
];

export const hepatitisBprofileTabs: Array<{
  id: number;
  name: reactiveOrNonReactiveTypes;
}> = [
  {
    id: 1,
    name: 'Non-reactive',
  },
  {
    id: 2,
    name: 'Reactive',
  },
];

export const hepatitisCvirusTabs: Array<{
  id: number;
  name: reactiveOrNonReactiveTypes;
}> = [
  {
    id: 1,
    name: 'Non-reactive',
  },
  {
    id: 2,
    name: 'Reactive',
  },
];

export const serumPregnancyTabs: Array<{
  id: number;
  name: notDetectedAndDetected;
}> = [
  {
    id: 1,
    name: 'Detected',
  },
  {
    id: 2,
    name: 'Not-detected',
  },
];

export const sicklingTestTabs: Array<{
  id: number;
  name: negativeOrPostiveTabTypes;
}> = [
  {
    id: 1,
    name: 'Negative',
  },
  {
    id: 2,
    name: 'Positive',
  },
];

export const UrineGlucoseTabs: Array<{
  id: number;
  name: negativeOrPostiveTabTypes;
}> = [
  {
    id: 1,
    name: 'Negative',
  },
  {
    id: 2,
    name: 'Positive',
  },
];

export const urinePregnancyTabs: Array<{
  id: number;
  name: negativeOrPostiveTabTypes;
}> = [
  {
    id: 1,
    name: 'Positive',
  },
  {
    id: 2,
    name: 'Negative',
  },
];

export const UrineProteinsTabs: Array<{
  id: number;
  name: notDetectedAndDetected;
}> = [
  {
    id: 1,
    name: 'Detected',
  },
  {
    id: 2,
    name: 'Not-detected',
  },
];

export type BloodGroupAndRhFormSpecimensTypes = {
  specimen: BloodGroupAndRhFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const bloodGroupAndRhSpecimenComponents: BloodGroupAndRhFormSpecimensTypes =
  [
    {
      specimen: 'Blood group',
      type: 'suggestions',
    },
    {
      specimen: 'rh',
      type: 'tab',
    },
  ];

export type SicklingTestFormSpecimensTypes = {
  specimen: SicklingTestFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const sicklingTestSpecimenComponents: SicklingTestFormSpecimensTypes = [
  {
    specimen: 'Sickling test',
    type: 'tab',
  },
];
export const cd4SpecimenComponents: cd4SpecimenFormSpecimens = [
  {
    specimen: 'CD4 count',
    type: 'range',
    unit: 'mm3 of blood',
  },
];

export const viralLoadSpecimenComponents: viralLoadSpecimen = [
  {
    specimen: 'Viral load',
    type: 'range',
    unit: 'ml',
  },
];

export const gramStainCellCountOptions: Array<{
  id: number;
  name: cellCountType;
}> = [
  {
    name: 'Scanty',
    id: 1,
  },
  {
    name: 'Few',
    id: 2,
  },
  {
    name: 'Moderate',
    id: 3,
  },
  {
    name: 'Copious',
    id: 4,
  },
  {
    name: 'Intracellular',
    id: 5,
  },
];

export const microscopyEstimatedCellCountOptions: Array<{
  id: number;
  name: cellCountType;
}> = [
  {
    name: 'Scanty',
    id: 1,
  },
  {
    name: 'Few',
    id: 2,
  },
  {
    name: 'Moderate',
    id: 3,
  },
  {
    name: 'Copious',
    id: 4,
  },
];
export type GroupAndCrossMatchFormSpecimensTypes = {
  specimen: GroupAndCrossMatchFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const groupAndCrossMatchSpecimenComponents: GroupAndCrossMatchFormSpecimensTypes =
  [
    {
      specimen: 'Group & cross match',
      type: 'tab with ranges',
      unit: 'pints',
    },
    {
      specimen: 'Blood component',
      type: 'drop down',
    },
  ];

export type G6pdScreeningFormSpecimensTypes = {
  specimen: G6pdScreeningFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const g6pdScreeningSpecimenComponents: G6pdScreeningFormSpecimensTypes =
  [
    {
      specimen: 'G6PD level detection',
      type: 'tab',
    },
  ];
export type BloodFilmFormSpecimensTypes = {
  specimen: BloodFilmFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const bloodFilmSpecimenComponents: BloodFilmFormSpecimensTypes = [
  {
    specimen: EMPTY_STRING,
    type: 'tab',
  },
];

export type CSFAnalysisFormSpecimensTypes = {
  specimen: CSFAnalysisFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const csfAnalysisSpecimenComponents: CSFAnalysisFormSpecimensTypes = [
  {
    specimen: EMPTY_STRING,
    type: 'tab',
  },
];

export type SerumPregnancyTestFormSpecimensTypes = {
  specimen: SerumPregnancyTestFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const serumPregnancyTestSpecimenComponents: SerumPregnancyTestFormSpecimensTypes =
  [
    {
      specimen: EMPTY_STRING,
      type: 'tab',
    },
  ];
export type UrineGlucoseFormSpecimensTypes = {
  specimen: UrineGlucoseFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const urineGlucoseTestSpecimenComponents: UrineGlucoseFormSpecimensTypes =
  [
    {
      specimen: EMPTY_STRING,
      type: 'tab',
    },
  ];
export type UrinePregnancyTestFormSpecimensTypes = {
  specimen: UrinePregnancyTestFormSpecimens;
  type: uniqueFormComponentTypes;
  unit?: string;
}[];

export const urinePregnancyTestSpecimenComponents: UrinePregnancyTestFormSpecimensTypes =
  [
    {
      specimen: EMPTY_STRING,
      type: 'tab',
    },
  ];

export const microbiologyFormFilterOptions: Array<microbiologyInvestigationFilterOptions> =
  [
    'Specimen',
    'Gram stain',
    'Methylene blue stain',
    'Macroscopy',
    'Dipstick',
    'Microscopy',
    'Culture',
    'Antibiotic sensitivity',
  ];

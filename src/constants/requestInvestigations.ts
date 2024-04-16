import {TabSwitcherType} from '@/components/tabs/tabs-switcher/types';
import {SummaryMenuForRecordsTypes} from '@/screens/common/investigations/types';

export type ContrastAndPlainPrioritiesTypes = 'Plain' | 'Contrast';
export type PrioritiesTypes = 'Regular' | 'Urgent';

export type InvestigationCategoriesKey =
  | 'Haematology'
  | 'Chemistry'
  | 'Microbiology'
  | 'Serology'
  | 'Radiology + Pulm'
  | 'Electrophysiology';

export type InvestigationCategoriesProps = {
  key: InvestigationCategoriesKey;
  title: InvestigationCategoriesKey;
  disabled?: boolean;
};

export type InvestigationsCatergoryFilterOption =
  | 'Test'
  | 'Specimen'
  | 'Specific organism'
  | 'Body Parts'
  | 'Views';

export type FilterCategoryOption = {
  title: InvestigationsCatergoryFilterOption;
  key: InvestigationsCatergoryFilterOption;
};

export type ContrastAndPlainPrioritiesOptions = {
  name: ContrastAndPlainPrioritiesTypes;
};

export const hematologyAndChemistryFilterOptions: FilterCategoryOption[] = [
  {key: 'Test', title: 'Test'},
  {key: 'Specimen', title: 'Specimen'},
];

export const microbiologyAndSerologyFilterOptions: FilterCategoryOption[] = [
  {key: 'Test', title: 'Test'},
  {key: 'Specimen', title: 'Specimen'},
  {key: 'Specific organism', title: 'Specific organism'},
];

export const radiologyFilterOptions: FilterCategoryOption[] = [
  {key: 'Test', title: 'Test'},
  {key: 'Body Parts', title: 'Body Parts'},
  {key: 'Views', title: 'Views'},
];

export type AllFilterCategoryTabsArray = FilterCategoryOption[];

export const electrophysiologyFilterOptions: FilterCategoryOption[] = [
  {key: 'Test', title: 'Test'},
];

export const investigationsRecentResultsTabs = [
  {
    key: 'Haematology',
    title: 'Haematology',
  },
  {
    key: 'Chemistry',
    title: 'Chemistry',
  },
  {
    key: 'Microbiology',
    title: 'Microbiology',
  },
  {
    key: 'Serology',
    title: 'Serology',
  },
  {
    key: 'Radiology + Pulm',
    title: 'Radiology + Pulm',
  },
  {
    key: 'Electrophysiology',
    title: 'Electrophysiology',
  },
];
export const requestInvestigationCategories: InvestigationCategoriesProps[] = [
  {
    key: 'Haematology',
    title: 'Haematology',
  },
  {
    key: 'Chemistry',
    title: 'Chemistry',
  },
  {
    key: 'Microbiology',
    title: 'Microbiology',
  },
  {
    key: 'Serology',
    title: 'Serology',
  },
  {
    key: 'Radiology + Pulm',
    title: 'Radiology + Pulm',
  },
  {
    key: 'Electrophysiology',
    title: 'Electrophysiology',
  },
];

export const investigationsTabs = [
  'Recent results',
  'Request investigations',
  'Record Investigations',
];

export const investigationsSummaryMenu: Array<SummaryMenuForRecordsTypes> = [
  {
    item: {
      value: 'View related images',
      label: 'View related images',
      id: 1,
    },
  },
  {
    item: {
      value: 'Link to care plan',
      label: 'Link to care plan',
      id: 2,
    },
  },
  {
    item: {
      value: 'Link to event',
      label: 'Link to event',
      id: 4,
    },
  },
  {
    item: {
      value: 'Link to examination',
      label: 'Link to examination',
      id: 5,
    },
  },
  {
    item: {
      value: 'Highlight for attention',
      label: 'Highlight for attention',
      id: 6,
    },
  },

  {
    item: {
      value: 'Delete',
      label: 'Delete',
      id: 7,
      color: 'danger100',
    },
  },
];

export const priorities: TabSwitcherType<PrioritiesTypes>[] = [
  {name: 'Regular', data: 'Regular'},
  {name: 'Urgent', data: 'Urgent'},
];
export const contrastAndPlainPriorities: TabSwitcherType<ContrastAndPlainPrioritiesTypes>[] =
  [
    {name: 'Plain', data: 'Plain'},
    {name: 'Contrast', data: 'Contrast'},
  ];

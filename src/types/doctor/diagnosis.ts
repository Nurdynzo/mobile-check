export type Pill = {
  value: string;
  type: string;
};

export type DiagnosisState = {
  mainSearchResult: string;
  note: string;
  activePills: Array<Pill>;
  diagnosisBodyPart: string;
};

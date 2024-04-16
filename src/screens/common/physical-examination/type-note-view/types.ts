import {SelectItem} from '@/types/selectItemsheet';

export type PhysicalExaminationTypeNoteViewProps = {
  patientId: number;
  encounterId: number;
  noteTabs: string[];
  examinationType: SelectItem<string> | null;
};
export type PhysicalExaminationTypeNoteViewRef = {
  resetAllInputNoteForm: () => void;
};

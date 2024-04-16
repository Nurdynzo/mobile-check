import {OperatingRoomDto} from '@/state/services/roomApi';

export type ScheduleProcedureDataType = {
  procedure: SelectedProcedureType;
  operatingRoom?: OperatingRoomDto;
  duration?: DurationDataType;
  date?: Date;
  time?: Date;
};

export type SelectedProcedureType = {
  procedureId: number;
  procedureName: string;
  snowmedId: number;
};

type DurationDataType = {
  length?: string;
  duration?: string;
};

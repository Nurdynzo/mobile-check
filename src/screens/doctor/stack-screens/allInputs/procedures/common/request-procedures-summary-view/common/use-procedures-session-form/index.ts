import {PatientProcedureResponseDto} from '@/state/services/patientApi';
import {OperatingRoomDto} from '@/state/services/procedureApi';
import {
  useApiServicesAppRoomGetoperatingroomsGetQuery,
  GetFacilityOperatingRoomsForViewDto,
} from '@/state/services/roomApi';
import {SelectItemOptionsProp, SelectItem} from '@/types/selectItemsheet';
import {useState} from 'react';
import {ScheduleProcedureDataType, SelectedProcedureType} from '../../types';
import {EMPTY_STRING} from '@/utils/constants';

export type useProcedureSessionFormType = ReturnType<
  typeof useProceduresSessionForm
>;

const useProceduresSessionForm = ({
  item,
  selectedProcedures,
  setSelectedProcedures,
}: {
  item: PatientProcedureResponseDto;
  selectedProcedures: ScheduleProcedureDataType[];
  setSelectedProcedures: React.Dispatch<
    React.SetStateAction<ScheduleProcedureDataType[]>
  >;
}) => {
  const [isSameSession, setIsSameSession] = useState<boolean>(false);

  const {data: getOperatingRoom, isLoading: isFetchingOperatingRooms} =
    useApiServicesAppRoomGetoperatingroomsGetQuery({});

  let listOfOperatingRooms: SelectItemOptionsProp<OperatingRoomDto> = [];

  if (getOperatingRoom && 'items' in getOperatingRoom) {
    listOfOperatingRooms = (getOperatingRoom?.items ?? []).map(
      (facilityOperatingRoom: GetFacilityOperatingRoomsForViewDto) => ({
        item: {
          id:
            facilityOperatingRoom.operatingRoomResponseDto
              ?.operatingRoomDtos?.[0]?.roomId ?? EMPTY_STRING,
          value:
            facilityOperatingRoom.operatingRoomResponseDto
              ?.operatingRoomDtos?.[0]?.roomName ?? EMPTY_STRING,
          data: facilityOperatingRoom.operatingRoomResponseDto
            ?.operatingRoomDtos?.[0],
        },
      }),
    );
  }

  const toggleSelection = (item: SelectedProcedureType) => {
    const element: ScheduleProcedureDataType = {
      procedure: {
        procedureId: item.procedureId,
        procedureName: item.procedureName,
        snowmedId: item.snowmedId as number,
      },
    };

    const index = selectedProcedures.findIndex(
      proc => proc.procedure.snowmedId === item.snowmedId,
    );

    if (index === -1) {
      setSelectedProcedures(prevSelected => [...prevSelected, element]);
    } else {
      setSelectedProcedures(prevSelected => {
        const updatedSelection = [...prevSelected];
        updatedSelection.splice(index, 1);
        return updatedSelection;
      });
    }
    if (selectedProcedures.length <= 1) {
      handleOnSameSessionToogle(false);
    }
  };

  const itemExists = (item: SelectedProcedureType): boolean => {
    return selectedProcedures.some(
      proc => proc.procedure.snowmedId === item.snowmedId,
    );
  };

  const listOfProcedures: SelectItemOptionsProp<SelectedProcedureType> = (
    item.selectedProcedures ?? []
  ).map(procedure => ({
    item: {
      id: procedure.snowmedId ?? EMPTY_STRING,
      value: procedure.procedureName,
      data: {
        procedureId: item.id as number,
        procedureName: procedure.procedureName as string,
        snowmedId: procedure.snowmedId as number,
      },
    },
  }));

  const scheduledProcedures = selectedProcedures
    .map(element => element.procedure.procedureName)
    .join(', ');

  const handleOnSameSessionToogle = (value: boolean) => {
    setIsSameSession(value);
  };

  const onDateSelected = (date: Date, index: number) => {
    setSelectedProcedures(prev => {
      const updated = [...prev];
      updated[index].date = date;
      return updated;
    });
  };

  const onTimeSelected = (time: Date, index: number) => {
    setSelectedProcedures(prev => {
      const updated = [...prev];
      updated[index].time = time;
      return updated;
    });
  };

  const onLocationSelected = (
    location: SelectItem<OperatingRoomDto>,
    index: number,
  ) => {
    setSelectedProcedures(prev => {
      const updated = [...prev];
      updated[index].operatingRoom = location.data;
      return updated;
    });
  };

  const onChangeDuration = (duration: string, index: number) => {
    setSelectedProcedures(prev => {
      const updated = [...prev];
      if (updated[index].duration) {
        updated[index].duration!.duration = duration;
      } else {
        updated[index].duration = {duration};
      }
      return updated;
    });
  };

  const onChangeDurationLength = (length: string, index: number) => {
    setSelectedProcedures(prev => {
      const updated = [...prev];
      if (updated[index].duration) {
        updated[index].duration!.length = length;
      } else {
        updated[index].duration = {length};
      }
      return updated;
    });
  };

  const validateSelectedProcedures = () => {
    if (isSameSession) {
      return validationChecks(selectedProcedures[0]);
    } else {
      for (const procedure of selectedProcedures) {
        if (!validationChecks(procedure)) {
          return false;
        }
      }
      return true;
    }
  };

  const isSaveDisabled = () => {
    return !validateSelectedProcedures();
  };

  return {
    // toggle button
    isSameSession,
    handleOnSameSessionToogle,

    // save button
    isSaveDisabled,

    // form
    selectedProcedures,
    listOfProcedures,
    listOfOperatingRooms,
    scheduledProcedures,
    onDateSelected,
    onTimeSelected,
    onLocationSelected,
    onChangeDurationLength,
    onChangeDuration,
    isFetchingOperatingRooms,

    toggleSelection,
    itemExists,
  };
};

export default useProceduresSessionForm;

const validationChecks = (procedure: ScheduleProcedureDataType) => {
  if (!procedure || Object.keys(procedure).length === 0) {
    return false;
  }

  if (
    !procedure.procedure ||
    !procedure.procedure.procedureName ||
    !procedure.procedure.snowmedId ||
    !procedure.operatingRoom ||
    !procedure.date ||
    !procedure.time
  ) {
    return false;
  }

  if (
    !procedure.operatingRoom ||
    Object.keys(procedure.operatingRoom).length === 0
  ) {
    return false;
  }

  if (
    procedure.duration &&
    (!procedure.duration.length || !procedure.duration.duration)
  ) {
    return false;
  }

  return true;
};

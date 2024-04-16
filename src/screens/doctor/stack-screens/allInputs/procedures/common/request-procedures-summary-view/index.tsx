import {BinIcon, RightCaretIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AppText} from '@/components/common';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {summaryMenuForRequest} from '@/constants/procedures';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import VoidFunction from '@/types/voidfunction';
import React from 'react';
import useGetRequestedProcedureHistory from '../hooks/use-get-requested-procedure';
import {PatientProcedureResponseDto} from '@/state/services/procedureApi';
import {checkDay, convertToReadableTime} from '@/utils/helpers/convertDateTime';
import {ColorDefinitions} from '@/resources/colors';
import {ModalizeSheetRef} from '@/types/sheet';
import useDeleteProcedureHistory from '../hooks/use-delete-procedure-history';
import {ItemOptionProp} from '@/types/selectItemsheet';
import AppDivider from '@/components/app-divider';
import ScheduleProceduresSheetView from './schedule-procedures-sheet-view';
import SpecializedProceduresSheetView from './specialized-procedures-sheet-view';

const RequestProceduresSummaryView = ({patientId}: {patientId: number}) => {
  const {
    apiRequestedProcedureHistory,
  }: {apiRequestedProcedureHistory: PatientProcedureResponseDto[] | undefined} =
    useGetRequestedProcedureHistory({patientId});
  if (!apiRequestedProcedureHistory?.length) {
    return <></>;
  }
  return (
    <>
      <AppDivider marginBottom={24} />
      <AllInputsHistoryListView
        data={apiRequestedProcedureHistory}
        renderItem={({item}) => <HistoryTile key={item.id} item={item} />}
      />
    </>
  );
};

const HistoryTile = ({item}: {item: PatientProcedureResponseDto}) => {
  const {
    openSheet: openSpecializedProcedureSheet,
    closeSheet: closeSpecializedProcedureSheet,
    sheetRef: specializedProcedureSheetRef,
  } = useSheet();
  const {
    sheetRef: scheduleProceduresSheetRef,
    openSheet: openScheduleProceduresSheet,
    closeSheet: closeScheduleProceduresSheet,
  } = useSheet();
  const {closeSheet, openSheet, sheetRef} = useSheet();
  const {colors} = useColors();
  const {handleDeletion, isDeleting} = useDeleteProcedureHistory();
  const summary = createSummaryFromSelectedProcedures(item);
  const handleSummaryDeletion = () => {
    handleDeletion({id: item.id});
  };

  const handleItemSelection = (value: string) => {
    switch (value) {
      case 'Mark as specialized procedure':
        return openSpecializedProcedureSheet();
      case 'Schedule procedure':
        return openScheduleProceduresSheet();
      case 'Delete':
        return handleSummaryDeletion();
      default:
        return;
    }
  };

  return (
    <>
      <AllInputsHistoryTile
        key={item.id}
        date={checkDay(item.creationTime)}
        time={convertToReadableTime(item.creationTime)}
        onPress={openSheet}
        isLoading={isDeleting}
        textComponent={
          <AppText
            type={'body_2_semibold'}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              textDecorationLine: item.isDeleted ? 'line-through' : undefined,
            }}
            text={[summary, '\n', item?.note]}
          />
        }
      />
      <ProcedureMenuItemSelection
        colors={colors}
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        onSelectItem={handleItemSelection}
      />

      <SpecializedProceduresSheetView
        item={item}
        sheetRef={specializedProcedureSheetRef}
        closeSheet={closeSpecializedProcedureSheet}
      />

      <ScheduleProceduresSheetView
        item={item}
        sheetRef={scheduleProceduresSheetRef}
        closeSheet={closeScheduleProceduresSheet}
      />
    </>
  );
};

export default RequestProceduresSummaryView;

const createSummaryFromSelectedProcedures = (
  item: PatientProcedureResponseDto,
): string => {
  const procedures = item.selectedProcedures ?? [];

  const procedureNames = procedures.map(procedure => procedure.procedureName);

  let summary = procedureNames.join(', ') + '.';
  if (item.isDeleted) {
    summary += `\nDeleted by ${item.deletedUser}`;
  }
  return summary;
};

const ProcedureMenuItemSelection = ({
  colors,
  sheetRef,
  closeSheet,
  onSelectItem,
}: {
  colors: ColorDefinitions;
  sheetRef: ModalizeSheetRef;
  closeSheet: VoidFunction;
  onSelectItem: (item: string) => void;
}) => {
  return (
    <AppSelectItemSheet
      removeHeader
      sheetRef={sheetRef}
      selectOptions={summaryMenuForRequest}
      renderRightIcon={({
        item: menuIcon,
      }: {
        item?: ItemOptionProp<unknown> | undefined;
      }) =>
        menuIcon?.item?.value?.toLowerCase() === 'delete' ? (
          <BinIcon fill={colors.danger100} />
        ) : (
          <RightCaretIcon stroke={colors.text400} />
        )
      }
      onSelectItem={({item: selectedOption}) => {
        onSelectItem(selectedOption.value);
        closeSheet();
      }}
    />
  );
};

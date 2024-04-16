import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  Pill,
  selectTempState,
  setTempStateRadiation,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';

export const useRadiationHandlers = ({type}: {type: 'Present' | 'Absent'}) => {
  const {radiation} = useAppSelector(selectTempState);
  const dispatch = useAppDispatch();

  const handleActivePills = (activePills: Pill[]) => {
    dispatch(
      setTempStateRadiation({
        type: 'activePills',
        data: activePills,
      }),
    );
  };
  const handleAddItem = (item: NewCustomSnowstormSimpleResponseDto) => {
    if (!radiation.activePills.some(el => el.value === item.name)) {
      handleActivePills([
        ...radiation.activePills,
        {
          snowmedId: item.id as string,
          value: item.name as string,
          type,
        },
      ]);
    }
  };

  const handleRemoveItem = (item: NewCustomSnowstormSimpleResponseDto) =>
    handleActivePills(
      radiation.activePills.filter(el => el.value !== item.name),
    );

  const selectedItems = (radiation.activePills ?? []).map(el => ({
    id: el.snowmedId,
    name: el.value,
    isInActive: el.type === 'Absent',
  }));

  const setSelectedItems = (items: NewCustomSnowstormSimpleResponseDto[]) =>
    handleActivePills(
      items.map(item => ({
        snowmedId: item.id as string,
        value: item.name as string,
        type,
      })),
    );
  const setText = (text: string) =>
    dispatch(
      setTempStateRadiation({
        type: 'bodyPartSearch',
        data: text,
      }),
    );

  return {
    handleAddItem,
    handleRemoveItem,
    setSelectedItems,
    setText,
    selectedItems,
    text: radiation.bodyPartSearch,
  };
};

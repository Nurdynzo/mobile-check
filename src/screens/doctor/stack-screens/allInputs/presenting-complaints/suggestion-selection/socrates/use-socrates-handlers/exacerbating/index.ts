import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  Pill,
  selectTempState,
  setTempStateExacerbating,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';

export const useExacerbatingHandlers = ({
  type,
}: {
  type: 'Exacerbating' | 'Relieving';
}) => {
  const {exacerbating} = useAppSelector(selectTempState);
  const dispatch = useAppDispatch();

  const handleActivePills = (activePills: Pill[]) => {
    dispatch(
      setTempStateExacerbating({
        type: 'activePills',
        data: activePills,
      }),
    );
  };

  const handleAddItem = (item: NewCustomSnowstormSimpleResponseDto) => {
    if (!exacerbating.activePills.some(el => el.value === item.name)) {
      handleActivePills([
        ...exacerbating.activePills,
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
      exacerbating.activePills.filter(el => el.value !== item.name),
    );

  const selectedItems = (exacerbating.activePills ?? []).map(el => ({
    id: el.snowmedId,
    name: el.value,
    isInActive: el.type === 'Relieving',
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
      setTempStateExacerbating({
        type: 'symptomSearch',
        data: text,
      }),
    );

  return {
    handleAddItem,
    handleRemoveItem,
    setSelectedItems,
    setText,
    selectedItems,
    text: exacerbating.symptomSearch,
  };
};

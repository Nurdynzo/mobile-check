import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  Pill,
  selectTempState,
  setTempStateAssociations,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';

export const useAssociationsHandlers = ({
  type,
}: {
  type: 'Present' | 'Absent';
}) => {
  const {associations} = useAppSelector(selectTempState);
  const dispatch = useAppDispatch();

  const handleActivePills = (activePills: Pill[]) => {
    dispatch(
      setTempStateAssociations({
        type: 'activePills',
        data: activePills,
      }),
    );
  };

  const handleAddItem = (item: NewCustomSnowstormSimpleResponseDto) => {
    if (!associations.activePills.some(el => el.value === item.name)) {
      handleActivePills([
        ...associations.activePills,
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
      associations.activePills.filter(el => el.value !== item.name),
    );

  const selectedItems = (associations.activePills ?? []).map(el => ({
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
      setTempStateAssociations({
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
    text: associations.bodyPartSearch,
  };
};

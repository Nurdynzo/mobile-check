import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  Pill,
  selectTempState,
  setTempStateCharacter,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';

export const useCharacterHandlers = ({type}: {type: 'Present' | 'Absent'}) => {
  const {character} = useAppSelector(selectTempState);
  const dispatch = useAppDispatch();

  const handleActivePills = (activePills: Pill[]) => {
    dispatch(
      setTempStateCharacter({
        type: 'activePills',
        data: activePills,
      }),
    );
  };
  const handleAddItem = (item: NewCustomSnowstormSimpleResponseDto) => {
    if (!character.activePills.some(el => el.value === item.name)) {
      handleActivePills([
        ...character.activePills,
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
      character.activePills.filter(el => el.value !== item.name),
    );
  const selectedItems = (character.activePills ?? []).map(el => ({
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
      setTempStateCharacter({
        type: 'characteristicSearch',
        data: text,
      }),
    );

  return {
    handleAddItem,
    handleRemoveItem,
    setSelectedItems,
    setText,
    selectedItems,
    text: character.characteristicSearch,
  };
};

import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {useAppDispatch, useAppSelector} from '@/state/hooks';
import {
  Pill,
  selectTempState,
  setTempStateSite,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';

export const useSiteHandlers = () => {
  const {site} = useAppSelector(selectTempState);
  const dispatch = useAppDispatch();

  const handleActivePills = (activePills: Pill[]) => {
    dispatch(
      setTempStateSite({
        type: 'activePills',
        data: activePills,
      }),
    );
  };
  const handleAddItem = (item: NewCustomSnowstormSimpleResponseDto) => {
    if (!site.activePills.some(el => el.value === item.name)) {
      handleActivePills([
        ...site.activePills,
        {
          snowmedId: item?.id as string,
          value: item?.name as string,
        },
      ]);
    }
  };

  const handleRemoveItem = (item: NewCustomSnowstormSimpleResponseDto) =>
    handleActivePills(site.activePills.filter(el => el.value !== item.name));

  const selectedItems = (site.activePills ?? []).map(el => ({
    id: el.snowmedId,
    name: el.value,
  }));

  const setSelectedItems = (items: NewCustomSnowstormSimpleResponseDto[]) =>
    handleActivePills(
      items.map(item => ({
        snowmedId: item.id as string,
        value: item.name as string,
      })),
    );

  const setText = (text: string) =>
    dispatch(
      setTempStateSite({
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
    text: site.bodyPartSearch,
  };
};

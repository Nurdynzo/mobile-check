import {useEffect, useState} from 'react';
import {InvestigationType} from '../../type';
import {
  InvestigationsCatergoryFilterOption,
  InvestigationCategoriesKey,
} from '@/constants/requestInvestigations';
import useAddNoteButton from '@/hooks/useAddNoteButton';
import {EMPTY_STRING} from '@/utils/constants';
import {useNewAllInputsSuggestionForm} from '@/components/forms';

const useInvestigationForm = ({
  activeCategoryFilter,
  activeCategory,
}: {
  activeCategoryFilter: InvestigationsCatergoryFilterOption;
  activeCategory: InvestigationCategoriesKey;
}) => {
  const isSingleSelect = activeCategoryFilter === 'Specimen';
  const addNotesButtonState = useAddNoteButton();

  const [localSelectedInvestigations, setLocalSelectedInvestigations] =
    useState<Array<InvestigationType>>([]);

  const requestInvestigationFormProps =
    useNewAllInputsSuggestionForm<InvestigationType>({
      isSingleSelect,
    });

  const {selectedItems, text, setSelectedItems} = requestInvestigationFormProps;

  const [investigationNotes, setInvestigationNotes] =
    useState<string>(EMPTY_STRING);

  const handleRemoveItemFromLocalInvestigationArray = (
    item: InvestigationType,
  ) => {
    setLocalSelectedInvestigations(prev => prev.filter(i => i.id !== item.id));
  };

  const handleAddItemToLocalInvestigationArray = (
    item: Array<InvestigationType>,
  ) => {
    setLocalSelectedInvestigations(prev => {
      const newItemIds = item.map(i => i.id);
      const filteredPrev = prev.filter(p => !newItemIds.includes(p.id));
      return [...filteredPrev, ...item];
    });
  };

  useEffect(() => {
    const specificData = localSelectedInvestigations.filter(
      item => item.type === activeCategory,
    );
    setSelectedItems(specificData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  useEffect(() => {
    /*
    Wondering how we can make use of only one state.
    */
    if (isSingleSelect) {
      setLocalSelectedInvestigations(prev =>
        prev.filter(item => item.type !== activeCategory),
      );
      setSelectedItems(prev =>
        prev.filter(
          item => (item as InvestigationType).type !== activeCategory,
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSingleSelect]);

  return {
    isSingleSelect,
    addNotesButtonState,
    localSelectedInvestigations,
    setLocalSelectedInvestigations,
    requestInvestigationFormProps,
    selectedItems,
    text,
    setSelectedItems,
    investigationNotes,
    setInvestigationNotes,
    handleRemoveItemFromLocalInvestigationArray,
    handleAddItemToLocalInvestigationArray,
  };
};

export default useInvestigationForm;

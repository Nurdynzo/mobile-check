import {TabSwitcherType} from '@/components/tabs/tabs-switcher/types';
import {
  ContrastAndPlainPrioritiesTypes,
  InvestigationCategoriesKey,
  InvestigationsCatergoryFilterOption,
  PrioritiesTypes,
  contrastAndPlainPriorities,
  priorities,
} from '@/constants/requestInvestigations';
import {EMPTY_STRING} from '@/utils/constants';
import {useState} from 'react';

const useInvestigationSelectionFlags = () => {
  const [activePriority, setActivePriority] = useState<
    TabSwitcherType<PrioritiesTypes>
  >(priorities[0]);

  const [activeContrastAndPlainPriority, setActiveContrastAndPlainPriority] =
    useState<TabSwitcherType<ContrastAndPlainPrioritiesTypes>>(
      contrastAndPlainPriorities[0],
    );

  const handleAdditionalSelectedSuggestionAttributes = ({
    activeCategory,
    activeCategoryFilter,
  }: {
    activeCategoryFilter: InvestigationsCatergoryFilterOption;
    activeCategory: InvestigationCategoriesKey;
  }) => {
    if (activePriority.data === 'Urgent' && activeCategoryFilter === 'Test') {
      return {urgent: true, bg: 'danger300', type: activeCategory};
    } else if (
      ['Radiology + Plum'].includes(activeCategory) &&
      activeContrastAndPlainPriority.data === 'Contrast'
    ) {
      return {withContrast: true, bg: EMPTY_STRING};
    } else {
      return {type: activeCategory};
    }
  };

  return {
    activePriority,
    setActivePriority,
    activeContrastAndPlainPriority,
    setActiveContrastAndPlainPriority,
    handleAdditionalSelectedSuggestionAttributes,
  };
};

export default useInvestigationSelectionFlags;

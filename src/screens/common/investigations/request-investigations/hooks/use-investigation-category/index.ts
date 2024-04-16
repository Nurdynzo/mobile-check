import {
  InvestigationsCatergoryFilterOption,
  InvestigationCategoriesKey,
  electrophysiologyFilterOptions,
  hematologyAndChemistryFilterOptions,
  microbiologyAndSerologyFilterOptions,
  radiologyFilterOptions,
  requestInvestigationCategories,
} from '@/constants/requestInvestigations';
import {useState} from 'react';

const useInvestigationCategory = () => {
  const [activeCategory, setActiveCategory] =
    useState<InvestigationCategoriesKey>(
      requestInvestigationCategories[0].title,
    );

  const [activeCategoryFilter, setActiveCategoryFilter] =
    useState<InvestigationsCatergoryFilterOption>(
      hematologyAndChemistryFilterOptions[0].title,
    );

  const getInvestionCategoryTabs = () => {
    if (activeCategory === 'Chemistry' || activeCategory === 'Haematology') {
      return hematologyAndChemistryFilterOptions;
    }
    if (activeCategory === 'Microbiology' || activeCategory === 'Serology') {
      return microbiologyAndSerologyFilterOptions;
    }
    if (activeCategory === 'Radiology + Pulm') {
      return radiologyFilterOptions;
    }
    if (activeCategory === 'Electrophysiology') {
      return electrophysiologyFilterOptions;
    }

    return [];
  };

  const handleChangeCategoryFilter = (
    tabKey: InvestigationsCatergoryFilterOption,
  ) => {
    setActiveCategoryFilter(tabKey);
  };
  const handleChangeActiveCategory = (tabKey: InvestigationCategoriesKey) => {
    setActiveCategory(tabKey);
    setActiveCategoryFilter('Test');
  };

  return {
    activeCategory,
    setActiveCategory,
    activeCategoryFilter,
    setActiveCategoryFilter,
    getInvestionCategoryTabs,
    handleChangeCategoryFilter,
    handleChangeActiveCategory,
  };
};

export default useInvestigationCategory;

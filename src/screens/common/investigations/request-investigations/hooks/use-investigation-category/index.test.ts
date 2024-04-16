import {
  electrophysiologyFilterOptions,
  hematologyAndChemistryFilterOptions,
  radiologyFilterOptions,
  requestInvestigationCategories,
} from '@/constants/requestInvestigations';
import {act} from '@testing-library/react-native';
import useInvestigationCategory from '.';
import {renderHookWithProviders} from 'test-utils';

describe('useInvestigationCategory', () => {
  it('should handle category change', () => {
    const {result} = renderHookWithProviders(() => useInvestigationCategory());
    expect(result.current.activeCategory).toBe(
      requestInvestigationCategories[0].title,
    );
    expect(result.current.activeCategoryFilter).toBe(
      hematologyAndChemistryFilterOptions[0].title,
    );
    act(() => {
      result.current.handleChangeActiveCategory('Microbiology');
    });
    expect(result.current.activeCategory).toBe('Microbiology');
    expect(result.current.activeCategoryFilter).toBe('Test');
  });

  it('should provide correct filter options for Electrophysiology category', () => {
    const {result} = renderHookWithProviders(() => useInvestigationCategory());

    act(() => {
      result.current.handleChangeActiveCategory('Electrophysiology');
    });

    expect(result.current.getInvestionCategoryTabs()).toEqual(
      electrophysiologyFilterOptions,
    );
  });

  it('should update activeCategoryFilter to default when activeCategory changes', () => {
    const {result} = renderHookWithProviders(() => useInvestigationCategory());
    act(() => {
      result.current.handleChangeActiveCategory('Radiology + Pulm');
    });
    expect(result.current.activeCategoryFilter).toBe(
      radiologyFilterOptions[0].title,
    );
  });
  it('should reset activeCategoryFilter to "Test" when activeCategory changes', () => {
    const {result} = renderHookWithProviders(() => useInvestigationCategory());
    act(() => {
      result.current.handleChangeActiveCategory('Microbiology');
    });
    expect(result.current.activeCategoryFilter).toBe('Test');
  });
});

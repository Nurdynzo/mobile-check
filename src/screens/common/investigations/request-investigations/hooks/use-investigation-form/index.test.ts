import {act} from '@testing-library/react-native';
import useInvestigationForm from '.';
import {renderHookWithProviders} from 'test-utils';
import {InvestigationType} from '../../type';

const mockInvestigation: InvestigationType = {
  type: 'Chemistry',
  urgent: true,
  background: 'neutral200',
  id: '1',
  isInActive: false,
  name: 'test',
  withContrast: false,
};

describe('useInvestigationForm', () => {
  it('should add an item to localSelectedInvestigations', () => {
    const {result} = renderHookWithProviders(() =>
      useInvestigationForm({
        activeCategoryFilter: 'Test',
        activeCategory: 'Chemistry',
      }),
    );

    act(() => {
      result.current.handleAddItemToLocalInvestigationArray([
        mockInvestigation,
      ]);
    });

    expect(result.current.localSelectedInvestigations).toContain(
      mockInvestigation,
    );
  });

  it('should remove an item from localSelectedInvestigations', () => {
    const {result} = renderHookWithProviders(() =>
      useInvestigationForm({
        activeCategoryFilter: 'Test',
        activeCategory: 'Chemistry',
      }),
    );

    act(() => {
      result.current.handleAddItemToLocalInvestigationArray([
        mockInvestigation,
      ]);
    });

    act(() => {
      result.current.handleRemoveItemFromLocalInvestigationArray(
        mockInvestigation,
      );
    });

    expect(result.current.localSelectedInvestigations).not.toContain(
      mockInvestigation,
    );
  });
});

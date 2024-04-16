import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import useAllInputsMutipleSuggestionForm from '.';

describe('useAllInputsMutipleSuggestionForm', () => {
  it('should handle add suggestion item in diagnosis form', () => {
    const {result} = renderHookWithProviders(() =>
      useAllInputsMutipleSuggestionForm(),
    );

    act(() => {
      result.current.handleAddItem(
        {name: 'Test', id: '1'},
        {tabName: 'diagnosis', isSingleSelect: true},
      );
    });

    expect(result.current.selectedItems.diagnosis).toEqual([
      {name: 'Test', id: '1'},
    ]);
  });

  it('should handle removal of suggested item in evaluation form', () => {
    const {result} = renderHookWithProviders(() =>
      useAllInputsMutipleSuggestionForm(),
    );

    act(() => {
      result.current.handleAddItem(
        {name: 'Test', id: '1'},
        {tabName: 'evaluation'},
      );
      result.current.handleRemoveItem(
        {name: 'Test', id: '1'},
        {tabName: 'evaluation'},
      );
    });

    expect(result.current.selectedItems.evaluation).toEqual([]);
  });
});

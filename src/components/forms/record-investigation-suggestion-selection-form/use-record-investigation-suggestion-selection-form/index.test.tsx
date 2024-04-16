import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useRecordInvestigationSuggestionSelectionForm} from '.';

describe('useRecordInvestigationSuggestionSelectionForm', () => {
  it('should handle add suggestion item', () => {
    const {result} = renderHookWithProviders(() =>
      useRecordInvestigationSuggestionSelectionForm(),
    );

    act(() => {
      result.current.handleAddItem({name: 'Test', id: '1'});
    });

    expect(result.current.selectedItems).toEqual([{name: 'Test', id: '1'}]);
  });

  it('should handle removal of suggested item', () => {
    const {result} = renderHookWithProviders(() =>
      useRecordInvestigationSuggestionSelectionForm(),
    );

    act(() => {
      result.current.handleAddItem({name: 'Test', id: '1'});
      result.current.handleRemoveItem({name: 'Test', id: '1'});
    });

    expect(result.current.selectedItems).toEqual([]);
  });
});

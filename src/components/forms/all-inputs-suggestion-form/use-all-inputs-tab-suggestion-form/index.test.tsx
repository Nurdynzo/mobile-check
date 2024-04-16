import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useAllInputsTabSuggestionForm} from '.';

describe('useAllInputsTabSuggestionForm', () => {
  it('should handle add suggestion item', () => {
    const {result} = renderHookWithProviders(() =>
      useAllInputsTabSuggestionForm({tabName: 'Mouth'}),
    );

    act(() => {
      result.current.handleAddItem({name: 'Test', id: '1'});
    });

    expect(result.current.selectedItems).toEqual([{name: 'Test', id: '1'}]);
  });

  it('should handle removal of suggested item', () => {
    const {result} = renderHookWithProviders(() =>
      useAllInputsTabSuggestionForm({tabName: 'Mouth'}),
    );

    act(() => {
      result.current.handleAddItem({name: 'Test', id: '1'});
      result.current.handleRemoveItem({name: 'Test', id: '1'});
    });

    expect(result.current.selectedItems).toEqual([]);
  });
});

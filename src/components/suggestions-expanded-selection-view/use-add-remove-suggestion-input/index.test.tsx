import {act} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useAddRemoveSuggestionInput} from '.';
import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';

describe('useAddRemoveSuggestionInput', () => {
  it('should handle add suggested item', () => {
    const {result} = renderHookWithProviders(() =>
      useAddRemoveSuggestionInput<NewCustomSnowstormSimpleResponseDto>({
        initialSeletedSugestions: [],
        suggestions: [],
      }),
    );
    act(() => {
      result.current.handleOnPressItem({name: 'Test1', id: '1'});
    });
    act(() => {
      result.current.handleOnPressItem({name: 'Test2', id: '2'});
    });
    act(() => {
      result.current.handleOnPressItem({name: 'Test3', id: '3'});
    });

    expect(result.current.selectedItems.length).toBe(3);
    result.current.selectedItems.forEach((el, i) =>
      expect(el.id).toBe(`${i + 1}`),
    );
  });
  it('should handle removal of selected item', () => {
    const {result} = renderHookWithProviders(() =>
      useAddRemoveSuggestionInput({
        initialSeletedSugestions: [
          {name: 'Test1', id: '1'},
          {name: 'Test2', id: '2'},
          {name: 'Test3', id: '3'},
        ],
        suggestions: [],
      }),
    );
    act(() => {
      result.current.handleOnPressItem({name: 'Test1', id: '1'});
    });
    act(() => {
      result.current.handleOnPressItem({name: 'Test2', id: '2'});
    });
    act(() => {
      result.current.handleOnPressItem({name: 'Test3', id: '3'});
    });

    expect(result.current.selectedItems.length).toBe(0);
  });

  // TODO(Philip): Take a look at this
  // it('should return suggested items where suggested item name includes the query text', () => {
  //   const {result} = renderHookWithProviders(() =>
  //     useAddRemoveSuggestionInput({
  //       initialSeletedSugestions: [],
  //       suggestions: [
  //         {name: 'Test1', id: '1'},
  //         {name: 'Test2', id: '2'},
  //         {name: 'Test3', id: '3'},
  //       ],
  //     }),
  //   );
  //   act(() => {
  //     result.current.handleQuery('et3');
  //   });

  //   waitFor(() => {
  //     expect(result.current.sugesstionsData.length).toBe(1);
  //   });
  // });
});

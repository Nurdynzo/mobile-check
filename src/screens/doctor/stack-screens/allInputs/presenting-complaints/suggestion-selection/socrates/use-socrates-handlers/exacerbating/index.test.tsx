import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {act, waitFor} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useExacerbatingHandlers} from '.';

describe('useExacerbatingHandlers', () => {
  it('should add suggestion item given type is exacerbating', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useExacerbatingHandlers({type: 'Exacerbating'}),
    );

    act(() => {
      result.current.handleAddItem({
        id: '234',
        name: 'Headache',
      });
    });

    await waitFor(() => {
      expect(
        store.getState().presentingComplaints.socratesState.exacerbating
          .activePills,
      ).toContainEqual({
        snowmedId: '234',
        type: 'Exacerbating',
        value: 'Headache',
      });
    });
  });

  it('should add suggestion item given type is relieving', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useExacerbatingHandlers({type: 'Relieving'}),
    );

    act(() => {
      result.current.handleAddItem({
        id: '123',
        name: 'Headache',
      });
    });
    act(() => {
      result.current.handleAddItem({
        id: '1234',
        name: 'Malaria',
      });
    });

    act(() => {
      result.current.handleRemoveItem({
        id: '123',
        name: 'Headache',
      });
    });

    await waitFor(() => {
      const {activePills} =
        store.getState().presentingComplaints.socratesState.exacerbating;

      expect(activePills.length).toBe(1);
      expect(activePills).toEqual([
        {snowmedId: '1234', type: 'Relieving', value: 'Malaria'},
      ]);
    });
  });
  it('should set suggestion item given type is relieving', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useExacerbatingHandlers({type: 'Relieving'}),
    );

    const selectedItems: NewCustomSnowstormSimpleResponseDto[] = [
      {
        id: '123',
        name: 'Headache',
      },
      {
        id: '1234',
        name: 'Malaria',
      },
    ];

    act(() => {
      result.current.setSelectedItems(selectedItems);
    });

    await waitFor(() => {
      expect(
        store.getState().presentingComplaints.socratesState.exacerbating
          .activePills,
      ).toEqual(
        selectedItems.map(el => ({
          snowmedId: el.id,
          type: 'Relieving',
          value: el.name,
        })),
      );
    });
  });
  it('handle set Predictive suggestion text', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useExacerbatingHandlers({type: 'Relieving'}),
    );

    act(() => {
      result.current.setText('Side ear');
    });

    await waitFor(() => {
      expect(
        store.getState().presentingComplaints.socratesState.exacerbating
          .symptomSearch,
      ).toEqual('Side ear');
    });
  });
});

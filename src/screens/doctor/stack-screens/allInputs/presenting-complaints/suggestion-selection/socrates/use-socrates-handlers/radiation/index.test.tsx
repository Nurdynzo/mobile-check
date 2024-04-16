import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {act, waitFor} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useRadiationHandlers} from '.';

describe('useRadiationHandlers', () => {
  it('handle add suggestion item in radiation when present', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useRadiationHandlers({type: 'Present'}),
    );

    act(() => {
      result.current.handleAddItem({
        id: '234',
        name: 'Headache',
      });
    });

    await waitFor(() => {
      expect(
        store.getState().presentingComplaints.socratesState.radiation
          .activePills,
      ).toContainEqual({snowmedId: '234', type: 'Present', value: 'Headache'});
    });
  });

  it('handle remove suggestion item in radiation when absent', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useRadiationHandlers({type: 'Absent'}),
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
        store.getState().presentingComplaints.socratesState.radiation;

      expect(activePills.length).toBe(1);
      expect(activePills).toEqual([
        {snowmedId: '1234', type: 'Absent', value: 'Malaria'},
      ]);
    });
  });
  it('handle set suggestion item in radiation when absent', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useRadiationHandlers({type: 'Absent'}),
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
        store.getState().presentingComplaints.socratesState.radiation
          .activePills,
      ).toEqual(
        selectedItems.map(el => ({
          snowmedId: el.id,
          type: 'Absent',
          value: el.name,
        })),
      );
    });
  });
  it('handle set Predictive suggestion text', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useRadiationHandlers({type: 'Absent'}),
    );

    act(() => {
      result.current.setText('Side ear');
    });

    await waitFor(() => {
      expect(
        store.getState().presentingComplaints.socratesState.radiation
          .bodyPartSearch,
      ).toEqual('Side ear');
    });
  });
});

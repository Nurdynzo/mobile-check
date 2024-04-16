import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {act, waitFor} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useAssociationsHandlers} from '.';

describe('useAssociationsHandlers', () => {
  it('handle add suggestion item in associations when present', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useAssociationsHandlers({type: 'Present'}),
    );

    act(() => {
      result.current.handleAddItem({
        id: '234',
        name: 'Headache',
      });
    });

    await waitFor(() => {
      expect(
        store.getState().presentingComplaints.socratesState.associations
          .activePills,
      ).toContainEqual({snowmedId: '234', type: 'Present', value: 'Headache'});
    });
  });

  it('handle remove suggestion item in association when absent', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useAssociationsHandlers({type: 'Absent'}),
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

    waitFor(() => {
      const {activePills} =
        store.getState().presentingComplaints.socratesState.associations;

      expect(activePills.length).toBe(1);
      expect(activePills).toEqual([
        {snowmedId: '1234', type: 'Absent', value: 'Malaria'},
      ]);
    });
  });
  it('handle set suggestion item in association when absent', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useAssociationsHandlers({type: 'Absent'}),
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
        store.getState().presentingComplaints.socratesState.associations
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
  it('handle set Predictive suggestion text when absent', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useAssociationsHandlers({type: 'Absent'}),
    );

    act(() => {
      result.current.setText('Side ear');
    });

    await waitFor(() => {
      expect(
        store.getState().presentingComplaints.socratesState.associations
          .bodyPartSearch,
      ).toEqual('Side ear');
    });
  });
});

import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {act, waitFor} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useSiteHandlers} from '.';

describe('useSiteHandlers', () => {
  it('handle add suggestion item in site', async () => {
    const {result, store} = renderHookWithProviders(() => useSiteHandlers());

    act(() => {
      result.current.handleAddItem({
        id: '234',
        name: 'Headache',
      });
    });

    await waitFor(() => {
      expect(
        store.getState().presentingComplaints.socratesState.site.activePills,
      ).toContainEqual({snowmedId: '234', value: 'Headache'});
    });
  });

  it('handle remove suggestion item in site', async () => {
    const {result, store} = renderHookWithProviders(() => useSiteHandlers());

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
        store.getState().presentingComplaints.socratesState.site;

      expect(activePills.length).toBe(1);
      expect(activePills).toEqual([{snowmedId: '1234', value: 'Malaria'}]);
    });
  });
  it('handle set suggestion item in site', async () => {
    const {result, store} = renderHookWithProviders(() => useSiteHandlers());

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
        store.getState().presentingComplaints.socratesState.site.activePills,
      ).toEqual(
        selectedItems.map(el => ({
          snowmedId: el.id,

          value: el.name,
        })),
      );
    });
  });
  it('handle set Predictive suggestion text', async () => {
    const {result, store} = renderHookWithProviders(() => useSiteHandlers());

    act(() => {
      result.current.setText('Side ear');
    });

    await waitFor(() => {
      expect(
        store.getState().presentingComplaints.socratesState.site.bodyPartSearch,
      ).toEqual('Side ear');
    });
  });
});

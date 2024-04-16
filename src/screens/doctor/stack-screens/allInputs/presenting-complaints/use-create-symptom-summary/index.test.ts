import {act, waitFor} from '@testing-library/react-native';
import {renderHookWithProviders} from 'test-utils';
import {useCreateSymptomSummary} from '.';
import {
  setSavedSocratesStates,
  setSocratesStates,
} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';

describe('useCreateSymptomSummary', () => {
  it('should save general summary note', async () => {
    const {result} = renderHookWithProviders(() =>
      useCreateSymptomSummary({patientId: 123, encounterId: 2091}),
    );

    await waitFor(async () => {
      await result.current.handleGeneralNotesSubmit({
        note: 'Malaria with a touch of injection',
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
  it('should save selected suggestion symptom summary', async () => {
    const {result, store} = renderHookWithProviders(() =>
      useCreateSymptomSummary({patientId: 123, encounterId: 2091}),
    );

    await act(async () => {
      await store.dispatch(setSocratesStates(socratesState));
    });

    await act(async () => {
      store.dispatch(
        setSavedSocratesStates([
          store.getState().presentingComplaints.socratesState,
        ]),
      );
    });

    await waitFor(async () => {
      await result.current.handleSaveSymptomSummary();
    });

    // check if savedSocratesStates is reset
    await waitFor(() => {
      expect(store.getState().presentingComplaints.savedSocratesStates).toEqual(
        [],
      );
    });

    expect(result.current.isSuccess).toBe(true);
  });
  it('should save typed note summary', async () => {
    const {result} = renderHookWithProviders(() =>
      useCreateSymptomSummary({patientId: 123, encounterId: 113}),
    );

    await act(async () => {
      await result.current.handleSaveTypeNote({
        values: {
          complaintsHistory: '',
          familyHistory: '',
          otherHistory: '',
          pastMedical: '',
          socialHistory: '',
        },
        reset: () => null,
      });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});

const socratesState = {
  mainSearchResult: {id: '1', name: 'Headache'},
  note: 'Patient reports severe headache since morning.',
  site: {
    activePills: [{value: 'Head', snowmedId: '123'}],
    bodyPartSearch: 'Head',
  },
  radiation: {
    activePills: [{value: 'Neck', type: 'Present', snowmedId: '456'}],
    bodyPartSearch: 'Neck',
  },
  associations: {
    activePills: [{value: 'Nausea', type: 'Absent', snowmedId: '789'}],
    bodyPartSearch: 'Stomach',
  },
  exacerbating: {
    activePills: [
      {value: 'Bright light', type: 'Relieving', snowmedId: '101112'},
    ],
    symptomSearch: 'Bright light',
  },
  onSet: {
    interval: 2,
    intervalUnit: 'Hours',
    cyclicality: 'Non-cyclic',
  },
  character: {
    activePills: [{value: 'Throbbing', type: 'Present', snowmedId: '131415'}],
    characteristicSearch: 'Pain type',
  },
  severity: 8,
  timeCourse: {
    interval: 4,
    intervalUnit: 'Hours',
    symptomsFelt: 'Worsening',
  },
};

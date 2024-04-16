import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../store';
import {GenderType} from '@/state/services/patientApi';
import {NOT_AVAILABLE, TEMP_AVATAR_URL} from '@/utils/constants';

type SelectedPatient = {
  id: number;
  fullName: string;
  dateOfBirth: string;
  gender: GenderType | typeof NOT_AVAILABLE;
  code: string;
  pic: string;
};
const initialState: SelectedPatient = {
  id: 0,
  fullName: NOT_AVAILABLE,
  dateOfBirth: NOT_AVAILABLE,
  gender: NOT_AVAILABLE,
  code: NOT_AVAILABLE,
  pic: TEMP_AVATAR_URL,
};

const selectedPatientSlice = createSlice({
  name: 'selectedPatient',
  initialState,
  reducers: {
    updateSelectedPatient: (_, action: PayloadAction<SelectedPatient>) => {
      return {
        ...action.payload,
      };
    },
    resetSelectedPatient: () => initialState,
  },
});

export const {updateSelectedPatient, resetSelectedPatient} =
  selectedPatientSlice.actions;

export const selectPatient = (state: RootState): SelectedPatient =>
  state.selectedPatient;

export default selectedPatientSlice.reducer;

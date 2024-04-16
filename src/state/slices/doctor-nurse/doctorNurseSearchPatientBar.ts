import {SearchPatientOutput} from '@/state/services/patientApi';
import {RootState} from '@/state/store';
import {EMPTY_STRING} from '@/utils/constants';
import {
  OverlaySearchBarType,
  createOverlaySearchBarSlice,
} from '../base-implementaions/baseImplementation';

const initialState: OverlaySearchBarType<SearchPatientOutput> = {
  searchTerm: EMPTY_STRING,
};

const doctorNurseSearchPatientBarSlice = createOverlaySearchBarSlice({
  name: 'doctorNurseSearchPatientBar',
  initialState,
});

export const setDoctorNurseSearchPatientTerm =
  doctorNurseSearchPatientBarSlice.actions.setSearchTerm;

export const setDoctorNurseSelectedPatientResult =
  doctorNurseSearchPatientBarSlice.actions.setSelectedResult;

export const selectDoctorNurseSearchPatientTerm = (state: RootState): string =>
  state.doctorNurseSearchPatientBar.searchTerm;

export const selectDoctorNurseSelectedPatientResult = (
  state: RootState,
): SearchPatientOutput | undefined =>
  state.doctorNurseSearchPatientBar.selectedResult;

export default doctorNurseSearchPatientBarSlice.reducer;

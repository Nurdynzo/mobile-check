import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {baseApi as api} from './services/baseApi';
import {themeReducer} from './slices/theme/theme';
import authReducer from './slices/auth/auth';
import selectedPatientReducer from './slices/patient/selectedPatient';
import doctorNurseSearchPatientBarReducer from './slices/doctor-nurse/doctorNurseSearchPatientBar';
import presentingComplaintsSearchBarReducer from './slices/all-inputs/presenting-complaints/presentingComplaintsSearchBar';
import presentingComplaintsReducer from './slices/all-inputs/presenting-complaints/presentingComplaints';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  theme: themeReducer,
  auth: authReducer,
  selectedPatient: selectedPatientReducer,
  presentingComplaintsSearchBar: presentingComplaintsSearchBarReducer,
  doctorNurseSearchPatientBar: doctorNurseSearchPatientBarReducer,
  presentingComplaints: presentingComplaintsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false}).concat(api.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

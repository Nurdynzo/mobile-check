import {LogBox} from 'react-native';

export const useIgnore = () => {
  LogBox.ignoreLogs([
    /.*injectEndpoints.*/,
    'called `injectEndpoints` to override already-existing endpointName apiServicesAppPatientappointmentsGetconsultingroomsGet without specifying `overrideExisting: true`',
    'ViewPropTypes will be removed from React Native',
  ]);
};

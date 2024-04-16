import {renderWithProviders} from 'test-utils';
import PatientReassignmentSheet from '.';
import React from 'react';
import {Modalize} from 'react-native-modalize';
import {act, waitFor} from '@testing-library/react-native';
import {modifiableMockGetApi} from 'src/mocks/api/server';
import {ApiServicesAppStaffmembersGetstaffmembersbyroleGetApiResponse} from '@/state/services/staffApi';

// TODO(Philip): Agree with the team whether it's ok to have this here or move it to the mock api file
const mockedPatientReassignmentApi = ({
  result,
  success = true,
  error = false,
}: {
  result?: ApiServicesAppStaffmembersGetstaffmembersbyroleGetApiResponse;
  success?: boolean;
  error?: boolean;
}) => {
  return modifiableMockGetApi({
    error,
    result,
    success,
    url: 'api/services/app/StaffMembers/GetStaffMembersByRole',
  });
};

describe('PatientReassignementSheet', () => {
  it('should successfully render sheet given user triggers action to open sheet', async () => {
    const sheetRef = React.createRef<Modalize>();
    const {getByText} = renderWithProviders(
      <PatientReassignmentSheet
        closeSheet={() => sheetRef.current?.close()}
        sheetRef={sheetRef}
      />,
    );

    act(() => {
      sheetRef.current?.open();
    });

    await waitFor(() => expect(getByText('Assign to')).toBeOnTheScreen());
  });

  it('should render the empty state view given the api returns with an empty list of doctors', async () => {
    mockedPatientReassignmentApi({result: []});
    const sheetRef = React.createRef<Modalize>();
    const {getByText} = renderWithProviders(
      <PatientReassignmentSheet
        closeSheet={() => sheetRef.current?.close()}
        sheetRef={sheetRef}
      />,
    );

    act(() => {
      sheetRef.current?.open();
    });

    await waitFor(() =>
      expect(getByText('Available doctors')).toBeOnTheScreen(),
    );
    expect(getByText('No doctor is currently available')).toBeOnTheScreen();
  });

  it('should render the error view given the api returns an error', async () => {
    mockedPatientReassignmentApi({success: false, error: true});
    const sheetRef = React.createRef<Modalize>();
    const {getByText} = renderWithProviders(
      <PatientReassignmentSheet
        closeSheet={() => sheetRef.current?.close()}
        sheetRef={sheetRef}
      />,
    );

    act(() => {
      sheetRef.current?.open();
    });

    await waitFor(() => expect(getByText('Oops!')).toBeOnTheScreen());

    expect(
      getByText('Something went wrong. Please try again'),
    ).toBeOnTheScreen();
    expect(getByText('Retry')).toBeOnTheScreen();
  });

  it('should render the list of doctors given the api returns with data', async () => {
    const sheetRef = React.createRef<Modalize>();
    const {getByText} = renderWithProviders(
      <PatientReassignmentSheet
        closeSheet={() => sheetRef.current?.close()}
        sheetRef={sheetRef}
      />,
    );

    act(() => {
      sheetRef.current?.open();
    });

    await waitFor(() => expect(getByText('Sam Lui')).toBeOnTheScreen());
  });
});

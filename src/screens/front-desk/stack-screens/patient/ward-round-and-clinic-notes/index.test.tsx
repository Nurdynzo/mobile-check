import {routesNames} from '@/navigation/routes';
import {GeneralScreenProps} from '@/navigation/types';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import WardRoundAndClinicNotes from '.';
import {NavigationProp} from '@react-navigation/native';

test('renders WardRoundAndClinicNotes correctly', () => {
  const navigationMock = {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: jest.fn(),
    dangerouslyGetState: jest.fn(),
  } as unknown as NavigationProp<
    ReactNavigation.RootParamList,
    'FD_WARD_ROUND_AND_CLINIC_NOTES'
  >;
  const props: GeneralScreenProps<'FD_WARD_ROUND_AND_CLINIC_NOTES'> = {
    route: {
      key: 'FD_WARD_ROUND_AND_CLINIC_NOTES_KEY',
      name: routesNames.FRONT_DESK.FD_WARD_ROUND_AND_CLINIC_NOTES,
    },
    navigation: navigationMock,
  };

  const {getByText} = renderWithProviders(
    <WardRoundAndClinicNotes {...props} />,
  );

  expect(getByText('Ward round & Clinic notes')).toBeTruthy();
  expect(getByText('View paper records')).toBeTruthy();
});

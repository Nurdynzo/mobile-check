import {GeneralScreenProps} from '@/navigation/types';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import Diagnosis from '.';

describe('diagnosis', () => {
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
    'DOCTOR_DIAGNOSIS'
  >;
  const mockRoute = {
    key: 'DOCTOR_DIAGNOSIS_KEY',
    name: 'DOCTOR_DIAGNOSIS' as const,
    params: {encounterId: 1},
  };

  const mockProps: GeneralScreenProps<'DOCTOR_DIAGNOSIS'> = {
    route: mockRoute,
    navigation: navigationMock,
  };

  it('renders screen correctly', () => {
    const {getByText} = renderWithProviders(<Diagnosis {...mockProps} />);
    const headerElements = getByText('Diagnosis');
    expect(headerElements).toBeOnTheScreen();
  });

  it('renders diagnosis tab switcher (dignosis & differential)', () => {
    const {getByText} = renderWithProviders(<Diagnosis {...mockProps} />);

    const diagnosisTabElements = getByText('Diagnosis');
    const differentialTabElements = getByText('Differential');
    expect(diagnosisTabElements).toBeOnTheScreen();
    expect(differentialTabElements).toBeOnTheScreen();
  });
});

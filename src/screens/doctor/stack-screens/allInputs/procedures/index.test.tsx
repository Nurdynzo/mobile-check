import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import Procedures from '.';
import {GeneralScreenProps} from '@/navigation/types';

describe('procedures', () => {
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
    'DOCTOR_PROCEDURES'
  >;
  const mockRoute = {
    key: 'DOCTOR_PROCEDURES_KEY',
    name: 'DOCTOR_PROCEDURES' as const,
    params: {
      patientId: 0,
      encounterId: 0,
    },
  };
  const mockProps: GeneralScreenProps<'DOCTOR_PROCEDURES'> = {
    route: mockRoute,
    navigation: navigationMock,
  };

  it('renders screen correctly', () => {
    const {getByText} = renderWithProviders(<Procedures {...mockProps} />);
    const headerElements = getByText('Procedures');
    expect(headerElements).toBeOnTheScreen();
  });

  it('renders procedure tab switcher (request procedures & record procedures)', () => {
    const {getAllByText, getByText} = renderWithProviders(
      <Procedures {...mockProps} />,
    );

    const recordProcedureTabElements = getByText('Record procedures');
    const requestProcedureTabElements = getAllByText('Request procedures');

    expect(requestProcedureTabElements.length).toBe(2);
    expect(recordProcedureTabElements).toBeOnTheScreen();
  });
});

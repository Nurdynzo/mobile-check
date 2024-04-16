import {GeneralScreenProps} from '@/navigation/types';
import React from 'react';
import BedMaking from '.';
import {NavigationProp} from '@react-navigation/native';
import {renderWithProviders} from 'test-utils';

describe('BedMaking', () => {
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
    'NURSE_BED_MAKING'
  >;
  const mockRoute = {
    key: 'NURSE_BED_MAKING_KEY',
    name: 'NURSE_BED_MAKING' as const,
    params: {patientId: 1, encounterId: 1},
  };

  const mockProps: GeneralScreenProps<'NURSE_BED_MAKING'> = {
    route: mockRoute,
    navigation: navigationMock,
  };

  it('renders correctly', () => {
    const {getByText} = renderWithProviders(<BedMaking {...mockProps} />);

    expect(getByText('Bed making')).toBeOnTheScreen();
  });
});

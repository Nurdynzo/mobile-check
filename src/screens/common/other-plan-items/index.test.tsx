import {GeneralScreenProps} from '@/navigation/types';
import React from 'react';
import OtherPlanItems from '.';
import {NavigationProp} from '@react-navigation/native';
import {renderWithProviders} from 'test-utils';

describe('OtherPlanItems', () => {
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
    'OTHER_PLAN_ITEMS'
  >;
  const mockRoute = {
    key: 'OTHER_PLAN_ITEMS_KEY',
    name: 'OTHER_PLAN_ITEMS' as const,
    params: {patientId: 1, encounterId: 1},
  };

  const mockProps: GeneralScreenProps<'OTHER_PLAN_ITEMS'> = {
    route: mockRoute,
    navigation: navigationMock,
  };

  it('renders correctly', () => {
    const {getAllByText} = renderWithProviders(
      <OtherPlanItems {...mockProps} />,
    );
    const headerElements = getAllByText('Other plan Items');
    expect(headerElements[0]).toBeTruthy(); // This will target the first 'Add notes'
  });
});

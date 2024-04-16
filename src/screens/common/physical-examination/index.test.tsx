import {GeneralScreenProps} from '@/navigation/types';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import PhysicalExamination from '.';

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
  'PHYSICAL_EXAMINATION'
>;
const mockRoute = {
  key: 'PHYSICAL_EXAMINATION_KEY',
  name: 'PHYSICAL_EXAMINATION' as const,
  params: {patientId: 1, encounterId: 1},
};

const mockProps: GeneralScreenProps<'PHYSICAL_EXAMINATION'> = {
  route: mockRoute,
  navigation: navigationMock,
};

describe('PhysicalExamination', () => {
  it('renders all note field including "General" when exmainationType data is "General"', () => {
    const {queryByText} = renderWithProviders(
      <PhysicalExamination {...mockProps} />,
    );

    const screenName = queryByText('Physical examinations');

    expect(screenName).toBeOnTheScreen();
  });
});

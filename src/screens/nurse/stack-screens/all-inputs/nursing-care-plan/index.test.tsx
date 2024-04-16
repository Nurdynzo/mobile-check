import {GeneralScreenProps} from '@/navigation/types';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import NursingCarePlan from '.';

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
  'NURSING_CARE_PLAN'
>;
const mockRoute = {
  key: 'NURSING_CARE_PLAN_KEY',
  name: 'NURSING_CARE_PLAN' as const,
  params: {patientId: 1, encounterId: 1},
};

const mockProps: GeneralScreenProps<'NURSING_CARE_PLAN'> = {
  route: mockRoute,
  navigation: navigationMock,
};

describe('NursingCarePlan', () => {
  it('renders correctly', () => {
    const {getByText} = renderWithProviders(<NursingCarePlan {...mockProps} />);
    const headerElements = getByText('Nurse care plan');
    expect(headerElements).toBeOnTheScreen();
  });
});

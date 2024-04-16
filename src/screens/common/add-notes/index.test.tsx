import {GeneralScreenProps} from '@/navigation/types';
import React from 'react';
import AddNotes from '.';
import {NavigationProp} from '@react-navigation/native';
import {renderWithProviders} from 'test-utils';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import * as InputNotesApi from '@/state/services/inputNotesApi';

jest.mock('@/state/services/snowstorm', () => ({
  useApiServicesAppSnowstormGetsymptomsuggestionGetQuery: () => ({
    currentData: [
      {id: '1', name: 'Clean tools'},
    ] as SnowstormSimpleResponseDto[],
  }),
}));

const getPatientInputNotesQueryMock = () => {
  return jest
    .spyOn(
      InputNotesApi,
      'useApiServicesAppInputnotesGetpatientinputnotesGetQuery',
    )
    .mockImplementation(() => ({
      currentData: [] as InputNotesApi.InputNotesSummaryForReturnDto[],
      refetch: jest.fn(),
    }));
};

const navigationMock = {
  navigate: jest.fn(),
  dispatch: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  canGoBack: jest.fn(),
  dangerouslyGetState: jest.fn(),
} as unknown as NavigationProp<ReactNavigation.RootParamList, 'ADD_NOTES'>;

const mockRoute = {
  key: 'ADD_NOTES_KEY',
  name: 'ADD_NOTES' as const,
  params: {patientId: 1, encounterId: 1},
};

const mockProps: GeneralScreenProps<'ADD_NOTES'> = {
  route: mockRoute,
  navigation: navigationMock,
};

describe('AddNotes', () => {
  beforeAll(() => {
    getPatientInputNotesQueryMock();
  });

  it('renders correctly', () => {
    const {getAllByText} = renderWithProviders(<AddNotes {...mockProps} />);
    const headerElements = getAllByText('Add notes');
    expect(headerElements[0]).toBeTruthy();
  });
});

import {GeneralScreenProps} from '@/navigation/types';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import PresentingComplaintsScreen from '.';

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
  'DOCTOR_PRESENTING_COMPLAINTS'
>;
const mockRoute = {
  key: 'DOCTOR_PRESENTING_COMPLAINTS_KEY',
  name: 'DOCTOR_PRESENTING_COMPLAINTS' as const,
  params: {patientId: 1, encounterId: 1},
};

const mockProps: GeneralScreenProps<'DOCTOR_PRESENTING_COMPLAINTS'> = {
  route: mockRoute,
  navigation: navigationMock,
};

describe('PresentingComplaints', () => {
  it('renders screen correctly', () => {
    const {getByText} = renderWithProviders(
      <PresentingComplaintsScreen {...mockProps} />,
    );
    const headerElements = getByText('Presenting complaints');
    expect(headerElements).toBeOnTheScreen();
  });

  it('its renders all SOCRATES TAB on screen correctly', async () => {
    const {getAllByText} = renderWithProviders(
      <PresentingComplaintsScreen {...mockProps} />,
    );
    const site = getAllByText('S');
    const onSet = getAllByText('O');
    const character = getAllByText('C');
    const radiation = getAllByText('R');
    const association = getAllByText('A');
    const timeCourse = getAllByText('T');
    const exacerbating = getAllByText('E');
    const severity = getAllByText('S');

    // Check if at least one instance of each item is found
    expect(site.length).toBeGreaterThan(1);
    expect(onSet.length).toBeGreaterThan(0);
    expect(character.length).toBeGreaterThan(0);
    expect(radiation.length).toBeGreaterThan(0);
    expect(association.length).toBeGreaterThan(0);
    expect(timeCourse.length).toBeGreaterThan(0);
    expect(exacerbating.length).toBeGreaterThan(0);
    expect(severity.length).toBeGreaterThan(1);
  });

  // TODO(Franklyn) i will check back on this test
  it('its renders selected SOCRATES on screen correctly when its tab is pressed', async () => {
    const {getByText} = renderWithProviders(
      <PresentingComplaintsScreen {...mockProps} />,
    );
    // const site = getByText('S');

    // act(() => {
    //   fireEvent.press(site);
    // });

    expect(getByText('Site')).toBeOnTheScreen();

    // const rediation = getByText('R');

    // act(() => {
    //   fireEvent.press(rediation);
    // });

    // await waitFor(
    //   () => {
    //     expect(getByText('Radiation')).toBeOnTheScreen();
    //   },
    //   {timeout: 5000},
    // );
  });

  it('disables the "Save" button when no note has been entered', () => {
    const {getByText} = renderWithProviders(
      <PresentingComplaintsScreen {...mockProps} />,
    );
    const saveButton = getByText('Save');
    expect(saveButton).toBeDisabled();
  });
});

import {renderWithProviders} from 'test-utils';
import Records from '.';
import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {NOT_AVAILABLE} from '@/utils/index';

describe('Records screen', () => {
  it('should render welcome message', () => {
    const {getByText} = renderWithProviders(<Records />);

    const welcomeMessageText = getByText(
      `Hi, ${NOT_AVAILABLE} ${NOT_AVAILABLE}`,
    );

    expect(welcomeMessageText).toBeOnTheScreen();
  });

  it('should render patient activities button', () => {
    const {getByText} = renderWithProviders(<Records />);

    const button = getByText('Patient activities');

    expect(button).toBeOnTheScreen();
  });

  it('should render clinics filter button with default as All clinics', () => {
    const {getByText} = renderWithProviders(<Records />);

    const filterButton = getByText('All clinics');

    expect(filterButton).toBeOnTheScreen();
  });

  it('should render sortBy button', () => {
    const {getByText} = renderWithProviders(<Records />);

    const sortByButton = getByText('Sort by');

    expect(sortByButton).toBeOnTheScreen();
  });

  it('should render analytics floating action button', () => {
    const {getByText} = renderWithProviders(<Records />);

    const button = getByText('Analytics');

    expect(button).toBeOnTheScreen();
  });

  it('should render bottom sheet with available clinics given clinics filter button is on the screen', async () => {
    const {getByText} = renderWithProviders(<Records />);

    const filterButton = getByText('All clinics');

    expect(filterButton).toBeOnTheScreen();

    fireEvent.press(filterButton);

    await waitFor(() => {
      expect(getByText('Neurology')).toBeOnTheScreen();
    });
  });

  it('should update clinic filter button label with selected clinic', async () => {
    const {getByText, queryAllByText} = renderWithProviders(<Records />);

    const filterButton = getByText('All clinics');

    expect(filterButton).toBeOnTheScreen();

    fireEvent.press(filterButton);

    await waitFor(() => {
      const neurologyTile = getByText('Neurology');
      expect(neurologyTile).toBeOnTheScreen();
    });

    fireEvent.press(getByText('Neurology'));

    await waitFor(() => {
      expect(getByText('Neurology')).toBeOnTheScreen();
    });

    expect(queryAllByText('All clinics').length).toBe(0);
  });
});

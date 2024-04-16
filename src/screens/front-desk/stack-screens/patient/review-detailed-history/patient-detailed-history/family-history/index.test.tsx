import React from 'react';
import {renderWithProviders} from 'test-utils';
import {FamilyHistory, FamilyHistoryEdit} from './index';
import {act, fireEvent, waitFor} from '@testing-library/react-native';

describe('FamilyHistory', () => {
  it('renders correctly', () => {
    const {getByText} = renderWithProviders(<FamilyHistory patientId={123} />);
    expect(getByText('Family history')).toBeOnTheScreen();
  });

  it('renders edit button correctly', async () => {
    const {getByText} = renderWithProviders(
      <FamilyHistory patientId={123} onPressEdit={() => null} />,
    );
    expect(getByText('Edit')).toBeOnTheScreen();
  });
  it('should check edit button is triggered once', async () => {
    const onEditMock = jest.fn();
    const {getByText} = renderWithProviders(
      <FamilyHistory patientId={123} onPressEdit={onEditMock} />,
    );

    act(() => {
      fireEvent.press(getByText('Edit'));
    });
    await waitFor(() => {
      expect(onEditMock).toHaveBeenCalledTimes(1);
    });
  });
});

describe('FamilyHistoryEdit', () => {
  it('renders correctly', () => {
    const {getByText} = renderWithProviders(
      <FamilyHistoryEdit patientId={123} onClose={() => null} />,
    );

    expect(getByText('Family history')).toBeOnTheScreen();
  });

  it('renders done button correctly', async () => {
    const {getByText} = renderWithProviders(
      <FamilyHistoryEdit patientId={123} onClose={() => null} />,
    );
    expect(getByText('Done')).toBeOnTheScreen();
  });
  it('should check done button is triggered once', async () => {
    const onCloseMock = jest.fn();
    const {getByText} = renderWithProviders(
      <FamilyHistoryEdit patientId={123} onClose={onCloseMock} />,
    );

    act(() => {
      fireEvent.press(getByText('Done'));
    });
    await waitFor(() => {
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
  });
});

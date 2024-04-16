import {EMPTY_STRING} from '@/utils/constants';
import {waitFor} from '@testing-library/react-native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import OutpatientListView from '.';

describe('OutpatientListView', () => {
  it('should render each outpatient card with patient name given outpatient list is not empty', async () => {
    const {getByText} = renderWithProviders(
      <OutpatientListView selectedSort={EMPTY_STRING} />,
    );

    await waitFor(() => {
      const firstListName = getByText('Danilo Zhe');
      const secondListName = getByText('Jon Snows');
      const thirdListName = getByText('Fina Miles');
      expect(firstListName).toBeOnTheScreen();
      expect(secondListName).toBeOnTheScreen();
      expect(thirdListName).toBeOnTheScreen();
    });
  });
  it('should render each outpatient card with patient code, age and gender given outpatient list is not empty', async () => {
    const {getByText} = renderWithProviders(
      <OutpatientListView selectedSort={EMPTY_STRING} />,
    );

    await waitFor(() => {
      const firstListName = getByText('M-0000057-T | 4yrs | Male');
      const secondListName = getByText('M-0000058-T | 3yrs | Female');
      const thirdListName = getByText('M-0000060-T | 5yrs | Others');

      expect(firstListName).toBeOnTheScreen();
      expect(secondListName).toBeOnTheScreen();
      expect(thirdListName).toBeOnTheScreen();
    });
  });
});

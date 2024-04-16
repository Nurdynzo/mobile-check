import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import InpatientListView from '.';
import {waitFor} from '@testing-library/react-native';

describe('InpatientListView', () => {
  it('should render each inpatient card with patient name given inpatient list is not empty', async () => {
    const {getByText} = renderWithProviders(
      <InpatientListView wardId={2} selectedSort={EMPTY_STRING} />,
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
  it('should render each inpatient card with patient code, age and gender given inpatient list is not empty', async () => {
    const {getByText} = renderWithProviders(
      <InpatientListView wardId={2} selectedSort={EMPTY_STRING} />,
    );

    await waitFor(() => {
      const firstListName = getByText('2758 | 4yrs | Male');
      const secondListName = getByText('2759 | 3yrs | Female');
      const thirdListName = getByText('2760 | 5yrs | Others');

      expect(firstListName).toBeOnTheScreen();
      expect(secondListName).toBeOnTheScreen();
      expect(thirdListName).toBeOnTheScreen();
    });
  });
});

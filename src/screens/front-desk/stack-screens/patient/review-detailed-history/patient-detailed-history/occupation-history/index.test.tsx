import React from 'react';
import {renderWithProviders} from 'test-utils';
import {OccupationHistory, OccupationHistoryEdit} from './index';

describe('OccupationHistory', () => {
  it('renders correctly', () => {
    const {getAllByText} = renderWithProviders(
      <OccupationHistory patientId={123} />,
    );
    expect(getAllByText('Occupational History')[0]).toBeOnTheScreen();
    expect(getAllByText('Occupational History')[1]).toBeOnTheScreen();
  });

  it('renders edit button', () => {
    const {getByText} = renderWithProviders(
      <OccupationHistory patientId={123} />,
    );
    expect(getByText('Edit')).toBeOnTheScreen();
  });
});

describe('OccupationHistoryEdit', () => {
  it('renders correctly', () => {
    const {getByText} = renderWithProviders(
      <OccupationHistoryEdit patientId={123} />,
    );
    expect(getByText('Occupational History')).toBeOnTheScreen();
  });

  it('renders done button', () => {
    const {getByText} = renderWithProviders(
      <OccupationHistoryEdit patientId={123} />,
    );
    expect(getByText('Done')).toBeOnTheScreen();
  });
});

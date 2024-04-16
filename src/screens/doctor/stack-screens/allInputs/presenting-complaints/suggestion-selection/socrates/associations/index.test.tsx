import {setTempStateMainSearchResult} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import AssociationsView from '.';

describe('AssociationsView', () => {
  it('renders associations view correctly when symptom is not selected', () => {
    const {getByText} = renderWithProviders(<AssociationsView />);

    const noSymptomElement = getByText(
      'Is there anything else associated with the pain?',
    );

    expect(noSymptomElement).toBeOnTheScreen();
  });
  it('renders associations view correctly when symptom is selected', () => {
    const {getByText, store} = renderWithProviders(<AssociationsView />);

    store.dispatch(setTempStateMainSearchResult({id: '', name: 'malaria'}));
    const thereIsSymptomElement = getByText(
      'Is there anything else associated with the malaria?',
    );

    expect(thereIsSymptomElement).toBeOnTheScreen();
  });
});

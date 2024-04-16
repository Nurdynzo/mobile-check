import {setTempStateMainSearchResult} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import SiteView from '.';

describe('SiteView', () => {
  it('renders site view correctly when symptom is not selected', () => {
    const {getByText} = renderWithProviders(<SiteView />);

    const noSymptomElement = getByText('Where exactly is the pain?');

    expect(noSymptomElement).toBeOnTheScreen();
  });
  it('renders site view correctly when symptom is selected', () => {
    const {getByText, store} = renderWithProviders(<SiteView />);

    store.dispatch(setTempStateMainSearchResult({id: '', name: 'headache'}));
    const thereIsSymptomElement = getByText('Where exactly is the headache?');

    expect(thereIsSymptomElement).toBeOnTheScreen();
  });
});

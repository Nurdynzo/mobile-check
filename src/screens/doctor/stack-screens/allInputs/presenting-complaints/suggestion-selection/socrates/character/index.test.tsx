import {setTempStateMainSearchResult} from '@/state/slices/all-inputs/presenting-complaints/presentingComplaints';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import CharacterView from '.';

describe('CharacterView', () => {
  it('renders character view correctly when symptom is not selected', () => {
    const {getByText} = renderWithProviders(<CharacterView />);

    const noSymptomElement = getByText('On movement, what is the pain like?');

    expect(noSymptomElement).toBeOnTheScreen();
  });
  it('renders character view correctly when symptom is selected', () => {
    const {getByText, store} = renderWithProviders(<CharacterView />);

    store.dispatch(setTempStateMainSearchResult({id: '', name: 'typhoid'}));
    const thereIsSymptomElement = getByText(
      'On movement, what is the typhoid like?',
    );

    expect(thereIsSymptomElement).toBeOnTheScreen();
  });
});

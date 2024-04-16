import React from 'react';
import {renderWithProviders} from 'test-utils';
import PresentingComplaintsTypeNoteView from '.';

describe('PresentingComplaintsTypeNoteView', () => {
  it('renders Record audio button correctly', () => {
    const {getByText} = renderWithProviders(
      <PresentingComplaintsTypeNoteView encounterId={1} patientId={1} />,
    );

    const recordButton = getByText('Record audio');

    expect(recordButton).toBeOnTheScreen();
  });

  it('disables the "Save" button when no note has been entered', () => {
    const {getByText} = renderWithProviders(
      <PresentingComplaintsTypeNoteView encounterId={1} patientId={1} />,
    );
    const saveButton = getByText('Save');
    expect(saveButton).toBeDisabled();
  });
});

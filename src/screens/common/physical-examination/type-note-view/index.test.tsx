import React from 'react';
import {renderWithProviders} from 'test-utils';
import PhysicalExaminationTypeNoteView from '.';

describe('PhysicalExaminationTypeNoteView', () => {
  it('renders all note field including "General" when exmainationType data is "General"', () => {
    const {queryByText} = renderWithProviders(
      <PhysicalExaminationTypeNoteView
        encounterId={1}
        patientId={1}
        noteTabs={['Mouth', 'Abdomen', 'Eyes']}
        examinationType={{
          id: 1,
          value: 'General Physical Examination',
          data: 'General',
        }}
      />,
    );

    const generalNote = queryByText('General');
    const mouthNote = queryByText('Mouth');
    const abdomenNote = queryByText('Abdomen');
    const eyesNote = queryByText('Eyes');

    expect(generalNote).toBeOnTheScreen();
    expect(mouthNote).toBeOnTheScreen();
    expect(abdomenNote).toBeOnTheScreen();
    expect(eyesNote).toBeOnTheScreen();
  });

  it('renders all note field excluding "General" when exmainationType data is not "General"', () => {
    const {queryByText} = renderWithProviders(
      <PhysicalExaminationTypeNoteView
        encounterId={1}
        patientId={1}
        noteTabs={['Mouth', 'Abdomen', 'Eyes']}
        examinationType={{
          id: 1,
          value: 'Cardiovascular Examination',
          data: 'Cardiovascular',
        }}
      />,
    );

    const generalNote = queryByText('General');
    const mouthNote = queryByText('Mouth');
    const abdomenNote = queryByText('Abdomen');
    const eyesNote = queryByText('Eyes');

    expect(generalNote).not.toBeOnTheScreen();
    expect(mouthNote).toBeOnTheScreen();
    expect(abdomenNote).toBeOnTheScreen();
    expect(eyesNote).toBeOnTheScreen();
  });

  it('disables the "Save" button when no note has been entered', () => {
    const {getByText} = renderWithProviders(
      <PhysicalExaminationTypeNoteView
        encounterId={1}
        patientId={1}
        noteTabs={['General', 'Mouth']}
        examinationType={{
          id: 1,
          value: 'General Physical Examination',
          data: 'Genneral',
        }}
      />,
    );
    const saveButton = getByText('Save');
    expect(saveButton).toBeDisabled();
  });
});

import React from 'react';
import {renderWithProviders} from 'test-utils';
import PhysicalExaminationSuggestionView from '.';

describe('PhysicalExaminationSuggestionView', () => {
  it('should render correctly given "examinationType value" is General Physical Examination', async () => {
    const {getByText} = renderWithProviders(
      <PhysicalExaminationSuggestionView
        encounterId={2}
        examinationType={{
          id: '2',
          value: 'General Physical Examination',
          data: 'General',
        }}
        patientId={2}
        headerValue={'Mouth'}
      />,
    );

    const placeholderText = getByText('General Physical Examination');
    expect(placeholderText).toBeOnTheScreen();
  });
});

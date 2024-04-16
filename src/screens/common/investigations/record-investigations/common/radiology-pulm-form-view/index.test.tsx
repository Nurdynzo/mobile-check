import React from 'react';
import {renderWithProviders} from 'test-utils';
import RadiologyAndPulmFormView from '.';
import {SingleInvestigationTestType} from '../available-investigation-tests-view/use-get-available-investigations-tests/type';

describe('RadiologyAndPulmFormView', () => {
  const selectedTest: SingleInvestigationTestType = {
    name: 'Blood film',
    investigationId: 1,
  };
  const encounterId = 123;
  it('displays the correct header, specimen pill, and save button', () => {
    const {getByText} = renderWithProviders(
      <RadiologyAndPulmFormView
        selectedTest={selectedTest}
        encounterId={encounterId}
      />,
    );
    expect(
      getByText(`Record results for ${selectedTest.name}`),
    ).toBeOnTheScreen();
    expect(getByText('Specimen')).toBeOnTheScreen();
    expect(getByText('Save')).toBeOnTheScreen();
  });
});

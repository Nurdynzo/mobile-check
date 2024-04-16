import React from 'react';
import {renderWithProviders} from 'test-utils';
import NursingDiagnosis from '.';
import {EMPTY_STRING} from '@/utils/constants';

describe('NursingDiagnosis', () => {
  it('renders correctly', () => {
    const {getByText} = renderWithProviders(
      <NursingDiagnosis
        formProps={{
          handleAddItem: () => null,
          handleRemoveItem: () => null,
          selectedItems: {
            nursingOutcomes: [{id: '123', name: 'Name'}],
            nursingDiagnosis: [{id: '123', name: 'Name'}],
            nursingIntervention: [{id: '123', name: 'Name'}],
            activities: [{id: '123', name: 'Name'}],
            evaluation: [{id: '123', name: 'Name'}],
          },
          setSelectedItems: () => null,
          setText: () => null,
          text: {
            nursingOutcomes: EMPTY_STRING,
            nursingDiagnosis: EMPTY_STRING,
            nursingIntervention: EMPTY_STRING,
            activities: EMPTY_STRING,
            evaluation: EMPTY_STRING,
          },
          reset: () => null,
        }}
      />,
    );

    expect(getByText('Nursing diagnosis')).toBeOnTheScreen();
  });
});

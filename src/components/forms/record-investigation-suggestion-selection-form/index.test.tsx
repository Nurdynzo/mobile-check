import React from 'react';
import {renderWithProviders} from 'test-utils';
import RecordInvestigationSuggestionSelectionForm from './index';
import {EMPTY_STRING} from '@/utils/constants';

describe('RecordInvestigationSuggestionSelectionForm', () => {
  const mockSuggestions = [
    {id: '1', name: 'Test Suggestion 1'},
    {id: '2', name: 'Test Suggestion 2'},
  ];

  it('displays all suggestions with correct text', () => {
    const {getByText} = renderWithProviders(
      <RecordInvestigationSuggestionSelectionForm
        formProps={{
          handleAddItem: () => null,
          handleRemoveItem: () => null,
          selectedItems: [],
          setSelectedItems: _ => null,
          setText: _ => _,
          text: EMPTY_STRING,
        }}
        suggestions={mockSuggestions}
        expandSheetHeaderTitle=""
        isSingleSelect={true}
      />,
    );

    mockSuggestions.forEach(suggestion => {
      const suggestionElement = getByText(suggestion.name);
      expect(suggestionElement).toBeOnTheScreen();
    });
  });
});

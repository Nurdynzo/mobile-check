import React from 'react';
import {renderWithProviders} from 'test-utils';
import CollapsibleSiteCard from '.';
import {EMPTY_STRING} from '@/utils/constants';
describe('CollapsibleSiteCard', () => {
  it('should render title', () => {
    const {getByText} = renderWithProviders(
      <CollapsibleSiteCard title="Intervention" />,
    );
    expect(getByText('Intervention')).toBeOnTheScreen();
  });
  it('should render suggestions', () => {
    const {getByText} = renderWithProviders(
      <CollapsibleSiteCard
        shouldOpen
        formProps={{
          handleAddItem: () => null,
          handleRemoveItem: () => null,
          selectedItems: [],
          setSelectedItems: () => null,
          setText: () => null,
          text: EMPTY_STRING,
          reset: () => null,
        }}
        suggestions={[{id: '1', name: 'test'}]}
      />,
    );
    expect(getByText('test')).toBeOnTheScreen();
  });
});

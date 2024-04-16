import React from 'react';
import {View} from 'react-native';
import {renderWithProviders} from 'test-utils';
import DropdownList from '.';
import {AppText} from '../common';

const viewRef = React.createRef<View>();

describe('DropdownList', () => {
  it('renders correctly when visible', () => {
    const {getByText} = renderWithProviders(
      <>
        <View ref={viewRef} />
        <DropdownList
          viewRef={viewRef}
          visible={true}
          isLoading={false}
          data={[{id: 1, name: 'malaria'}]}
          renderItem={({item}) => <AppText text={item.name} />}
        />
      </>,
    );
    expect(getByText('malaria')).toBeOnTheScreen();
  });

  it('renders loading indicator when isLoading is true', () => {
    const {queryAllByText} = renderWithProviders(
      <DropdownList
        viewRef={viewRef}
        visible={true}
        isLoading={true}
        data={[{id: 1, name: 'malaria'}]}
        renderItem={({item}) => <AppText text={item.name} />}
      />,
    );

    expect(queryAllByText('malaria').length).toBe(0);
  });
});

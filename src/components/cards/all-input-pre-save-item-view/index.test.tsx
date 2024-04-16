import {AppText} from '@/components/common';
import {fireEvent, waitFor} from '@testing-library/react-native';
import React from 'react';
import {renderWithProviders} from 'test-utils';
import AllInputPresaveItemView from '.';

describe('AllInputPresaveItemView', () => {
  it('should render TextComponent on Screen', () => {
    const {getByText} = renderWithProviders(
      <AllInputPresaveItemView TextComponent={<AppText text="Headache" />} />,
    );

    const textComponent = getByText('Headache');
    expect(textComponent).toBeOnTheScreen();
  });
  it('should call onEdit when Edit option is selected', async () => {
    const onEditMock = jest.fn();
    const {getByText} = renderWithProviders(
      <AllInputPresaveItemView
        TextComponent={<AppText text="Headache" />}
        onEdit={onEditMock}
      />,
    );

    const preSaveTile = getByText('Headache');

    await waitFor(() => {
      fireEvent.press(preSaveTile);
    });

    const editButton = getByText('Edit');

    await waitFor(() => {
      fireEvent.press(editButton);
    });

    expect(onEditMock).toHaveBeenCalledTimes(1);
  });

  it('should call onRemove when Remove option is selected', async () => {
    const onRemoveMock = jest.fn();
    const {getByText} = renderWithProviders(
      <AllInputPresaveItemView
        TextComponent={<AppText text="Headache" />}
        onRemove={onRemoveMock}
      />,
    );

    const preSaveTile = getByText('Headache');

    await waitFor(() => {
      fireEvent.press(preSaveTile);
    });

    const removeButton = getByText('Remove');
    await waitFor(() => {
      fireEvent.press(removeButton);
    });

    expect(onRemoveMock).toHaveBeenCalledTimes(1);
  });
});

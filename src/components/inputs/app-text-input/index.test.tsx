import AppTextInput from '@/components/inputs/app-text-input/index';
import {fireEvent} from '@testing-library/react-native';
import React from 'react';
import {renderWithProviders} from '../../../../test-utils';

describe('app-text-input', () => {
  it('should render placehoder', () => {
    const placeholder = 'test';

    const {getByPlaceholderText} = renderWithProviders(
      <AppTextInput placeholder={placeholder} />,
    );

    const input = getByPlaceholderText(placeholder);

    expect(input).toBeOnTheScreen();
  });

  it('should trigger onChange handler once on change text input', () => {
    const onChangeTextMock = jest.fn();
    const placeholder = 'test';

    const {getByPlaceholderText} = renderWithProviders(
      <AppTextInput
        placeholder={placeholder}
        onChangeText={onChangeTextMock}
      />,
    );

    const input = getByPlaceholderText(placeholder);

    fireEvent.changeText(input, 'boy');

    expect(onChangeTextMock).toHaveBeenCalledTimes(1);
  });
});

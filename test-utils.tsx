import {PreloadedState} from 'redux';
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {RenderOptions, render, renderHook} from '@testing-library/react-native';
import {AppStore, RootState, setupStore} from './src/state/store';
import {Host} from 'react-native-portalize';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({
    children,
  }: PropsWithChildren<NonNullable<unknown>>): JSX.Element {
    return (
      <Provider store={store}>
        <Host>{children}</Host>
      </Provider>
    );
  }
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}

export function renderHookWithProviders<Result, Props>(
  hookRenderCallback: (initialProps: Props) => Result,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren): JSX.Element {
    return (
      <Provider store={store}>
        <Host>{children}</Host>
      </Provider>
    );
  }

  return {
    store,
    ...renderHook(hookRenderCallback, {wrapper: Wrapper, ...renderOptions}),
  };
}

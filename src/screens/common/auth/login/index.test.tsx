import {renderWithProviders} from '../../../../../test-utils';
import React from 'react';
import {LoginScreen} from '@/screens/common/auth';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {routesNames} from '@/navigation/routes';
import {AuthStatus} from '@/state/slices/auth/type';
import {GeneralScreenProps} from '@/navigation/types';

const mockNavigate = {
  navigate: jest.fn(),
  dispatch: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  canGoBack: jest.fn(),
  dangerouslyGetState: jest.fn(),
};
const mockRoute = {
  key: 'LOGIN_KEY',
  name: 'LOGIN' as const,
  params: undefined,
};

const mockNavigation = {
  navigation: mockNavigate,
  route: mockRoute,
} as unknown as GeneralScreenProps<'LOGIN'>;

describe('login screen', () => {
  it('renders businessCode input label', () => {
    const {getByText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );
    expect(getByText('Unique business code')).toBeOnTheScreen();
  });

  it('renders businessCode input', () => {
    const {getByPlaceholderText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );
    expect(
      getByPlaceholderText('Search unique business code'),
    ).toBeOnTheScreen();
  });

  it('renders email input label', () => {
    const {getByText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );
    expect(getByText('Email address')).toBeOnTheScreen();
  });

  it('renders email input', () => {
    const {getByPlaceholderText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );
    expect(getByPlaceholderText('Enter email address')).toBeOnTheScreen();
  });

  it('renders password input label', () => {
    const {getByText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );
    expect(getByText('Password')).toBeOnTheScreen();
  });

  it('renders password input', () => {
    const {getByPlaceholderText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );
    expect(getByPlaceholderText('Enter password')).toBeOnTheScreen();
  });

  it('renders forgot password link-button', () => {
    const {getByText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );
    expect(getByText('Forgot password?')).toBeOnTheScreen();
  });

  it('renders login button', () => {
    const {getByText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );
    expect(getByText('Login')).toBeOnTheScreen();
  });

  it('navigates to forgot password screen', async () => {
    const {getByText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );

    const forgotPasswordButton = getByText('Forgot password?');

    fireEvent.press(forgotPasswordButton);

    await waitFor(() => {
      expect(mockNavigation.navigation.navigate).toHaveBeenCalledTimes(1);
    });

    // Asserting screen navigate
    expect(mockNavigation.navigation.navigate).toHaveBeenCalledWith(
      routesNames.RESET_PASSWORD,
    );
  });

  it('given an invalid email should show error on email input', async () => {
    const {getByText, getByPlaceholderText} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );

    const email = 'admin@';
    const password = 'password';

    const emailField = getByPlaceholderText('Enter email address');
    const passwordField = getByPlaceholderText('Enter password');
    const loginButton = getByText('Login');

    expect(emailField).toBeOnTheScreen();
    expect(passwordField).toBeOnTheScreen();
    expect(loginButton).toBeOnTheScreen();

    fireEvent.changeText(emailField, email);
    fireEvent.changeText(passwordField, password);
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(emailField.props.value).toBe(email);
    });

    expect(passwordField.props.value).toBe(password);
    expect(getByText('Invalid email')).toBeOnTheScreen();
  });

  // TODO(Philip): figure out a way to successfully mock a useLazyQuery hook.
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('given valid email and password should log user in', async () => {
    const {getByText, getByPlaceholderText, store} = renderWithProviders(
      <LoginScreen {...mockNavigation} />,
    );

    const emailField = getByPlaceholderText('Enter email address');
    const passwordField = getByPlaceholderText('Enter password');
    const loginButton = getByText('Login');

    fireEvent.changeText(emailField, 'okhaephilip2+2@gmail.com');
    fireEvent.changeText(passwordField, 'Password!');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(store.getState().auth.status).toBe(AuthStatus.loggedIn);
    });
  });
});

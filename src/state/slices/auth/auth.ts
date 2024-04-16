import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../store';
import {AuthState, AuthStatus, LoginPayload} from './type';

const initialState = {
  status: AuthStatus.none,
  userInformation: null,
  userClaims: null,
  role: 'None',
  user: null,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (_, action: PayloadAction<LoginPayload>) => {
      return {
        status: AuthStatus.loggedIn,
        userInformation: action.payload.userInformation,
        role: action.payload.role,
        userClaims: action.payload.userClaims,
        user: action.payload.user,
      };
    },
    logOut: state => {
      return {
        status: AuthStatus.loggedOut,
        userInformation: null,
        role: state.role,
        userClaims: null,
        user: null,
      };
    },
  },
});

export const {login, logOut} = authSlice.actions;

export const selectAuth = (state: RootState): AuthState => state.auth;

export default authSlice.reducer;

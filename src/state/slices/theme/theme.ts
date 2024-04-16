import {createSlice} from '@reduxjs/toolkit';
import {
  LIGHT_COLORS,
  DARK_COLORS,
  ColorDefinitions,
} from '../../../resources/colors';

type ThemeState = {
  defaultMode: 'DARK' | 'LIGHT';
  colors: ColorDefinitions;
};

const initialState: ThemeState = {
  colors: {...LIGHT_COLORS},
  defaultMode: 'LIGHT',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    reset: () => initialState,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    darkMode: (state: any) => {
      state.colors = {...DARK_COLORS};
      state.defaultMode = 'DARK';
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lightMode: (state: any) => {
      state.colors = {...LIGHT_COLORS};
      state.defaultMode = 'LIGHT';
    },
  },
});

export const {reset, darkMode, lightMode} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

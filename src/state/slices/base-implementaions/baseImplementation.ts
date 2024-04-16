import {Draft, PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface OverlaySearchBarType<T> {
  searchTerm: string;
  selectedResult?: T;
}

export const createOverlaySearchBarSlice = <T>({
  name,
  initialState,
}: {
  name: string;
  initialState: OverlaySearchBarType<T>;
}) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      setSearchTerm: (state, action: PayloadAction<string>) => {
        state.searchTerm = action.payload;
      },
      setSelectedResult: (
        state,
        action: PayloadAction<Draft<T> | undefined>,
      ) => {
        state.selectedResult = action.payload;
      },
    },
  });
};

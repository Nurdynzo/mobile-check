import {RootState} from '@/state/store';
import {
  OverlaySearchBarType,
  createOverlaySearchBarSlice,
} from '../../base-implementaions/baseImplementation';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {EMPTY_STRING} from '@/utils/index';

const initialState: OverlaySearchBarType<SnowstormSimpleResponseDto> = {
  searchTerm: EMPTY_STRING,
};

const presentingComplaintsSearchBarSlice = createOverlaySearchBarSlice({
  name: 'presentingComplaintsSearchBar',
  initialState,
});

export const setPresentingComplaintsSearchTerm =
  presentingComplaintsSearchBarSlice.actions.setSearchTerm;

export const setPresentingComplaintsSelectedResult =
  presentingComplaintsSearchBarSlice.actions.setSelectedResult;

export const selectPresentingComplaintsSearchTerm = (
  state: RootState,
): string => state.presentingComplaintsSearchBar.searchTerm;

export const selectPresentingComplaintsSelectedResult = (
  state: RootState,
): SnowstormSimpleResponseDto | undefined =>
  state.presentingComplaintsSearchBar.selectedResult;

export default presentingComplaintsSearchBarSlice.reducer;

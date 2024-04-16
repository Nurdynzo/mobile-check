import {RootState} from '@/state/store';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';

export type SocratesState = {
  mainSearchResult: {id: string; name: string};
  note: string;
  site: Site;
  radiation: Radiation;
  associations: Associations;
  exacerbating: Exacerbating;
  onSet: OnSet;
  character: Character;
  severity: number;
  timeCourse: TimeCourse;
};

export type Site = {
  activePills: Array<Pill>;
  bodyPartSearch: string;
};

export type Radiation = {
  activePills: Array<Pill>;
  bodyPartSearch: string;
};

export type Associations = {
  activePills: Array<Pill>;
  bodyPartSearch: string;
};

export type Exacerbating = {
  activePills: Array<Pill>;
  symptomSearch: string;
};

export type OnSet = {
  interval: number;
  intervalUnit: string;
  cyclicality: string;
};

export type Character = {
  activePills: Pill[];
  characteristicSearch: string;
};

export type TimeCourse = {
  interval: number;
  intervalUnit: string;
  symptomsFelt: string;
};

export type Pill = {
  value: string;
  type?: string;
  snowmedId?: string;
};
export const initialState = {
  socratesState: {
    note: '',
    mainSearchResult: {id: '', name: ''},
    site: {
      bodyPartSearch: '',
      activePills: [],
    },
    radiation: {
      bodyPartSearch: '',
      activePills: [],
    },
    associations: {
      bodyPartSearch: '',
      activePills: [],
    },
    exacerbating: {
      symptomSearch: '',
      activePills: [],
    },
    onSet: {
      interval: 0,
      intervalUnit: '',
      cyclicality: '',
    },
    character: {
      characteristicSearch: '',
      activePills: [],
    },
    severity: 0,
    timeCourse: {
      interval: 0,
      intervalUnit: '',
      symptomsFelt: '',
    },
  },
  savedSocratesStates: [],
} as {
  savedSocratesStates: SocratesState[];
  socratesState: SocratesState;
};

const presentingComplaintsSlice = createSlice({
  name: 'presentingComplaints',
  initialState,
  reducers: {
    setTempState: (state, action) => {
      state.socratesState = _.mergeWith(
        state.socratesState,
        action.payload,
        (objValue, srcValue) => {
          if (_.isArray(objValue)) {
            return srcValue;
          }
        },
      );
    },
    resetTempSocratesState: state => {
      state.socratesState = initialState.socratesState;
    },
    setTempStateSite: (
      state,
      {
        payload,
      }: PayloadAction<
        | {type: 'activePills'; data: Pill[]}
        | {type: 'bodyPartSearch'; data: string}
      >,
    ) => {
      state.socratesState.site = {
        ...state.socratesState.site,
        [payload.type]: payload.data,
      };
    },
    setTempStateOnset: (
      state,
      {
        payload,
      }: PayloadAction<
        | {type: 'interval'; data: number}
        | {type: 'intervalUnit'; data: string}
        | {type: 'cyclicality'; data: string}
      >,
    ) => {
      state.socratesState.onSet = {
        ...state.socratesState.onSet,
        [payload.type]: payload.data,
      };
    },
    setTempStateCharacter: (
      state,
      {
        payload,
      }: PayloadAction<
        | {type: 'activePills'; data: Pill[]}
        | {type: 'characteristicSearch'; data: string}
      >,
    ) => {
      state.socratesState.character = {
        ...state.socratesState.character,
        [payload.type]: payload.data,
      };
    },
    setTempStateRadiation: (
      state,
      {
        payload,
      }: PayloadAction<
        | {type: 'activePills'; data: Pill[]}
        | {type: 'bodyPartSearch'; data: string}
      >,
    ) => {
      state.socratesState.radiation = {
        ...state.socratesState.radiation,
        [payload.type]: payload.data,
      };
    },
    setTempStateAssociations: (
      state,
      {
        payload,
      }: PayloadAction<
        | {type: 'activePills'; data: Pill[]}
        | {type: 'bodyPartSearch'; data: string}
      >,
    ) => {
      state.socratesState.associations = {
        ...state.socratesState.associations,
        [payload.type]: payload.data,
      };
    },
    setTempStateTimeCourse: (
      state,
      {
        payload,
      }: PayloadAction<
        | {type: 'interval'; data: number}
        | {type: 'intervalUnit'; data: string}
        | {type: 'symptomsFelt'; data: string}
      >,
    ) => {
      state.socratesState.timeCourse = {
        ...state.socratesState.timeCourse,
        [payload.type]: payload.data,
      };
    },
    setTempStateExacerbating: (
      state,
      {
        payload,
      }: PayloadAction<
        | {type: 'activePills'; data: Pill[]}
        | {type: 'symptomSearch'; data: string}
      >,
    ) => {
      state.socratesState.exacerbating = {
        ...state.socratesState.exacerbating,
        [payload.type]: payload.data,
      };
    },
    setTempStateSeverity: (state, action: PayloadAction<number>) => {
      state.socratesState.severity = action.payload;
    },
    setTempStateNote: (state, action: PayloadAction<string>) => {
      state.socratesState.note = action.payload;
    },
    setTempStateMainSearchResult: (
      state,
      {payload}: PayloadAction<{id: string; name: string}>,
    ) => {
      state.socratesState.mainSearchResult = payload;
    },
    setSocratesStates: (state, action: PayloadAction<SocratesState>) => {
      state.socratesState = action.payload;
    },
    setSavedSocratesStates: (state, action: PayloadAction<SocratesState[]>) => {
      state.savedSocratesStates = action.payload;
    },
  },
});

export const {
  setSavedSocratesStates,
  setTempState,
  setTempStateOnset,
  setTempStateSite,
  setTempStateNote,
  setTempStateAssociations,
  setTempStateCharacter,
  setTempStateExacerbating,
  setTempStateRadiation,
  setTempStateSeverity,
  setTempStateTimeCourse,
  resetTempSocratesState,
  setTempStateMainSearchResult,
  setSocratesStates,
} = presentingComplaintsSlice.actions;

export const selectStates = (state: RootState): SocratesState[] => {
  return state.presentingComplaints.savedSocratesStates;
};

export const selectTempState = (state: RootState): SocratesState => {
  return state.presentingComplaints.socratesState;
};

export default presentingComplaintsSlice.reducer;

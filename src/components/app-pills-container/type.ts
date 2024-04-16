import {SnowstormSimpleResponseDto} from '../../state/services/snowstorm';

export type appPillsContainerType = {
  suggestions?: SnowstormSimpleResponseDto[];
  setSuggestions?: (suggestion: {id: string; name: string}) => void;
  height?: number;
};

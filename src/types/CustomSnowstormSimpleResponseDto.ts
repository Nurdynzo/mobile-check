import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';

export type CustomSnowstormSimpleResponseDto<T> = SnowstormSimpleResponseDto & {
  isInActive?: boolean;
  data?: T;
};

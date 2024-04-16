import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {NewAllInputsSuggestionFormHookType} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-suggestion-form/type';
import VoidFunction from '@/types/voidfunction';
import {ReactNode} from 'react';

export type CollapsibleSiteCardProps<
  T extends NewCustomSnowstormSimpleResponseDto,
> = {
  leadingLabel?: string;
  shouldOpen?: boolean;
  title?: string;

  suggestions?: T[];
  isSummary?: boolean;
  isPreviewing?: boolean;
  selectedData?: T[];
  formProps?: NewAllInputsSuggestionFormHookType<T>;
  handleRemoveItem?: (props: T) => void;
  onPressSave?: VoidFunction;
  Summaries?: ReactNode;
  onToggle?: VoidFunction;

  isDisabled?: boolean;
  isLoading?: boolean;
  hideSaveButton?: boolean;
};

import {DownCaretIcon} from '@/assets/svg';
import {AllInputsPanelWithTitleCard} from '@/components/cards';
import {NewAllInputsSuggestionForm} from '@/components/forms';
import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {NewAllInputsSuggestionFormHookType} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-suggestion-form/type';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import React, {ReactNode} from 'react';

const CollapsibleAllInputsPanelWithTitleCard = <
  T extends NewCustomSnowstormSimpleResponseDto,
>({
  title,
  suggestions,
  formProps,
  isPrecedingFormEmpty,
  SaveButton,
  SummaryView,
  onToggleHeader,
  disableHeaderToggle,
}: {
  title: string;
  SummaryView: ReactNode;
  isPrecedingFormEmpty: boolean;
  SaveButton: JSX.Element;
  suggestions: T[];
  formProps: NewAllInputsSuggestionFormHookType<T>;
  onToggleHeader?: () => void;
  disableHeaderToggle?: boolean;
}) => {
  const {colors} = useColors();

  const shouldShowFormInput = !isPrecedingFormEmpty;

  return (
    <AllInputsPanelWithTitleCard
      title={title}
      onPressHeader={onToggleHeader}
      disableHeaderPress={disableHeaderToggle}
      showSeparator={shouldShowFormInput}
      TralingComponent={
        <DownCaretIcon stroke={colors.text400} style={{marginLeft: wp(8)}} />
      }>
      {shouldShowFormInput && (
        <>
          <NewAllInputsSuggestionForm
            expandSheetHeaderTitle={EMPTY_STRING}
            formProps={formProps}
            suggestions={suggestions}
          />
          {SaveButton}
        </>
      )}
      {SummaryView}
    </AllInputsPanelWithTitleCard>
  );
};

export default CollapsibleAllInputsPanelWithTitleCard;

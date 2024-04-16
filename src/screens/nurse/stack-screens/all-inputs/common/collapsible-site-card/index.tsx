import {AllInputsPillButton, AppButton} from '@/components/buttons';
import AllInputCollapsibleContent from '@/components/buttons/all-inputs-collapsible-content';
import {allInputsCollapsibleContentStyles} from '@/components/buttons/all-inputs-collapsible-content/styles';
import {AppText} from '@/components/common';
import {NewAllInputsSuggestionForm} from '@/components/forms';
import {NewCustomSnowstormSimpleResponseDto} from '@/components/forms/all-inputs-suggestion-form/types';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';
import {View} from 'react-native';

import {CollapsibleSiteCardProps} from './type';
import {collapsibleSiteCardStyles} from './styles';

//TODO(ZUCCI): Combine the different states here, to an enum.
const CollapsibleSiteCard = <T extends NewCustomSnowstormSimpleResponseDto>({
  leadingLabel,
  title = 'Enter title',
  isSummary,
  isPreviewing = false,
  suggestions = [],
  formProps,
  selectedData = [],
  handleRemoveItem,
  shouldOpen,
  onPressSave,
  Summaries,
  onToggle,
  isLoading,
  isDisabled,
  hideSaveButton,
}: CollapsibleSiteCardProps<T>) => {
  return (
    <>
      <AllInputCollapsibleContent
        shouldOpen={shouldOpen}
        onToggle={onToggle}
        title={title}
        isPreviewing={isPreviewing}
        children={
          !isSummary ? (
            <>
              {leadingLabel && (
                <AppText
                  type="subtitle_semibold"
                  color="text300"
                  text={leadingLabel}
                  style={{paddingBottom: wp(8)}}
                />
              )}

              {isPreviewing && (
                <Previewing
                  selectedData={selectedData}
                  handleRemoveItem={handleRemoveItem}
                />
              )}

              {!isPreviewing && (
                <Suggestions
                  hideSaveButton={hideSaveButton}
                  suggestions={suggestions}
                  formProps={formProps}
                  onPressSave={onPressSave}
                  isLoading={isLoading}
                  isDisabled={isDisabled}
                />
              )}
            </>
          ) : (
            <>{Summaries}</>
          )
        }
      />
    </>
  );
};

const Previewing = <T extends NewCustomSnowstormSimpleResponseDto>({
  selectedData = [],
  handleRemoveItem = item => item,
}: CollapsibleSiteCardProps<T>) => {
  const {colors} = useColors();
  const styles = collapsibleSiteCardStyles({colors});

  return (
    <View style={styles.pillContainer}>
      {selectedData.map((item, index) => (
        <AllInputsPillButton
          key={index}
          isSelected
          text={item?.name as string}
          onPress={() => handleRemoveItem(item)}
        />
      ))}
    </View>
  );
};

const Suggestions = <T extends NewCustomSnowstormSimpleResponseDto>({
  suggestions = [],
  formProps,
  onPressSave,
  isDisabled,
  isLoading,
  hideSaveButton = false,
}: CollapsibleSiteCardProps<T>) => {
  const {colors} = useColors();
  const styles = allInputsCollapsibleContentStyles({colors});
  return (
    <>
      {formProps && (
        <>
          <NewAllInputsSuggestionForm
            expandSheetHeaderTitle={EMPTY_STRING}
            formProps={formProps}
            suggestions={suggestions || []}
          />
          {!hideSaveButton && (
            <AppButton
              text="Save"
              isDisabled={isDisabled}
              isLoading={isLoading}
              onPress={onPressSave}
              containerStyle={styles.save}
            />
          )}
        </>
      )}
    </>
  );
};

export default CollapsibleSiteCard;

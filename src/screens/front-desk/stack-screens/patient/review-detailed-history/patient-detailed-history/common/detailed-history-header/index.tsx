import {AppButton} from '@/components/buttons';
import {AppSeperator, AppText} from '@/components/common';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {detailedHistoryHeaderStyles} from './styles';

const styles = detailedHistoryHeaderStyles;
const DetailedHistoryHeader: FunctionComponent<{
  title?: string;
  onButtonPress?: () => void;
  buttonDisabled?: boolean;
  buttonTitle?: string;
  lastEntered?: {
    by: string;
    day: string;
    time: string;
  };
}> = ({title, onButtonPress, buttonTitle, lastEntered, buttonDisabled}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleConatiner}>
        <AppText text={title} type="title_semibold" />
        <AppButton
          text={buttonTitle}
          isDisabled={buttonDisabled}
          containerStyle={styles.editBtn}
          onPress={onButtonPress}
        />
      </View>
      {lastEntered && (
        <>
          <AppText
            text={`Last entered by: ${lastEntered?.by}`}
            type="caption_medium"
            color="text300"
          />
          <AppText
            text={`As at ${lastEntered?.time} | ${lastEntered?.day}`}
            type="caption_medium"
            color="text300"
          />
        </>
      )}
      <AppSeperator style={styles.separator} />
    </View>
  );
};

export default DetailedHistoryHeader;

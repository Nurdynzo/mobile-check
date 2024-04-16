import {AwesomeAvatar, SweatyAvatar, ThumbsDownAvatar} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {AppRow, AppText} from '@/components/common';
import {AppTextInput} from '@/components/inputs';
import MenuOption from '@/components/menu-option';
import {AppContentSheet} from '@/components/sheets';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {wp} from '@/resources/config';
import React from 'react';
import {View} from 'react-native';
import {giveFeedbackOptionStyles} from './styles';

const GiveFeedbackOption = () => {
  const {colors} = useColors();
  const styles = giveFeedbackOptionStyles({colors});
  const {
    sheetRef: giveFeedbackSheetRef,
    openSheet: openFeedbackSheet,
    closeSheet: closeFeedbackSheet,
  } = useSheet();
  return (
    <>
      <MenuOption label="Give feedback" onPress={openFeedbackSheet} />
      <AppContentSheet
        sheetRef={giveFeedbackSheetRef}
        removeHeader
        headerTitle="Give Feedback">
        <View style={styles.wrapper}>
          <AppText
            type="title_semibold"
            color="text300"
            text={'Primary job'}
            align="center"
          />
          <AppText
            type="subtitle_medium"
            color="text300"
            text={'Tell us about your experience using PlateauMed'}
            align="center"
            style={{paddingHorizontal: wp(24)}}
          />
          <View style={styles.container}>
            <AppRow>
              <ThumbsDownAvatar />
              <SweatyAvatar />
              <AwesomeAvatar />
            </AppRow>
            <AppTextInput
              multiline
              height={200}
              placeholder="Write your feedback"
            />
            <AppButton
              text="Send"
              containerStyle={{marginTop: wp(200)}}
              onPress={closeFeedbackSheet}
            />
          </View>
        </View>
      </AppContentSheet>
    </>
  );
};

export default GiveFeedbackOption;

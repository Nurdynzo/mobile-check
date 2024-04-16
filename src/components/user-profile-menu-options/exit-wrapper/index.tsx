import {InfoCircleIcon} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {AppRow, AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {ColorKeys} from '@/resources/colors';
import VoidFunction from '@/types/voidfunction';
import React from 'react';
import {View} from 'react-native';
import {exitWrapperStyles} from './styles';

const ExitWrapper = ({
  closeSheet,
  onProceed,
  brief,
  question,
  title,
  titleColor,
}: {
  closeSheet?: VoidFunction;
  onProceed?: VoidFunction;
  title?: string;
  titleColor: ColorKeys;
  brief?: string;
  question?: string;
}) => {
  const {colors} = useColors();
  const styles = exitWrapperStyles({colors});
  return (
    <>
      <View style={styles.container}>
        <AppRow>
          <AppText type="title_semibold" color={titleColor} text={title} />
          <InfoCircleIcon fill={colors[titleColor]} />
        </AppRow>
        <View style={styles.textCard}>
          <AppText type="body_1_medium" text={brief} />
          <AppText type="body_1_medium" color="text300" text={question} />
        </View>
        <AppRow>
          <AppButton
            buttonColor="transparent"
            textColor="primary400"
            width={151}
            text="Back"
            onPress={closeSheet}
          />
          <AppButton width={151} text="Proceed" onPress={onProceed} />
        </AppRow>
      </View>
    </>
  );
};

export default ExitWrapper;

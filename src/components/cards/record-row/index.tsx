import {DownCaretIcon, InfoCircleIcon} from '@/assets/svg';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../../common';
import {recordRowStyles} from './styles';
import {RecordRowProps} from './type';
import {useColors} from '@/hooks/useColors';

const RecordRow = ({
  children,
  detail = 'details',
  icon,
  value,
  hasInfo = false,
  onPressInfo,
  customFontSize,
  hasDropDown = false,
  onPressDropDown,
  detailsColor = 'text300',
  detailType = 'label_semibold',
  extraCardRowStyles,
  extraRecordRowStyles,
}: RecordRowProps) => {
  const {colors} = useColors();
  const styles = recordRowStyles();
  return (
    <View style={[styles.cardDetail, extraCardRowStyles]}>
      {icon}
      <View style={[styles.leftRow, extraRecordRowStyles]}>
        {detail && (
          <View style={styles.detailRow}>
            <TouchableOpacity activeOpacity={1} onPress={onPressDropDown}>
              <AppText
                text={detail}
                style={customFontSize ? {fontSize: customFontSize} : {}}
                color={detailsColor}
                type={detailType}
              />
            </TouchableOpacity>
            {hasDropDown && (
              <TouchableOpacity onPress={onPressDropDown}>
                <DownCaretIcon stroke={colors.text300} />
              </TouchableOpacity>
            )}
          </View>
        )}
        {value && (
          <AppText text={value} color="text50" type="body_2_semibold" />
        )}
        <View style={styles.subRow}>
          <View>{children}</View>
          {hasInfo && (
            <TouchableOpacity onPress={onPressInfo}>
              <InfoCircleIcon fill={colors.text50} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default RecordRow;

import {DownCaretIcon} from '@/assets/svg';
import {AppRow, AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {detectTouch, fs} from '@/resources/config';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TitleRowProps} from '../range-input/type';

const RangeTitleRow = ({
  title,
  hasDropDown,
  onPressDropDown,
  extraTitleRowStyles,
}: TitleRowProps) => {
  const {colors} = useColors();
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPressDropDown}>
      <AppRow columnGap={4}>
        <AppText
          type="title_semibold"
          style={[{fontSize: fs(12)}, extraTitleRowStyles]}
          color="text50"
          text={title}
        />
        {hasDropDown && (
          <TouchableOpacity hitSlop={detectTouch} onPress={onPressDropDown}>
            <DownCaretIcon stroke={colors.text50} />
          </TouchableOpacity>
        )}
      </AppRow>
    </TouchableOpacity>
  );
};

export default RangeTitleRow;

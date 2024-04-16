import {
  ActiveCalendarIcon,
  ContinuousAltIcon,
  DownCaretIcon,
  NoteIcon,
} from '@/assets/svg';
import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import React, {FunctionComponent} from 'react';
import {Pressable, View} from 'react-native';
import {viewPaperRecordsHeaderStyles} from './styles';
import {AppIconButton} from '@/components/buttons';

const ViewPaperRecordsHeader: FunctionComponent<{
  isHorizontalScroll?: boolean;
  onPressHorizontalScroll: () => void;
  onPressCalendar?: () => void;
  disbaleCalendarButton?: boolean;
  onSortPress?: () => void;
  sortByText?: string;
}> = ({
  isHorizontalScroll,
  onPressHorizontalScroll,
  onPressCalendar,
  disbaleCalendarButton,
  onSortPress,
  sortByText = 'Earliest',
}) => {
  const {colors} = useColors();
  const styles = viewPaperRecordsHeaderStyles;
  return (
    <View style={styles.container}>
      <Pressable style={styles.filter} onPress={onSortPress}>
        <AppText text={sortByText} color={'primary400'} />
        <DownCaretIcon stroke={colors.primary400} />
      </Pressable>
      <View style={styles.actionBtns}>
        <AppIconButton
          onPress={onPressCalendar}
          icon={
            <ActiveCalendarIcon
              fill={
                colors?.[disbaleCalendarButton ? 'primary50' : 'primary400']
              }
            />
          }
          isDisabled={disbaleCalendarButton}
          width={44}
          height={44}
        />
        <AppIconButton
          onPress={onPressHorizontalScroll}
          icon={isHorizontalScroll ? <NoteIcon /> : <ContinuousAltIcon />}
          width={44}
          height={44}
        />
      </View>
    </View>
  );
};

export default ViewPaperRecordsHeader;

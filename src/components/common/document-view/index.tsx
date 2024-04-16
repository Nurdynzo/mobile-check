import {useColors} from '@/hooks/useColors';
import React, {FunctionComponent, ReactNode} from 'react';
import {View} from 'react-native';
import AppText from '../app-text';
import {docViewStyles} from './styles';
import {SCREEN_HEIGHT} from '@/resources/config';

const DocumentView: FunctionComponent<{
  DocView: ReactNode;
  docNum: number;
  isHorizontalScroll?: boolean;
  verticalHeight?: number;
}> = ({
  DocView,
  docNum,
  isHorizontalScroll,
  verticalHeight = SCREEN_HEIGHT * 0.6,
}) => {
  const {colors} = useColors();
  const styles = docViewStyles({colors, isHorizontalScroll, verticalHeight});
  return (
    <View style={styles.paperContainer}>
      <View style={styles.flex1}>
        {DocView}
        <View style={styles.indicatorView}>
          <AppText text={docNum} align="center" />
        </View>
      </View>
    </View>
  );
};

export default DocumentView;

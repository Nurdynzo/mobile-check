import React from 'react';
import {TouchableOpacity} from 'react-native';
import {DownCaretIcon} from '../../assets/svg';
import {useColors} from '../../hooks/useColors';
import AppRow from '../common/app-row';
import AppText from '../common/app-text';
import {appDropDownListItemStyle} from './styles';
import {appDropDownListItemProp} from './type';

const AppDropDownListItem = ({
  text = 'Enter Link',
  onPress,
  color = 'black',
  selected,
  icon = <DownCaretIcon style={{transform: [{rotate: '270deg'}]}} />,
}: appDropDownListItemProp) => {
  const {colors} = useColors();
  const styles = appDropDownListItemStyle({colors, selected});

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppRow>
        <AppText
          type="body_1_semibold"
          color={color}
          text={text}
          align={'left'}
        />
        {icon}
      </AppRow>
    </TouchableOpacity>
  );
};

export default AppDropDownListItem;

import {TabButton} from '@/components/tab-button';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import React from 'react';
import {View} from 'react-native';
import {SocratesSuggestionToggleButtonStyles} from './styles';
import {SuggestionToggleButtonItemType} from './types';

const SocratesSuggestionToggleButton = <T,>({
  activeItem,
  items,
  setActiveItem,
}: {
  activeItem: SuggestionToggleButtonItemType<T>;
  setActiveItem: (item: SuggestionToggleButtonItemType<T>) => void;
  items: SuggestionToggleButtonItemType<T>[];
}) => {
  const {colors} = useColors();
  const styles = SocratesSuggestionToggleButtonStyles({colors});
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <TabButton
            key={index}
            label={item.label}
            activeTab={activeItem.label}
            inActiveBgColor={'neutral25'}
            inActiveTextColor={'text300'}
            setActiveTab={_ => setActiveItem(item)}
            textType={'button_semibold'}
            otherStyles={{
              width: undefined,
              paddingHorizontal: wp(16),
              paddingVertical: wp(4),
            }}
          />
        );
      })}
    </View>
  );
};

export default SocratesSuggestionToggleButton;

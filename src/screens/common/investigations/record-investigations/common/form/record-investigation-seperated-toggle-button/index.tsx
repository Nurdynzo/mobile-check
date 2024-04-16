import {AppRow, AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import VoidFunction from '@/types/voidfunction';
import {EMPTY_STRING} from '@/utils/constants';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {recordInvestigationSeperatedToggleButtonStyles} from './styles';

const RecordInvestigationSeparatedToggleButton = ({
  defaultTab = EMPTY_STRING,
  getSelectedTab = item => item,
  tabs = [],
  title = 'title',
}: {
  defaultTab: string;
  getSelectedTab: (item: string) => void;
  tabs?: Array<{id: number; name: string}>;
  title?: string;
}) => {
  const {colors} = useColors();
  const styles = recordInvestigationSeperatedToggleButtonStyles({colors});

  return (
    <View style={{gap: wp(20)}}>
      <AppText color={'text300'} text={title} />
      <View style={styles.container}>
        <AppRow>
          {tabs.map(tab => (
            <Tab
              text={tab.name}
              key={tab.id}
              isSelected={defaultTab === tab.name}
              onPress={() => getSelectedTab(tab.name)}
            />
          ))}
        </AppRow>
      </View>
    </View>
  );
};

export default RecordInvestigationSeparatedToggleButton;

const Tab = ({
  text = 'text',
  isSelected,
  onPress,
}: {
  text?: string;
  isSelected: boolean;
  onPress: VoidFunction;
}) => {
  const {colors} = useColors();
  const styles = recordInvestigationSeperatedToggleButtonStyles({
    colors,
    isSelected,
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <AppText
        color={isSelected ? 'white' : 'text400'}
        text={text}
        align="center"
      />
    </TouchableOpacity>
  );
};

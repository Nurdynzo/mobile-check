import {AppText} from '@/components/common';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import {EMPTY_STRING} from '@/utils/constants';
import React, {useEffect, useRef} from 'react';
import {FlatList, View} from 'react-native';
import InvestigationToggle from '../investigation-toggle';
import {recordInvestigationToggleButtonStyles} from './styles';
import InvestigationFormInputGroup from '../form-input-group';

const RecordInvestigationToggleButton = ({
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
  const styles = recordInvestigationToggleButtonStyles({colors});
  const scrollRef = useRef<FlatList>(null);
  const currentIndex = tabs.findIndex(value => value.name === defaultTab);

  useEffect(() => {
    if (
      scrollRef.current &&
      currentIndex !== null &&
      currentIndex !== undefined
    ) {
      scrollRef?.current?.scrollToIndex({
        animated: true,
        index:
          currentIndex === 0 || currentIndex === tabs.length - 1
            ? currentIndex
            : currentIndex - 0.2,
      });
    }
  }, [currentIndex, tabs.length]);

  return (
    <InvestigationFormInputGroup>
      <AppText color={'text300'} text={title} />
      {title && <AppText color={'text300'} text={title} />}
      <View style={styles.container}>
        <FlatList
          ref={scrollRef}
          horizontal
          contentContainerStyle={{gap: wp(10)}}
          data={tabs}
          keyExtractor={(item, index) => `${item?.id} ${index}`}
          renderItem={({item}) => (
            <InvestigationToggle
              text={item.name}
              key={item.id}
              isSelected={defaultTab === item.name}
              onPress={() => getSelectedTab(item.name)}
            />
          )}
        />
      </View>
    </InvestigationFormInputGroup>
  );
};

export default RecordInvestigationToggleButton;

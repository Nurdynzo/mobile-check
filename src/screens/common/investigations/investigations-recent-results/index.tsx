import {BinIcon, FilterIcon, RightCaretIcon} from '@/assets/svg';
import AllInputsHistoryListView from '@/components/all-inputs-history-list-view';
import AllInputsHistoryTile from '@/components/all-inputs-history-tile';
import {AppIconButton} from '@/components/buttons';
import AllInputsStatusButton from '@/components/buttons/all-inputs-status-button';
import {AppRow, AppText} from '@/components/common';
import AppSelectItemSheet from '@/components/sheets/app-select-item-sheet';
import {investigationsSummaryMenu} from '@/constants/requestInvestigations';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import {fs, wp} from '@/resources/config';
import VoidFunction from '@/types/voidfunction';
import {ListRenderItemInfo} from '@shopify/flash-list';
import React from 'react';
import {View} from 'react-native';
import {TitlesforRecordTypes} from '../../../doctor/stack-screens/allInputs/procedures/types';
import {investigationStyles} from '../styles';

const InvestigationRecentResults = () => {
  const {closeSheet, openSheet, sheetRef} = useSheet();

  const {colors} = useColors();
  const styles = investigationStyles({colors});
  const handleItem = (value: TitlesforRecordTypes) => {
    return value;
  };

  return (
    <>
      <AppRow extraStyles={styles.recentResultContainerHeader}>
        <AppText text={'Recent results'} type={'title_semibold'} />
        <AppIconButton
          icon={<FilterIcon fill={colors.primary400} />}
          height={wp(35)}
        />
      </AppRow>

      <AllInputsHistoryListView
        // TODO(Zucci): This is temporal and would be removed during integration
        data={[1, 2, 3, 4, 5, 6, 7]}
        renderItem={props => (
          <HistoryRenderItem {...props} openSheet={openSheet} />
        )}
      />
      <AppSelectItemSheet
        removeHeader
        sheetRef={sheetRef}
        selectOptions={investigationsSummaryMenu}
        renderRightIcon={({item}) =>
          item?.item?.value?.toLowerCase() === 'delete' ? (
            <BinIcon fill={colors.danger100} />
          ) : (
            <RightCaretIcon stroke={colors.text400} />
          )
        }
        onSelectItem={({item}) => {
          handleItem(item.value as TitlesforRecordTypes);
          closeSheet();
        }}
      />
    </>
  );
};

const HistoryTile = ({openSheet = () => null}: {openSheet?: VoidFunction}) => {
  return (
    <AllInputsHistoryTile
      onPress={openSheet}
      time="Today"
      date="8:00AM"
      textComponent={
        <View style={{gap: wp(5)}}>
          <AppText
            key={0}
            text={'Full blood count (FBC) results'}
            type={'title_semibold'}
          />
          <AppText
            key={1}
            text={'Whole blood taken at 06:54 AM on 11 May 2022'}
            type={'body_1_medium'}
            color="text300"
            style={{fontSize: fs(14)}}
          />
          <AppText
            key={3}
            text={'Date and time of result: 09:32 AM, 13 May 2022'}
            type={'body_1_medium'}
            color="text300"
            style={{fontSize: fs(14)}}
          />
          <AppText
            key={4}
            text={'Red cell count: 1.28 x 1012/L'}
            type={'body_1_semibold'}
            style={{fontSize: fs(16)}}
          />
          <AllInputsStatusButton text="High" />
        </View>
      }
    />
  );
};

const HistoryRenderItem = ({
  index,
  openSheet,
}: ListRenderItemInfo<number> & {openSheet?: VoidFunction}) => {
  return <HistoryTile key={index} openSheet={openSheet} />;
};

export default InvestigationRecentResults;

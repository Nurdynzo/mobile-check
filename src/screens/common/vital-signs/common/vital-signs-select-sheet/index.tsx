import {SelectedCheckBoxIcon, UnSelectedCheckBoxIcon} from '@/assets/svg';
import {AppButton} from '@/components/buttons';
import {AppSeperator, AppText} from '@/components/common';
import {AppSheetList} from '@/components/sheets';
import {hp, wp} from '@/resources/config';
import {PatientVitalsSummaryResponseDto} from '@/state/services/vitalSignsApi';
import {BaseSheetProps} from '@/types/sheet';
import VoidFunction from '@/types/voidfunction';
import {EMPTY_STRING} from '@/utils/constants';
import React, {FunctionComponent, useState} from 'react';
import {Pressable, View} from 'react-native';
import {vitalSignsStyles} from '../../styles';

const VitalSignsSelectSheet: FunctionComponent<
  {
    vitalSignsData: PatientVitalsSummaryResponseDto;
    onSubmit: (props: {selectedIds: number[]; reset: VoidFunction}) => void;
    isSubmitLoading?: boolean;
    headerTitle: string;
    submitLabel?: string;
  } & BaseSheetProps
> = ({
  closeSheet = () => null,
  sheetRef,
  vitalSignsData,
  onSubmit,
  isSubmitLoading,
  headerTitle,
  submitLabel = 'Continue',
}) => {
  const styles = vitalSignsStyles();

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelect = (id: number | undefined) => {
    if (id) {
      if (selectedIds.includes(id)) {
        setSelectedIds(preVS => preVS.filter(el => el !== id));
      } else {
        setSelectedIds(preVS => [...preVS, id]);
      }
    }
  };

  return (
    <AppSheetList
      headerTitle={headerTitle}
      AdditionalHeaderContent={
        <AppText
          text="Vital signs"
          type="subtitle_bold"
          color="text300"
          style={{marginBottom: wp(16)}}
        />
      }
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      modalHeight={hp(730)}
      data={vitalSignsData?.patientVitals}
      ItemSeparatorComponent={AppSeperator}
      contentContainerStyle={{gap: wp(24)}}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => (
        <VitalSignSelectCard
          onPress={() => handleSelect(item.id)}
          label={item.vitalSign?.sign}
          value={`${item.measurementSite?.site ?? EMPTY_STRING} ${
            item.vitalReading
          } ${item.measurementRange?.unit ?? EMPTY_STRING}`.trim()}
          isSelected={selectedIds.includes(item.id ?? 0)}
        />
      )}
      FooterComponent={
        <AppButton
          text={submitLabel}
          isDisabled={isSubmitLoading || !selectedIds.length}
          isLoading={isSubmitLoading}
          onPress={() => {
            onSubmit({
              selectedIds,
              reset: () => {
                setSelectedIds([]);
                closeSheet();
              },
            });
          }}
          containerStyle={[styles.sheetFooter, {alignSelf: undefined}]}
        />
      }
    />
  );
};

export default VitalSignsSelectSheet;

const VitalSignSelectCard: FunctionComponent<{
  label?: string | null;
  value?: string;
  isSelected?: boolean;
  onPress?: VoidFunction;
}> = ({label, value, isSelected, onPress}) => {
  const styles = vitalSignsStyles();

  return (
    <Pressable style={styles.selectCardContainer} onPress={onPress}>
      <View style={styles.selectCardDesc}>
        <AppText text={label} type="body_2_semibold" color="text300" />
        <AppText text={value} type="body_1_semibold" color="text400" />
      </View>

      {isSelected ? (
        <SelectedCheckBoxIcon height={wp(20)} width={wp(20)} />
      ) : (
        <UnSelectedCheckBoxIcon />
      )}
    </Pressable>
  );
};

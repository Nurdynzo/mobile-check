import {ExclamationCircleIcon, HeartIcon} from '@/assets/svg';
import {AppIconButton} from '@/components/buttons';
import {AppMenuSheet} from '@/components/sheets';
import * as Constants from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import {useSheet} from '@/hooks/useSheet';
import React, {FunctionComponent} from 'react';
import {PatientAppearanceValue} from './types';

export const NurseAllInputHeaderRightContent: FunctionComponent<{
  setPatientApperanceValue: (itemTitle: PatientAppearanceValue) => void;
  patientApperanceValue: PatientAppearanceValue;
}> = ({patientApperanceValue, setPatientApperanceValue}) => {
  const {closeSheet, openSheet, sheetRef} = useSheet();
  const {colors} = useColors();
  return (
    <>
      <AppIconButton
        icon={
          patientApperanceValue === 'Stable' ? (
            <HeartIcon fill={colors.primary400} />
          ) : (
            <ExclamationCircleIcon fill={colors.danger200} />
          )
        }
        borderColor={
          patientApperanceValue === 'Stable' ? 'primary400' : 'danger200'
        }
        onPress={openSheet}
      />
      <AppMenuSheet
        title="Patient appearance"
        sheetRef={sheetRef}
        closeSheet={closeSheet}
        menuOptions={[...Constants.patientAppearanceMenuOptions]}
        selectedValue={patientApperanceValue}
        onSelectItem={({item}) =>
          setPatientApperanceValue(item as PatientAppearanceValue)
        }
      />
    </>
  );
};

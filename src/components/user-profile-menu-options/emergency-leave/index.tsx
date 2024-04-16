import MenuOption from '@/components/menu-option';
import {AppContentSheet} from '@/components/sheets';
import {useSheet} from '@/hooks/useSheet';
import React, {FunctionComponent} from 'react';
import ExitWrapper from '../exit-wrapper';

const EmergencyLeave: FunctionComponent = () => {
  const {
    sheetRef: emergencyLeaveRef,
    openSheet: openEmergencyLeave,
    closeSheet: closeEmergencyLeave,
  } = useSheet();
  return (
    <>
      <MenuOption
        label="Emergency leave"
        valueTextColor="alert500"
        onPress={openEmergencyLeave}
      />
      <AppContentSheet sheetRef={emergencyLeaveRef} removeHeader>
        <ExitWrapper
          closeSheet={closeEmergencyLeave}
          onProceed={() => null}
          title="Emergency leave"
          titleColor="alert500"
          brief="You are about to leave the clinic for the day. Patients will be reassigned by the nurses"
          question="Do you wish to proceed?"
        />
      </AppContentSheet>
    </>
  );
};

export default EmergencyLeave;

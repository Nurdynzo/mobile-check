import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {BottomIndicatorTabSwitcher} from '@/components/tabs';
import * as Contants from '@/constants/index';
import {GeneralScreenProps} from '@/navigation/types';
import {Vaccination} from '@/screens/doctor/stack-screens/allInputs/prescription/vaccination';
import React, {FunctionComponent, useState} from 'react';
import MedicationAdministration from './medical-administration';
import {medicationStyles} from './styles';

const Medication: FunctionComponent<GeneralScreenProps<'NURSE_MEDICATION'>> = ({
  route,
}) => {
  const [selectedTab, setSelectedTab] = useState(Contants.medicationTabs[0]);
  const {encounterId, patientId} = route?.params ?? {};
  const styles = medicationStyles;

  return (
    <ScaffoldWithAnimatedHeader
      screenTitle={'Medication'}
      AdditionalHeaderContent={
        <BottomIndicatorTabSwitcher
          tabs={Contants.medicationTabs}
          onChangeTab={setSelectedTab}
          selectedTab={selectedTab}
          containerStyles={styles.tabSwitcherContainer}
          uniqueTabStyles={{
            Vaccination: {flex: 0.35},
            'Medication administration': {flex: 0.65},
          }}
        />
      }>
      {selectedTab === 'Medication administration' ? (
        <MedicationAdministration
          patientId={patientId}
          encounterId={encounterId}
        />
      ) : (
        <Vaccination encounterId={encounterId} />
      )}
    </ScaffoldWithAnimatedHeader>
  );
};

export default Medication;

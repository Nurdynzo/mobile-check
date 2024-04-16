import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {BottomIndicatorTabSwitcher} from '@/components/tabs';
import {prescriptionScreenTabs} from '@/constants/prescription';
import {GeneralScreenProps} from '@/navigation/types';
import {wp} from '@/resources/config';
import React, {useState} from 'react';
import PrescribeMedication from './prescribe-medication';
import {Vaccination} from './vaccination';

const Prescription = ({route}: GeneralScreenProps<'DOCTOR_PRESCRIPTIONS'>) => {
  const {encounterId, patientId} = route.params;

  const [activeTab, setActiveTab] = useState(prescriptionScreenTabs[0]);

  return (
    <ScaffoldWithAnimatedHeader
      screenTitle={'Prescription'}
      bodyHorizontalPadding={24}>
      <BottomIndicatorTabSwitcher
        tabs={prescriptionScreenTabs}
        onChangeTab={setActiveTab}
        selectedTab={activeTab}
        containerStyles={{marginBottom: wp(16)}}
      />
      {activeTab === 'Prescribe medication' ? (
        <PrescribeMedication patientId={patientId} encounterId={encounterId} />
      ) : (
        <Vaccination encounterId={encounterId} />
      )}
    </ScaffoldWithAnimatedHeader>
  );
};

export default Prescription;

import {AnalyticIcon} from '@/assets/svg';
import AppScreen from '@/components/app-screen';
import {AppButton} from '@/components/buttons';
import InpatientView from '@/components/doctor-and-nurse-landing-list/inpatient-view';
import {WelcomeHeader} from '@/components/headers';
import AppTabButtonSwitcher from '@/components/tabs/tab-button-switcher';
import * as Constants from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import OutpatientView from '@/screens/doctor/bottom-tabs/patients/outpatient-view';
import React, {useState} from 'react';
import {View} from 'react-native';
import {recordStyles} from '../../../front-desk/bottom-tabs/records/styles';
import {AccidentAndEmergencyView} from './accident-and-emergency';
import {doctorPatientStyle} from './styles';
import {DoctorViewTypes} from './types';

const Patients = () => {
  const [activeTab, setActiveTab] = useState<DoctorViewTypes | string>(
    'Outpatient',
  );
  const {colors} = useColors();
  const styles = doctorPatientStyle({colors, containerWidth: 268});
  const recordScreenStyles = recordStyles({colors});

  return (
    <AppScreen isScrollable={false}>
      <View style={styles.header}>
        <WelcomeHeader />
        <AppTabButtonSwitcher
          selectedTab={activeTab}
          onChangeTab={setActiveTab}
          tabs={Constants.tabViewsList.map(el => ({name: el}))}
          tabProps={{
            activeBgColor: 'neutral100',
            inActiveBgColor: 'white',
            activeTextColor: 'text400',
            inActiveTextColor: 'text300',
            textType: 'body_1_semibold',
            otherStyles: styles.tabButton,
          }}
          containerStyles={styles.tabSwitcherContainer}
        />
      </View>
      <BodyView currentView={activeTab} />
      <AppButton
        text="Analytics"
        containerStyle={recordScreenStyles.floatingBtn}
        LeftContent={<AnalyticIcon />}
      />
    </AppScreen>
  );
};

const BodyView = ({currentView}: {currentView: DoctorViewTypes}) => {
  if (currentView === 'A&E') {
    return <AccidentAndEmergencyView />;
  } else if (currentView === 'Inpatient') {
    return <InpatientView />;
  }
  return <OutpatientView />;
};

export default Patients;

import {AnalyticIcon} from '@/assets/svg';
import AppScreen from '@/components/app-screen';
import {AppButton} from '@/components/buttons';
import InpatientView from '@/components/doctor-and-nurse-landing-list/inpatient-view';
import {WelcomeHeader} from '@/components/headers';
import {AppTabButtonSwitcher} from '@/components/tabs';
import * as Constants from '@/constants/index';
import {useColors} from '@/hooks/useColors';
import React, {useState} from 'react';
import {View} from 'react-native';
import OutpatientView from './outpatient-view';
import {nursePatientStyle} from './styles';
import {NurseViewTypes} from './types';

const NursePatients = () => {
  const [activeTab, setActiveTab] = useState<NurseViewTypes>('Outpatient');
  const {colors} = useColors();
  const styles = nursePatientStyle({colors});

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
        containerStyle={styles.floatingBtn}
        LeftContent={<AnalyticIcon />}
      />
    </AppScreen>
  );
};

const BodyView = ({currentView}: {currentView: NurseViewTypes}) => {
  switch (currentView) {
    case 'A&E':
      return <></>;
    case 'Outpatient':
      return <OutpatientView />;
    case 'Inpatient':
      return <InpatientView />;
    default:
      return <></>;
  }
};

export default NursePatients;

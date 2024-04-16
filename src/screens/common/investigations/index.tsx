import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {ScrollableTab} from '@/components/tabs';
import {investigationsTabs} from '@/constants/requestInvestigations';
import {GeneralScreenProps} from '@/navigation/types';
import {wp} from '@/resources/config';
import React, {useState} from 'react';
import RecentResultForInvestigations from './recent-result-for-investigations';
import RecordInvestigations from './record-investigations';
import RequestInvestigations from './request-investigations';

const Investigations = ({route}: GeneralScreenProps<'INVESTIGATIONS'>) => {
  const [currentTab, setCurrentTab] = useState<number | null>(0);
  const encounterId = route.params.encounterId;

  return (
    <ScaffoldWithAnimatedHeader
      screenTitle="Investigations"
      AdditionalHeaderContent={
        <>
          <ScrollableTab
            tabs={investigationsTabs}
            currentIndex={currentTab}
            activeColor={{background: 'default300'}}
            unActiveColor={{background: 'neutral100'}}
            onPress={index =>
              setCurrentTab(currentTab !== index ? index : null)
            }
            style={{paddingVertical: wp(10)}}
          />
        </>
      }>
      {renderContent(currentTab, route.params?.patientId, encounterId)}
    </ScaffoldWithAnimatedHeader>
  );
};

const renderContent = (
  activeTab: number | null,
  patientId: number,
  encounterId: number,
) => {
  switch (activeTab) {
    case 0:
      return <RecentResultForInvestigations />;
    case 1:
      return <RequestInvestigations encounterId={encounterId} />;
    case 2:
      return <RecordInvestigations encounterId={encounterId} />;

    default:
      return <></>;
  }
};

export default Investigations;

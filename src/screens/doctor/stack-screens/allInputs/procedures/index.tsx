import {tabsForProcedures} from '@/constants/procedures';
import React, {FunctionComponent, useState} from 'react';
import RecordProceduresView from './common/record-procedures-view';
import RequestProceduresView from './common/request-procedures-view';
import {GeneralScreenProps} from '@/navigation/types';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {BottomIndicatorTabSwitcher} from '@/components/tabs';
import {wp} from '@/resources/config';

const Procedures: FunctionComponent<
  GeneralScreenProps<'DOCTOR_PROCEDURES'>
> = ({route}) => {
  const {encounterId} = route.params;
  const [activeTab, setActiveTab] = useState(tabsForProcedures[0]);

  return (
    <ScaffoldWithAnimatedHeader
      bodyHorizontalPadding={0}
      screenTitle={'Procedures'}>
      <BottomIndicatorTabSwitcher
        tabs={tabsForProcedures}
        onChangeTab={setActiveTab}
        selectedTab={activeTab}
        containerStyles={{marginBottom: wp(16), marginHorizontal: wp(24)}}
      />
      {activeTab === 'Request procedures' ? (
        <RequestProceduresView encounterId={encounterId} />
      ) : (
        <RecordProceduresView encounterId={encounterId} />
      )}
    </ScaffoldWithAnimatedHeader>
  );
};

export default Procedures;

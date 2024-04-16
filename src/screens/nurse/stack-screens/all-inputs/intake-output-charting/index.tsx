import {AppButton} from '@/components/buttons';
import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {BottomIndicatorTabSwitcher} from '@/components/tabs';
import * as Contants from '@/constants/index';
import {GeneralScreenProps} from '@/navigation/types';
import {wp} from '@/resources/config';
import {
  useApiServicesAppIntakeoutputGetintakesuggestionsGetQuery,
  useApiServicesAppIntakeoutputGetoutputsuggestionsGetQuery,
} from '@/state/services/intakeOutputApi';
import React, {FunctionComponent, useState} from 'react';
import IntakeOutputChartingView from './intake-output-charting-view';
import {useGetIntakeOutputSavedHistory} from './intake-output-charting-view/use-get-intake-output-saved-history';
import {intakeOrOutputChartViewStyles} from './styles';
import {useSaveIntake} from './use-save-intake';
import {useSaveOutput} from './use-save-output';

const IntakeOutputCharting: FunctionComponent<
  GeneralScreenProps<'NURSE_INTAKE_OUTPUT_CHARTING'>
> = ({route}) => {
  const {patientId, encounterId} = route.params;
  const [selectedTab, setSelectedTab] = useState(
    Contants.intakeOutputCharting[0],
  );

  return (
    <ScaffoldWithAnimatedHeader
      screenTitle={'Medication'}
      AdditionalHeaderContent={
        <BottomIndicatorTabSwitcher
          tabs={Contants.intakeOutputCharting}
          onChangeTab={setSelectedTab}
          selectedTab={selectedTab}
          containerStyles={{paddingHorizontal: wp(24), paddingBottom: wp(16)}}
        />
      }>
      {selectedTab === 'Intake' ? (
        <IntakeChartingView encounterId={encounterId} patientId={patientId} />
      ) : (
        <OutputChartingView encounterId={encounterId} patientId={patientId} />
      )}
    </ScaffoldWithAnimatedHeader>
  );
};

export default IntakeOutputCharting;

const IntakeChartingView: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({patientId, encounterId}) => {
  const {data} = useApiServicesAppIntakeoutputGetintakesuggestionsGetQuery({
    patientId,
  });

  const {currentData: intakeHistory} = useGetIntakeOutputSavedHistory({
    patientId,
    type: 'INTAKE',
  });

  const {handleSave, isCreateIntakeLoading} = useSaveIntake({
    patientId,
    encounterId,
  });

  return (
    <IntakeOutputChartingView
      title="Intake"
      isSavingSummary={isCreateIntakeLoading}
      chartingSuggestions={data?.suggestedText ?? []}
      TralingComponent={
        <AppButton
          text={'Graph'}
          isDisabled
          containerStyle={intakeOrOutputChartViewStyles.editBtn}
        />
      }
      chartingSummary={intakeHistory}
      onSave={handleSave}
    />
  );
};

const OutputChartingView: FunctionComponent<{
  patientId: number;
  encounterId: number;
}> = ({patientId, encounterId}) => {
  const {data} = useApiServicesAppIntakeoutputGetoutputsuggestionsGetQuery({
    patientId,
  });

  const {currentData: outputHistory} = useGetIntakeOutputSavedHistory({
    patientId,
    type: 'OUTPUT',
  });

  const {handleSave, isCreateOutputLoading} = useSaveOutput({
    patientId,
    encounterId,
  });
  return (
    <IntakeOutputChartingView
      title="Output"
      isSavingSummary={isCreateOutputLoading}
      chartingSuggestions={data?.suggestedText ?? []}
      chartingSummary={outputHistory}
      onSave={handleSave}
    />
  );
};

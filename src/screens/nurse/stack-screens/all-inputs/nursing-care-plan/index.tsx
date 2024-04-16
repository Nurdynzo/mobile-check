import ScaffoldWithAnimatedHeader from '@/components/scaffolds/scaffold-with-animated-header';
import {useColors} from '@/hooks/useColors';
import {GeneralScreenProps} from '@/navigation/types';
import React, {FunctionComponent} from 'react';
import Activities from './activities';
import Evaluations from './evaluation';
import NursingDiagnosis from './nursing-diagnosis';
import NursingInterventions from './nursing-interventions';
import NursingOutcomes from './nursing-outcomes';
import {nursingCarePlanStyles} from './styles';
import useAllInputsMutipleSuggestionForm from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-muliple-suggestion-form';

const NursingCarePlan: FunctionComponent<
  GeneralScreenProps<'NURSING_CARE_PLAN'>
> = ({route}) => {
  const {colors} = useColors();

  const {encounterId, patientId} = route.params ?? {};

  const styles = nursingCarePlanStyles({colors});
  const formProps = useAllInputsMutipleSuggestionForm();

  return (
    <ScaffoldWithAnimatedHeader
      screenTitle={'Nurse care plan'}
      contentContainerStyle={styles.screen}>
      <NursingDiagnosis formProps={formProps} />
      <NursingOutcomes formProps={formProps} />
      <NursingInterventions formProps={formProps} />
      <Activities formProps={formProps} />
      <Evaluations
        patientId={patientId}
        encounterId={encounterId}
        formProps={formProps}
      />
    </ScaffoldWithAnimatedHeader>
  );
};

export default NursingCarePlan;

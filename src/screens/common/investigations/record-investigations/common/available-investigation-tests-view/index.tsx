import {useNewAllInputsSuggestionForm} from '@/components/forms/all-inputs-suggestion-form/use-all-inputs-suggestion-form';
import RecordInvestigationSuggestionSelectionForm from '@/components/forms/record-investigation-suggestion-selection-form';
import {AppTabComponent} from '@/components/tabs/tab-switch';
import {investigationsRecentResultsTabs} from '@/constants/requestInvestigations';
import {useColors} from '@/hooks/useColors';
import {wp} from '@/resources/config';
import {useAppSelector} from '@/state/hooks';
import {useApiServicesAppInvestigationGetinvestigationsrequestsGetQuery} from '@/state/services/investigationApi';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {EMPTY_STRING} from '@/utils/constants';
import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {investigationStyles} from '../../../styles';
import {SingleInvestigationTestType} from './use-get-available-investigations-tests/type';

/**
 * @description This component is responsible exclusively for the selection of a test.
 * It returns the selected test only.
 */
const AvailableInvestigationTestsView = ({
  children,
  getSelectedTest = props => props,
}: {
  children: ReactNode;
  getSelectedTest?: (test: SingleInvestigationTestType) => void;
}) => {
  const {colors} = useColors();
  const styles = investigationStyles({colors});

  const {id} = useAppSelector(selectPatient);
  const {data: availableInvestigations} =
    useApiServicesAppInvestigationGetinvestigationsrequestsGetQuery(
      {
        patientId: id,
        type: EMPTY_STRING,
      },
      {
        selectFromResult: result => ({
          ...result,
          data: result.data?.map(
            item =>
              ({
                ...item,
                id: `${item.id}`,
              } as SingleInvestigationTestType),
          ),
        }),
      },
    );

  const investigationFormProps =
    useNewAllInputsSuggestionForm<SingleInvestigationTestType>({
      isSingleSelect: true,
    });
  const {selectedItems: selectedTest, setSelectedItems} =
    investigationFormProps;

  return (
    <>
      <RecordInvestigationSuggestionSelectionForm
        expandSheetHeaderTitle={EMPTY_STRING}
        formProps={{
          ...investigationFormProps,
          handleAddItem: props => {
            setSelectedItems([props]);
            getSelectedTest(props);
          },
        }}
        suggestions={availableInvestigations || []}
      />
      <View style={{paddingHorizontal: wp(20)}}>
        <AppTabComponent
          tabs={investigationsRecentResultsTabs}
          activeTab={selectedTest[0]?.type as string}
          setActiveTab={() => null}
        />
        <View style={styles.recentResultContainer}>{children}</View>
      </View>
    </>
  );
};
export default AvailableInvestigationTestsView;

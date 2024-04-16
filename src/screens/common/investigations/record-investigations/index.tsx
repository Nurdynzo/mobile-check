import {useAppSelector} from '@/state/hooks';
import {
  GetInvestigationResponse,
  useApiServicesAppInvestigationGetinvestigationGetQuery,
} from '@/state/services/investigationApi';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import VoidFunction from '@/types/voidfunction';
import getSpecimenForASingleTest from '@/utils/helpers/get-specimen-for-a-single-test';
import React, {useState} from 'react';
import AvailableInvestigationTestsView from './common/available-investigation-tests-view';
import {SingleInvestigationTestType} from './common/available-investigation-tests-view/use-get-available-investigations-tests/type';
import DynamicTestForm from './common/dynamic-test-form';
import {RangeInputFormResponseValues} from './common/form/ranges-input-form/type';
import MicrobiologyFormView from './common/microbiology-form-view';
import RadiologyAndPulmFormView from './common/radiology-pulm-form-view';
import SpecimenInvestigationTestForm from './common/investigation-filters/specimen-investigation-test-form';
import {RawTestDetailsTypes, SpecimenInvestigationTestFormType} from './type';
import useSaveRecordedInvestigations from './use-save-recorded-investigations';

const RecordInvestigations = ({encounterId}: {encounterId: number}) => {
  const {id: patientId} = useAppSelector(selectPatient);
  const {handleRecordInvestigation, isLoading} =
    useSaveRecordedInvestigations();
  const [selectedTest, setSelectedTest] =
    useState<SingleInvestigationTestType | null>();
  const [
    specimenInvestigationTestFormValues,
    setSpecimenInvestigationTestFormValues,
  ] = useState<SpecimenInvestigationTestFormType | null>();
  const [ranges, setRanges] = useState<Array<RangeInputFormResponseValues>>([]);

  const handleUpdateRanges = (newRange: RangeInputFormResponseValues) => {
    const updatedRanges = [...ranges];
    const rangeIndex = updatedRanges.findIndex(
      range => range.name === newRange.name,
    );
    if (rangeIndex !== -1) {
      updatedRanges[rangeIndex] = newRange;
    } else {
      updatedRanges.push(newRange);
    }
    setRanges(updatedRanges);
  };

  const handleUniqueRanges = (uniqueRanges: RangeInputFormResponseValues[]) => {
    uniqueRanges.forEach(range => handleUpdateRanges(range));
  };

  const shouldDisable = !specimenInvestigationTestFormValues;

  const reset = () => {
    setSelectedTest(null);
    setSpecimenInvestigationTestFormValues(null);
    setRanges([]);
  };

  const {data: selectedTestDetails} =
    useApiServicesAppInvestigationGetinvestigationGetQuery(
      {
        id: Number(selectedTest?.investigationId),
        patientId,
      },
      {
        skip: !selectedTest,
        refetchOnMountOrArgChange: true,
      },
    );

  const handleSubmit = () => {
    if (selectedTest) {
      const rawTestPayload: RawTestDetailsTypes = {
        testDynamicRangeDetails: ranges,
        testRegularDetails:
          specimenInvestigationTestFormValues as SpecimenInvestigationTestFormType,
        selectedTest: selectedTest,
        patientId,
        encounterId,
      };
      handleRecordInvestigation(rawTestPayload, () => reset());
    }
  };

  return (
    <>
      <AvailableInvestigationTestsView
        getSelectedTest={data => setSelectedTest(data)}>
        <>
          {selectedTest && (
            <RenderUIforTest
              selectedTest={selectedTest}
              handleUpdateRanges={handleUpdateRanges}
              getUniqueComponents={handleUniqueRanges}
              selectedTestDetails={selectedTestDetails}
              setRegularFormDetails={setSpecimenInvestigationTestFormValues}
              onPressSubmitButton={handleSubmit}
              isSubmitButtonDisabled={shouldDisable}
              isSubmitButtonLoading={isLoading}
              encounterId={encounterId}
            />
          )}
        </>
      </AvailableInvestigationTestsView>
    </>
  );
};

export default RecordInvestigations;

const RenderUIforTest = ({
  selectedTest,
  selectedTestDetails,
  setRegularFormDetails,
  handleUpdateRanges,
  getUniqueComponents,
  isSubmitButtonDisabled,
  isSubmitButtonLoading,
  onPressSubmitButton,
  encounterId,
}: {
  selectedTest: SingleInvestigationTestType;
  selectedTestDetails: GetInvestigationResponse | undefined;
  setRegularFormDetails: React.Dispatch<
    React.SetStateAction<SpecimenInvestigationTestFormType | null | undefined>
  >;
  handleUpdateRanges: (newRange: RangeInputFormResponseValues) => void;
  getUniqueComponents: (newRange: RangeInputFormResponseValues[]) => void;
  isSubmitButtonDisabled?: boolean;
  isSubmitButtonLoading?: boolean;
  onPressSubmitButton?: VoidFunction;
  encounterId: number;
}) => {
  if (
    selectedTest?.type?.includes('Radiology + Pulm') ||
    selectedTest?.type?.includes('Electrophysiology')
  ) {
    return (
      <RadiologyAndPulmFormView
        selectedTest={selectedTest}
        encounterId={encounterId}
      />
    );
  }

  if (selectedTest?.type?.includes('Microbiology')) {
    return (
      <MicrobiologyFormView
        selectedTest={selectedTest}
        encounterId={encounterId}
      />
    );
  }

  return (
    <SpecimenInvestigationTestForm
      isSubmitButtonDisabled={isSubmitButtonDisabled}
      isSubmitButtonLoading={isSubmitButtonLoading}
      onPressSubmitButton={onPressSubmitButton}
      selectedTest={selectedTest}
      specimenSuggestions={getSpecimenForASingleTest({
        testDetails: selectedTestDetails,
      }).map(item => ({
        id: item.snomedId,
        name: item.result,
      }))}
      getSpecimenInvestigationTestFormValues={setRegularFormDetails}
      dynamicForm={
        selectedTestDetails && (
          <DynamicTestForm
            getUniqueTestDetails={data => {
              getUniqueComponents(data);
            }}
            testDetails={selectedTestDetails}
            getTouchedValues={values => {
              handleUpdateRanges(values);
            }}
          />
        )
      }
    />
  );
};

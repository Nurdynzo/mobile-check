import {UrineProteinsTabs} from '@/constants/recordInvestigationsTests';
import {EMPTY_STRING} from '@/utils/constants';
import analyzeInvestigationTestDetails from '@/utils/helpers/analyze-Investigation-test-details';
import uniqueRanges from '@/utils/helpers/uniqueRange';
import React from 'react';
import MultipleRangeUnitSelector from '../form/multiple-range-unit-selector';
import {RangeInputFormResponseValues} from '../form/ranges-input-form/type';
import CSFAnalysisForm from '../form/unique-forms/chemistry/csf-analysis-form';
import SerumPregnancyTestForm from '../form/unique-forms/chemistry/serum-pregnancy-test-form';
import UrineGlucoseForm from '../form/unique-forms/chemistry/urine-glucose-form';
import UrinePregnancyTestForm from '../form/unique-forms/chemistry/urine-pregnancy-test-form';
import BloodFilmForm from '../form/unique-forms/haematology/blood-film-form';
import BloodGroupAndRhForm from '../form/unique-forms/haematology/blood-group-and-rh-form';
import G6pdScreeningForm from '../form/unique-forms/haematology/g6pd-screening-form';
import GroupAndCrossMatchForm from '../form/unique-forms/haematology/group-and-cross-match-form';
import SicklingTestForm from '../form/unique-forms/haematology/sickling-test-form';
import CD4Form from '../form/unique-forms/serology/cd4-count-form';
import HepatitisBProfileForm from '../form/unique-forms/serology/hepatitis-b-profile-form';
import HepatitisBsurfaceAntigenForm from '../form/unique-forms/serology/hepatitis-b-surface-antigen-form';
import HepatitisCvirusForm from '../form/unique-forms/serology/hepatitis-c-virus-form';
import ViralLoadForm from '../form/unique-forms/serology/viral-load-form';
import {DynamicTestFormType, UniqueTestDetails} from './type';

/** @description This only returns the data for dynamic part of the test. */
const DynamicTestForm = ({
  testDetails,
  getTouchedValues = values => values,
  getUniqueTestDetails = data => data,
}: DynamicTestFormType) => {
  return (
    <>
      <RenderForm
        testDetails={testDetails}
        getTouchedValues={values => getTouchedValues(values)}
        getUniqueTestDetails={data => data}
      />
      <RenderAdditionalHaematologyForm
        getUniqueTestDetails={data => getUniqueTestDetails(data)}
        testName={`${testDetails.name}`}
      />
      <RenderAdditionalChemistryForm
        getUniqueTestDetails={data => getUniqueTestDetails(data)}
        testName={`${testDetails.name}`}
      />
      <RenderAdditionalSerologyForm
        getUniqueTestDetails={data => getUniqueTestDetails(data)}
        testName={`${testDetails.name}`}
      />
    </>
  );
};

export default DynamicTestForm;

const RenderForm = ({
  testDetails,
  getTouchedValues = values => values,
}: DynamicTestFormType) => {
  const response = analyzeInvestigationTestDetails(testDetails);
  switch (response.typeOfDetail) {
    case 'details has components that has ranges too':
    case 'details has components and ranges':
      return (
        <>
          {response?.components?.map((component, componentIndex: number) => {
            if (component?.ranges && component?.ranges?.length > 0) {
              return (
                <MultipleRangeUnitSelector
                  key={componentIndex}
                  title={component?.name as string}
                  ranges={uniqueRanges(component?.ranges)}
                  extraData={
                    testDetails.name
                      ?.toLowerCase()
                      .includes('Urine proteins'.toLowerCase())
                      ? {
                          tabs: UrineProteinsTabs,
                          type: 'tab',
                        }
                      : null
                  }
                  getData={data => {
                    return getTouchedValues({
                      ...data,
                      id: response?.components?.[componentIndex]?.id,
                      snomedId: `${response?.components?.[componentIndex]?.snomedId}`,
                      synonyms: `${response?.components?.[componentIndex]?.synonyms}`,
                      category: EMPTY_STRING, //TODO(ZUCCI): Ask BE for this.
                      name: `${response?.components?.[componentIndex]?.name}`,
                      shortName: `${response?.components?.[componentIndex]?.shortName}`,
                      //return more things from the range if important.
                    });
                  }}
                />
              );
            }
          })}
        </>
      );
    case 'details has ranges':
      // Handle the case where there are only ranges without components
      // You might need to adjust this part based on how you want to display ranges without components
      return <></>;
    // Add cases for other types of details as necessary
    default:
      return <></>;
  }
};

const checkTypeOfTest = (testName: string, test: string) =>
  testName?.toLowerCase().includes(test.toLowerCase());

/** @description Renders conditionally, based on the current test passed.  */
const RenderAdditionalHaematologyForm = ({
  testName,
  getUniqueTestDetails = data => data,
}: {
  testName: string;
  getUniqueTestDetails: (data: UniqueTestDetails) => void;
}) => {
  if (checkTypeOfTest(testName, 'Group & cross match')) {
    return (
      <GroupAndCrossMatchForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'Blood Group & Rh')) {
    return (
      <BloodGroupAndRhForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'Sickling test')) {
    return (
      <SicklingTestForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'G6PD screening')) {
    return (
      <G6pdScreeningForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'Blood film')) {
    return <BloodFilmForm getData={data => getUniqueTestDetails(data)} />;
  } else {
    return <></>;
  }
};
/** @description Renders conditionally, based on the current test passed.  */
const RenderAdditionalChemistryForm = ({
  testName,
  getUniqueTestDetails,
}: {
  testName: string;
  getUniqueTestDetails: (data: UniqueTestDetails) => void;
}) => {
  if (checkTypeOfTest(testName, 'Csf analysis')) {
    return (
      <CSFAnalysisForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'Serum pregnancy test')) {
    return (
      <SerumPregnancyTestForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'Urine glucose')) {
    return (
      <UrineGlucoseForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'Urine pregnancy test')) {
    return (
      <UrinePregnancyTestForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else {
    return <></>;
  }
};
/** @description Renders conditionally, based on the current test passed.  */
const RenderAdditionalSerologyForm = ({
  testName,
  getUniqueTestDetails,
}: {
  testName: string;
  getUniqueTestDetails: (data: RangeInputFormResponseValues[]) => void;
}) => {
  if (checkTypeOfTest(testName, 'Hepatitis B surface antigen')) {
    return (
      <HepatitisBsurfaceAntigenForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'Hepatitis B profile')) {
    return (
      <HepatitisBProfileForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'CD4 count')) {
    return (
      <CD4Form getData={data => getUniqueTestDetails(data)} title={testName} />
    );
  } else if (checkTypeOfTest(testName, 'Viral load')) {
    return (
      <ViralLoadForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else if (checkTypeOfTest(testName, 'Hepatitis C virus')) {
    return (
      <HepatitisCvirusForm
        getData={data => getUniqueTestDetails(data)}
        title={testName}
      />
    );
  } else {
    return <></>;
  }
};

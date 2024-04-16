import {AppButton} from '@/components/buttons';
import {AppRow, AppText} from '@/components/common';
import {AllInputsSuggestionForm} from '@/components/forms';
import Pill from '@/components/tabs/pill';
import {useColors} from '@/hooks/useColors';
import {fs, wp} from '@/resources/config';
import {SnowstormSimpleResponseDto} from '@/state/services/snowstorm';
import {EMPTY_STRING} from '@/utils/constants';
import React, {ReactNode, useEffect} from 'react';
import {View} from 'react-native';
import InvestigationsCameraViewButton from '../../../../investigations-camera-view-button';
import InvestigationsUploadedImageView from '../../../../investigations-uploaded-image-view';
import {investigationStyles} from '../../../../styles';
import {SpecimenInvestigationTestFormType} from '../../../type';

import {SingleInvestigationTestType} from '../../available-investigation-tests-view/use-get-available-investigations-tests/type';
import DateTimeFormView from '../../form/date-time-form-view';
import useSpecimenInvestigationTestForm from './useSpecimenInvestigationTestForm';

/** @description This component is responsible for managing static forms and returning their data. */
const SpecimenInvestigationTestForm = ({
  dynamicForm,
  history,
  selectedTest,
  getSpecimenInvestigationTestFormValues = details => details,
  specimenSuggestions,
  isSubmitButtonDisabled,
  isSubmitButtonLoading,
  onPressSubmitButton,
}: {
  dynamicForm: ReactNode;
  history?: ReactNode;
  selectedTest: SingleInvestigationTestType;
  specimenSuggestions?: Array<SnowstormSimpleResponseDto>;
  getSpecimenInvestigationTestFormValues?: (
    details: SpecimenInvestigationTestFormType,
  ) => void;
  isSubmitButtonDisabled?: boolean;
  isSubmitButtonLoading?: boolean;
  onPressSubmitButton?: () => void;
}) => {
  const {colors} = useColors();
  const styles = investigationStyles({colors});

  const {
    handleUpdateForm,
    specimenInvestigationTestForm,
    specimenFormHandler,
    isSampleAndResultFieldsFilled,
    resetSpecimenInvestigationTestForm,
    resetSpecimen,
    resetConclusions,
  } = useSpecimenInvestigationTestForm();

  useEffect(() => {
    if (isSampleAndResultFieldsFilled()) {
      getSpecimenInvestigationTestFormValues(specimenInvestigationTestForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specimenInvestigationTestForm]);

  useEffect(() => {
    resetSpecimenInvestigationTestForm();
    resetSpecimen();
    resetConclusions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTest]);

  return (
    <>
      <AppRow extraStyles={styles.recentResultContainerHeader}>
        <AppText
          text={`Record results ${
            selectedTest?.name ? `for ${selectedTest?.name}` : EMPTY_STRING
          }`}
          type={'title_semibold'}
        />
      </AppRow>
      <Pill text="Specimen" />
      <View style={{gap: wp(10)}}>
        {/* TODO(ZUCCI): Review to remove type casting of Date */}
        <DateTimeFormView
          dateOfResult={specimenInvestigationTestForm?.dateOfResult as Date}
          dateOfSampleCollection={
            specimenInvestigationTestForm?.dateOfSampleCollection as Date
          }
          timeOfResult={specimenInvestigationTestForm?.timeOfResult as Date}
          timeOfSampleCollection={
            specimenInvestigationTestForm?.timeOfSampleCollection as Date
          }
          onUpdateForm={(field, date) => handleUpdateForm(field, date as Date)}
        />
        <AllInputsSuggestionForm
          formProps={{
            ...specimenFormHandler,
            handleAddItem: item => {
              handleUpdateForm('specimens', item);
              specimenFormHandler.setSelectedItems(prev => [...prev, item]);
            },
            handleRemoveItem: _ => {
              handleUpdateForm('specimens', []);
              specimenFormHandler.setSelectedItems([]);
            },
          }}
          suggestions={specimenSuggestions || []}
          expandSheetHeaderTitle="Search Specimen"
          placeholder="Enter specimen"
        />
        {dynamicForm}
        <View style={{gap: wp(5)}}>
          <AppText
            text={'Conclusion'}
            color="text300"
            type={'label_semibold'}
          />
          <AllInputsSuggestionForm
            formProps={specimenFormHandler}
            suggestions={[]}
            expandSheetHeaderTitle="Search conclusion"
            placeholder="Enter conclusion"
          />
        </View>
        <AppRow>
          <AppRow columnGap={5}>
            <InvestigationsCameraViewButton
              getSelectedImage={image =>
                handleUpdateForm('images', image?.path as string)
              }
            />
            <AppText
              text={`${specimenInvestigationTestForm?.images.length} images uploaded in total`}
              type={'body_1_semibold'}
              style={{fontSize: fs(14)}}
            />
          </AppRow>
          <InvestigationsUploadedImageView
            images={specimenInvestigationTestForm?.images}
          />
        </AppRow>
        <AppButton
          isDisabled={isSubmitButtonDisabled}
          text="Save"
          isLoading={isSubmitButtonLoading}
          onPress={onPressSubmitButton}
          containerStyle={[styles.miniSaveBtn, {marginTop: wp(32)}]}
        />
        {history}
      </View>
    </>
  );
};

export default SpecimenInvestigationTestForm;

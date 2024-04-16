import {AppButton} from '@/components/buttons';
import {AppRow, AppText} from '@/components/common';
import {AllInputsSuggestionForm} from '@/components/forms';
import Pill from '@/components/tabs/pill';
import {useColors} from '@/hooks/useColors';
import {fs, wp} from '@/resources/config';
import InvestigationsCameraViewButton from '@/screens/common/investigations/investigations-camera-view-button';
import InvestigationsUploadedImageView from '@/screens/common/investigations/investigations-uploaded-image-view';
import {investigationStyles} from '@/screens/common/investigations/styles';
import {useAppSelector} from '@/state/hooks';
import {selectPatient} from '@/state/slices/patient/selectedPatient';
import {EMPTY_STRING} from '@/utils/constants';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {SingleInvestigationTestType} from '../available-investigation-tests-view/use-get-available-investigations-tests/type';
import DateTimeFormView from '../form/date-time-form-view';
import {
  RadiologyAndPulmFormType,
  RawRadiologyAndPulmTestDetailsTypes,
} from './type';
import useRadiologyAndPulmTestForm from './use-radiology-and-pulm-test-form';
import useSaveRadiologyAndPulm from './use-save-radiology-and-pulm';

/** @description This component is responsible for managing static forms and returning their data for only Radiology and pulm and Electrophysiology. */
const RadiologyAndPulmFormView = ({
  selectedTest,
  encounterId,
}: {
  selectedTest: SingleInvestigationTestType;
  encounterId: number;
}) => {
  const {colors} = useColors();
  const styles = investigationStyles({colors});
  const {id: patientId} = useAppSelector(selectPatient);
  const {handleRecordInvestigationForRadiologyAndPulm, isLoading} =
    useSaveRadiologyAndPulm();

  const {
    handleUpdateForm,
    regularTestForm,
    isSampleAndResultFieldsFilled,
    resetRegularTestForm,
    resetConclusions,
    conclusionFormHandler,
  } = useRadiologyAndPulmTestForm();

  useEffect(() => {
    resetRegularTestForm();
    resetConclusions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTest]);

  const onSave = () => {
    const rawTestPayload: RawRadiologyAndPulmTestDetailsTypes = {
      testRegularDetails: regularTestForm,
      selectedTest: selectedTest,
      patientId,
      encounterId,
    };
    handleRecordInvestigationForRadiologyAndPulm(rawTestPayload, () =>
      resetRegularTestForm(),
    );
  };

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
        <DateTimeFormView
          type="Radiology + Pulm"
          dateOfResult={regularTestForm?.dateOfResult as Date}
          timeOfResult={regularTestForm?.timeOfResult as Date}
          onUpdateForm={(field, date) =>
            handleUpdateForm(
              field as keyof RadiologyAndPulmFormType,
              date as Date,
            )
          } //TODO(ZUCCI) make this onUpdateForm generic
        />
        <View style={{gap: wp(5)}}>
          <AppText
            text={'Conclusion'}
            color="text300"
            type={'label_semibold'}
          />
          <AllInputsSuggestionForm
            formProps={conclusionFormHandler}
            suggestions={[]}
            expandSheetHeaderTitle="Search conclusion"
            placeholder="Enter conclusion"
          />
        </View>
        <AppRow>
          <AppRow
            columnGap={5}
            extraStyles={{
              justifyContent: 'flex-start',
            }}>
            <InvestigationsCameraViewButton
              getSelectedImage={image =>
                handleUpdateForm('images', image?.path as string)
              }
            />
            <AppText
              text={`${regularTestForm?.images.length} images uploaded in total`}
              type={'body_1_semibold'}
              style={{fontSize: fs(14)}}
            />
          </AppRow>
          <InvestigationsUploadedImageView images={regularTestForm?.images} />
        </AppRow>
      </View>
      <AppButton
        isDisabled={!isSampleAndResultFieldsFilled()}
        text="Save"
        isLoading={isLoading}
        onPress={onSave}
        containerStyle={[styles.miniSaveBtn, {marginTop: wp(32)}]}
      />
    </>
  );
};

export default RadiologyAndPulmFormView;
